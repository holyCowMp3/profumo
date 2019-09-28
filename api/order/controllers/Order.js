'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */


const request = require('request');
const NovaPoshta = require('novaposhta_3');
var hapigerjs = require('hapigerjs');
const {base64decode, base64encode} = require('nodejs-base64');
var client = new hapigerjs.Driver({
  url: 'http://127.0.0.1',
  port: '3456'
});

module.exports = {

  /**
   * Retrieve order records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, {populate} = {}) => {
    if (ctx.query._q) {
      return strapi.services.order.search(ctx.query);
    } else {
      return strapi.services.order.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a order record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.order.fetch(ctx.params);
  },

  /**
   * Count order records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.order.count(ctx.query);
  },


  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async (ctx) => {

    const LiqPay = require('liqpay-sdk');
    let liqPayConf = require('../../liqpayConf.json');
    let novaPoshta = new NovaPoshta({apiKey: liqPayConf.nova_poshta});
    const liqPay = LiqPay(liqPayConf.public, liqPayConf.private);

    function formatDate(date) {
      var day = date.getDate();
      var monthIndex = date.getMonth() + 1;
      var year = date.getFullYear();
      return day + '.' + monthIndex + '.' + year;
    }

    function formatDateHapiger(date) {
      var day = date.getDate();
      var monthIndex = date.getMonth() + 1;
      var year = date.getFullYear() + 1;
      return year + '-' + monthIndex + '-' + day;
    }

    ctx.request.body.status = 'processing';
    let order = await strapi.services.order.add(ctx.request.body);
    let price = 0;

    var now = new Date(new Date().getFullYear() + 1, new Date().getMonth());
    var isoString = now.toISOString();
    let deleteFromOrderArray = [];
    let orderStr = '';
    let index = 1;
    for (let product of order.orders) {
      let productFromDb = await strapi.services.product.fetch({'_id': product.product.id});
      if (product.count > productFromDb.amount) {
        return {error: 'Вы попытались купить больше товаров, чем есть у нас на сайте, попробуйте создать заказ еще раз'};
      }
      client.POST('/events', {
          events: [{
            'namespace': 'products',
            'person': ctx.state.user ? ctx.state.user._id : 'public_user',
            'action': 'buy',
            'thing': productFromDb._id,
            'expires_at': isoString
          }]
        }
      );
      if (productFromDb.avaliable && productFromDb.amount > 0) {
        let category = await strapi.services.category.fetch({'_id': productFromDb.category});
        let minusPrice = 0;
        if (category.discount && category.discount.expirate_date.getTime() > new Date().getTime()) {
          minusPrice = (productFromDb.price * (category.discount.percent / 100));
        } else {
          if (productFromDb.discount && productFromDb.discount.expirate_date.getTime() > new Date().getTime()) {
            minusPrice += (productFromDb.discount.percent / 100) * (productFromDb.price - minusPrice);
          }
          let count = product.count >= productFromDb.amount ? productFromDb.amount : product.count;
          let subPrice = productFromDb.discount ? (productFromDb.price - minusPrice) : productFromDb.price;
          price += subPrice * count;
        }
      } else {
        deleteFromOrderArray.push(order.orders.indexOf(product));
      }
      orderStr += `<tr>
    <td style="border: 1px solid gray;">${index++}</td>
    <td style="border: 1px solid gray;">
        <img src="https://profumo.com.ua" + ${productFromDb.photos ? productFromDb.photos[0].url : ''} style="maxHeight: 50px; max-width: 50px; object-fit: contain;"/>
    </td>
    <td style="border: 1px solid gray;">
    <a href="https://profumo.com.ua/product/" + ${product.product.id}>${productFromDb.name_ru}</a>
    </td>
    <td style="border: 1px solid gray;">${productFromDb.discount_price === 0 ? productFromDb.price : productFromDb.discount_price} грн.</td>
    <td style="border: 1px solid gray;">${product.count}</td>
    <td style="border: 1px solid gray;">${(productFromDb.discount_price === 0 ? productFromDb.price : productFromDb.discount_price) * product.count} грн.</td>
</tr>`;
    }
    for (let i = 0; i < deleteFromOrderArray.length; i++) {
      delete order.orders[deleteFromOrderArray[i]];
    }
    await strapi.services.order.edit({_id: order._id, order});
    if (ctx.state.user) {
      console.log(ctx.state.user);
      console.log("SENDING EMAIL!");
      let fs = require('fs');
      let raw = fs.readFileSync('./order.html');
      let emailText = raw.toString();
      console.log(emailText);
      emailText = await emailText.replace(/1234566/g, orderStr);
      emailText = await emailText.replace(/user/g, ctx.state.user ? ctx.state.user.name : 'Пользователь');
      let phones = await strapi.services.contacts.fetchAll();
      if (phones) {
        let phone1 = phones[0].phones.split(',')[0];
        let phone2 = phones[0].phones.split(',')[1];
        emailText.replace('<%= PHONE1 %>', phone1);
        emailText.replace('<%= PHONE2 %>', phone2);
      }
      await strapi.plugins['email'].services.email.send({
        to: ctx.state.user.email,
        from: 'robot@profumo.com.ua',
        replyTo: 'no-reply@profumo.com.ua',
        subject: 'Оформление заказа',
        text: 'Заказ №' + order._id,
        html: emailText
      });
    }
    let profumoCounterparty = '4187cb04-cd83-11e9-9937-005056881c6b';
    switch (order.type) {
      case 'nova_poshta': {
        return await novaPoshta.counterparty.saveCounterparty({
          FirstName: order.deliveryInfo.name,
          MiddleName: '',
          LastName: order.deliveryInfo.surname,
          Phone: order.deliveryInfo.phone,
          Email: '',
          CounterpartyType: 'PrivatePerson',
          CounterpartyProperty: 'Recipient'
        }).then((res) => {
          console.log(res);
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
            strapi.services.order.edit({'_id': order._id}, order);
            for (let product of order.orders) {
              strapi.services.product.fetch({'_id': product.product.id}).then(res => {
                let am = ((res.amount - product.count) <= 0) ? 0 : res.amount - product.count;
                strapi.services.product.edit({'_id': product.product.id}, {amount: am});
                if (am === 0) {
                  strapi.services.product.edit({'_id': product.product.id}, {avaliable: false});
                }
              }).catch(err => console.log(err));
            }
            return json.data;
          }).catch(err => {
            ctx.status = 200;
            return {data: {error: err}, sign: 'profumo.com.ua'};
          });

        });
      }
      case 'liqpay': {
        if (price === 0) {
          return {error: 'Произошла ошибка, попробуйте оформить заказ снова'};
        }

        let dataAndSignature = await liqPay.cnb_object({
          'action': 'pay',
          'amount': price,
          'description': 'Покупка товаров в кол-ве: ' + order.orders.length,
          'currency': 'UAH',
          'order_id': order._id,
          'version': '3',
          'customer': ctx.state.user ? ctx.state.user._id : 'public_user'
        });
        return await dataAndSignature;
      }
    }

    // let profumoCounterparty = '4187cb04-cd83-11e9-9937-005056881c6b';
    // novaPoshta.counterparty.saveCounterparty({
    //   FirstName: order.deliveryInfo.name,
    //   MiddleName: order.deliveryInfo.surname,
    //   LastName: order.deliveryInfo.thirdname,
    //   Phone: order.deliveryInfo.phone,
    //   Email: '',
    //   CounterpartyType: 'PrivatePerson',
    //   CounterpartyProperty: 'Recipient'
    // }).then(counterparty => {
    //   if (counterparty.success) {
    //     let counterpartyId = counterparty.data.Ref;
    //     novaPoshta.document.saveInternetDocument(
    //       {
    //         NewAddress: '1',
    //         PayerType: 'Sender',
    //         PaymentMethod: 'Cash',
    //         CargoType: 'Cargo',
    //         VolumeGeneral: '0.1',
    //         Weight: '10',
    //         ServiceType: 'WarehouseWarehouse',
    //         SeatsAmount: '1',
    //         Description: 'Косметичні засоби',
    //         Cost: price.toString(),
    //         CitySender: '8d5a980d-391c-11dd-90d9-001a92567626',
    //         Sender: profumoCounterparty,
    //         SenderAddress: 'd492290b-55f2-11e5-ad08-005056801333',
    //         ContactSender: profumoCounterparty,
    //         SendersPhone: '380950831150',
    //         RecipientCityName: order.deliveryInfo.cityName,
    //         RecipientArea: '',
    //         RecipientAreaRegions: '',
    //         RecipientAddressName: order.deliveryInfo.postOfficeName,
    //         RecipientHouse: '',
    //         RecipientFlat: '',
    //         RecipientName: order.deliveryInfo.name +' '+ order.deliveryInfo.surname,
    //         RecipientType: 'PrivatePerson',
    //         RecipientsPhone: order.deliveryInfo.phone,
    //         DateTime: new Date().toLocaleDateString('en-GB', {
    //           day : 'numeric',
    //           month : 'numeric',
    //           year : 'numeric'
    //         }).split('/').join('.')
    //       }
    //     );
    //   }
    // });
  },


  /**
   * Update a/an order record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.order.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an order record.
   *
   * @return {Object}
   */

  destroy:
    async (ctx, next) => {
      return strapi.services.order.remove(ctx.params);
    }
}
;
