'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */
const LiqPay = require('liqpay-sdk');

const request = require('request');

module.exports = {

  /**
   * Retrieve order records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
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

    let liqPayConf = import('./liqpayConf.json');
    const liqPay = LiqPay(liqPayConf.public,liqPayConf.private);
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }

    let order =  await strapi.services.order.add(ctx.request.body);
    let price = 0;
    let productCategories ='';
    let productNames='';
    switch (order.type) {
      case 'nova_poshta':{
        for(let prod of ctx.request.body.products) {
          let productFromDb = await strapi.services.product.fetch({'_id': prod.id});
          if(ctx.state.user) {
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
            price += productFromDb.discounts ? productFromDb.price - minusPrice : productFromDb.price;
            productCategories += productFromDb.category.name + '\n';
            productNames += productFromDb.name + '\n';
          }
        }

        break;
      }
      case 'liqpay':{
        for(let prod of ctx.request.body.products) {
          let productFromDb = await strapi.services.product.fetch({'_id': prod.id});
          if(ctx.state.user) {
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
            price += productFromDb.discounts ? productFromDb.price - minusPrice : productFromDb.price;
            productCategories += productFromDb.category.name + '\n';
            productNames += productFromDb.name + '\n';
          }
        }

        let html = liqPay.cnb_form({
          'action'         : 'pay',
          'amount'         :  price,
          'currency'       : 'UAH',
          'description'    : 'description text',
          'order_id'       :  order._id,
          'version'        : '3',
          'sandbox':'1',
          'result_url':'',
          'customer': ctx.state.user._id,
          'product_category':productCategories,
          'product_name':productNames
        });

        return html;
      }
    }

  },

  /**
   * Update a/an order record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.order.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an order record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.order.remove(ctx.params);
  }
};
