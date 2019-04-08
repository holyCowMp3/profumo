'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */
const builder = require('xmlbuilder');
module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.product.search(ctx.query);
    } else {
      return strapi.services.product.fetchAll(ctx.query);
    }
  },
  build: async (ctx) =>{
    let products =  await Product.find({'rozetka_exp':'true'}).then();
    let categories ='';
    console.log(products);
    products.forEach(prod => {Category.findOne(prod.category).then(i => console.log(i.parent))});
    let xml = builder.create('yml_catalog', { encoding: 'utf-8'})
      .att('date', new Date().toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')
        .substring(0,16))
      .ele('shop')
      .ele('name','Profumo').up()
      .ele('company','Profumo').up()
      .ele('url','profumo.com.ua').up()
        .ele('currencies')
        .ele('currency', {id:'UAH',rate:1}).up().up()
      .ele('categories').up()
      .ele('offers').up().end();
    ctx.status =200;
    ctx.type = 'application/xml; charset=utf-8';

    ctx.send(xml);
  },
  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }
    return strapi.services.product.fetch(ctx.params);
  },

  /**
   * Count product records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.product.count(ctx.query);
  },

  /**
   * Create a/an product record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.product.add(ctx.request.body);
  },

  /**
   * Update a/an product record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.product.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an product record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.product.remove(ctx.params);
  },


};
