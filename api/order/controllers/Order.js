'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */
const LiqPay = require('liqpay-sdk');
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

    let promise = strapi.services.order.add(ctx.request.body);
    function getId(id) {
     let dbResult = strapi.services.product.fetch({"params":{"id":id}});
     return dbResult;
    }
    let price = 0;
    let productCategories ='';
    let productNames='';
    for(var prod in ctx.request.body.products){
      var id = ctx.request.body.products[prod].id;
      var productFromDb =  await getId(id).then(i => { console.log(i.category); return i}).catch((err) => {});
      productFromDb.discounts;
      price+=productFromDb.price;
      productCategories+=productFromDb.category.name +"\n";
      productNames+=productFromDb.name+"\n";
    }
    var html =
    promise.then(response => {
      html = liqpay.cnb_form({
        'action'         : 'pay',
        'amount'         :  price ,
        'currency'       : 'UAH',
        'description'    : 'description text',
        'order_id'       :  response.id,
        'version'        : '3',
        'sandbox':'1',
        'result_url':'',
        'customer': ctx.request.body.user.id,
        'product_category':productCategories,
        'product_name':productNames
      });

      return html;
    }).catch(errback => {

    });

    return html;
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
