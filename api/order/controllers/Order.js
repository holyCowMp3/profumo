'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */
const LiqPay = require('liqpay-sdk');

const request = require('request');
const NovaPoshta = require('novaposhta_3');

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

    let liqPayConf = require('../liqpayConf.json');
    let novaPoshta = new NovaPoshta({apiKey: liqPayConf.nova_poshta});
    const liqPay = LiqPay(liqPayConf.public, liqPayConf.private);

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }

    let order = await strapi.services.order.add(ctx.request.body);
    let price = 0;
    let productCategories = '';
    let productNames = '';
    for (let product of order.orders) {
      let productFromDb = await strapi.services.product.fetch({'_id': product.product.id});
      if (ctx.state.user) {
        let dataString = {
          'events': [
            {
              'namespace': 'products',
              'person': ctx.state.user._id,
              'action': 'buy',
              'thing': productFromDb._id,
            }
          ]
        };
        let options = {
          url: 'http://localhost:3456/events',
          method: 'POST',
          body: JSON.stringify(dataString)
        };
        request(options, callback);
      }
      let category = await strapi.services.category.fetch({'_id': productFromDb.category});
      let minusPrice = 0;
      if (category.discount) {
        minusPrice = (productFromDb.price * (category.discount.percent / 100));
      } else {
        for (let disc of productFromDb.discounts) {
          minusPrice += (disc.percent / 100) * (productFromDb.price - minusPrice);
        }
        price += ((productFromDb.discounts ? productFromDb.price - minusPrice : productFromDb.price) * product.count);
        productCategories += productFromDb.category.name + '\n';
        productNames += productFromDb.name + '\n';
      }
    }

    switch (order.type) {
      case 'nova_poshta': {
        break;
      }

      case 'liqpay': {
        break;
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

    let html = liqPay.cnb_form({
      'action': 'pay',
      'amount': price,
      'currency': 'UAH',
      'description': 'description text',
      'order_id': order._id,
      'version': '3',
      'sandbox': '1',
      'result_url': '',
      'customer': ctx.state.user._id,
      'product_category': productCategories,
      'product_name': productNames
    });

    console.log(html);

    return html;
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
