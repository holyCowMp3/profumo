'use strict';

/**
 * Callback.js controller
 *
 * @description: A set of functions called "actions" for managing `Callback`.
 */
const {base64decode, base64encode } = require('nodejs-base64');
const NovaPoshta = require('novaposhta_3');
module.exports = {

  /**
   * Retrieve callback records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, {populate} = {}) => {
    if (ctx.query._q) {
      return strapi.services.callback.search(ctx.query);
    } else {
      return strapi.services.callback.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a callback record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.callback.fetch(ctx.params);
  },

  /**
   * Count callback records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.callback.count(ctx.query);
  },

  /**
   * Create a/an callback record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const LiqPay = require('liqpay-sdk');
    let liqPayConf = require('../../liqpayConf.json');
    const liqPay = LiqPay(liqPayConf.public, liqPayConf.private);
    var sign = liqPay.str_to_sign(
      liqPayConf.private +
      ctx.request.body.data +
      liqPayConf.private
    );
    let text = base64decode(ctx.request.body.data);
    if (sign === ctx.request.body.signature) {
      let result = await strapi.services.callback.add(JSON.parse(text));
      switch (result.status) {
        case 'success':
        case 'wait_accept': {
          let liqPayConf = require('../../liqpayConf.json');
          let novaPoshta = new NovaPoshta({apiKey: liqPayConf.nova_poshta});
          let profumoCounterparty = '4187cb04-cd83-11e9-9937-005056881c6b';
          let order = await strapi.services.order.fetch({'_id': result.order_id});
          if (order) {
            let price = 0;
            for (let product of order.orders) {
              let productFromDb = await strapi.services.product.fetch({'_id': product.product.id});
              let category = await strapi.services.category.fetch({'_id': productFromDb.category});
              let minusPrice = 0;
              if (category.discount) {
                minusPrice += (productFromDb.price * (category.discount.percent / 100));
              } else {
                if (productFromDb.discounts) {
                  for (let disc of productFromDb.discounts) {
                    minusPrice += (disc.percent / 100) * (productFromDb.price - minusPrice);
                  }
                }
                let count = product.count >= productFromDb.amount ? productFromDb.amount : product.count;
                let subPrice = productFromDb.discounts ? (productFromDb.price - minusPrice) : productFromDb.price;
                price += subPrice*count;
                strapi.services.product.edit({'_id': product.product.id}, {amount: (productFromDb.amount - product.count <= 0) ? 0 : productFromDb.amount - product.count});
              }
            }
            // eslint-disable-next-line no-inner-declarations
            function formatDate(date) {
              var day = date.getDate();
              var monthIndex = date.getMonth() + 1;
              var year = date.getFullYear();
              return day + '.' + monthIndex + '.' + year;
            }
            let newPostData = await novaPoshta.counterparty.saveCounterparty({
              FirstName: order.deliveryInfo.name,
              MiddleName: '',
              LastName: order.deliveryInfo.surname,
              Phone: order.deliveryInfo.phone,
              Email: '',
              CounterpartyType: 'PrivatePerson',
              CounterpartyProperty: 'Recipient'
            }).then((res) => {
              return novaPoshta.document.saveInternetDocument(
                {
                  NewAddress: '1',
                  PayerType: 'Sender',
                  PaymentMethod: 'Cash',
                  CargoType: 'Parcel',
                  VolumeGeneral: '0.01',
                  Weight: '2',
                  ServiceType: 'WarehouseWarehouse',
                  SeatsAmount: '1',
                  Description: 'Косметичні засоби. Доставка з післяоплатою',
                  Cost: price,
                  CitySender: 'e221d642-391c-11dd-90d9-001a92567626',
                  Sender: profumoCounterparty,
                  SenderAddress: '5a39e5a0-e1c2-11e3-8c4a-0050568002cf',
                  ContactSender: 'fb7ee3ed-cfc3-11e9-9937-005056881c6b',
                  SendersPhone: '380950831150',
                  CityRecipient: order.deliveryInfo.cityCode,
                  Recipient: res.data[0].Ref,
                  RecipientAddress: order.deliveryInfo.postOfficeCode,
                  ContactRecipient: res.data[0].Ref,
                  RecipientsPhone: order.deliveryInfo.phone,
                  DateTime: formatDate(new Date())
                }
              ).then(json => {
                order.newpost = json.data;
                let statusMap = {delivered:'Успешно доставлено',
                  error:'Произошла ошибка',
                  processing:'В обработке',
                  onPost:'Передан в службу доставки',
                  success:'Новый заказ',
                  revoke:'Отказ клиента'};
                order.status = statusMap[result.status];
                strapi.services.order.edit({'_id': order._id}, order);
                return json.data;
              }).catch(err => console.log(err));

            });

            ctx.status=301;
            let data ={data:newPostData, sign:'profumo.com.ua'};
            let str =encodeURIComponent(base64encode(JSON.stringify(data)));
            ctx.redirect(`/order?postdata=${str}`);

          }
        } break;
        default:{
          strapi.services.order.edit({'_id': result.order_id},{status:result.status});
          ctx.status=301;
          let value = {data:{error:result.err_description}, sign:'profumo.com.ua'};
          let str =encodeURIComponent(base64encode(JSON.stringify(value)));
          ctx.redirect(`/order?postdata=${str}`);
          break;
        }
      }

    } else {
      return ctx.response.unauthorized('Bad ass');
    }
  },

  /**
   * Update a/an callback record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.callback.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an callback record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.callback.remove(ctx.params);
  }
};
