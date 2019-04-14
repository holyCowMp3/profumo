'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */
const builder = require('xmlbuilder');
const md = require('markdown-it')();

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
    let products =  await strapi.services.product.fetchAll({'rozetka_exp':'true'});
    console.log(products);
    let categories = {};
    let childCategories = {};
    for (let i = 0; i < products.length; i++) {
      let cat = await strapi.services.category.fetch({'_id':products[i].category._id});
      console.log(cat);
      let parentId =cat.parent._id.toString();
      if(categories[parentId] === undefined || childCategories[cat._id] === undefined ) {
        categories[parentId] = cat.parent.name_ru;
        childCategories[cat._id] = parentId + "||" + cat.name_ru;
      }
    }


    console.log(categories);
    console.log("************************************");
    console.log(childCategories);

   // products.forEach(prod => {Category.findOne(prod.category).then(i => console.log(i.parent))});
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
      .ele('categories');
    for (let key in categories) {
      xml.ele('category',{id:key}, categories[key])
    }
    for (let key in childCategories) {
      xml.ele('category',{id:key, parentId:childCategories[key].split("||")[0]}, childCategories[key].split("||")[1]);
    }
      xml
      .up()
      .ele('offers');
    for (let i in products) {
      xml.ele('offer', {id: products[i]._id, avaliable: products[i].avaliable})
        .ele('url', 'https://profumo.com.ua/products/$' + products[i]._id)
        .up()
        .ele('price', products[i].price)
        .up()
        .ele('currencyId', 'UAH')
        .up()
        .ele('categoryId', products[i].category._id)
        .up()
      for (let picture in products[i].photos) {
        xml.ele('picture', 'https://profumo.com.ua' + products[i].photos[picture].url).up();
      }
      xml
        .ele('vendor', products[i].vendor)
        .up()
        .ele('stock_quantity', products[i].amount)
        .up()
        .ele('name', products[i].name_rozetka)
        .up()
        .ele('desc')
        .cdata(md.render(products[i].desc)).up().up()
      for (let key in products[i].props) {

        xml.ele('param', {name: key}, products[i].props[key]).up()
      }
    }
    ctx.status =200;
    ctx.type = 'application/xml; charset=utf-8';

    ctx.send(xml.end());
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
