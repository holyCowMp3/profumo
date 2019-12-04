'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */
const builder = require('xmlbuilder');
const md = require('markdown-it')();
const _ = require('lodash');
const hapigerjs = require('hapigerjs');

var client = new hapigerjs.Driver({
  url: 'http://127.0.0.1',
  port: '3456'
});
module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */
  recommendationPoint: async (ctx, callback) => {
    return await client.POST('/recommendations', {
      'namespace': 'products',
      'thing': ctx.params._id,
      'configuration': {
        'actions': {'view': 5, 'buy': 10}
      }
    }
    ).then(res => res.recommendations.map(i => i.thing))
      .catch(error => console.log(error));
  },
  recommendationsPersonal: async (ctx) => {
    return await client.POST('/recommendations', {
      'namespace': 'products',
      'person': ctx.state.user ? ctx.state.user._id : 'public_user',
      'configuration': {
        'actions': {'view': 5, 'buy': 10}
      }
    }
    ).then(res => res.recommendations.map(i => i.thing))
      .catch(error => console.log(error));
  },

  find: async (ctx, next, {populate} = {}) => {
    /**
     * Returns TRUE if the first specified array contains all elements
     * from the second one. FALSE otherwise.
     *
     * @param {array} superset
     * @param {array} subset
     *
     * @returns {boolean}
     */
    function arrayContainsArray(superset, subset) {
      if (0 === subset.length) {
        return false;
      }
      return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
      });
    }

    if (ctx.query._q) {
      return strapi.services.product.search(ctx.query);
    } else {
      if (ctx.query['properties._id']) {
        let filtered = await strapi.services.product.fetchAll(ctx.query, populate);
        let filteredProps = ctx.query['properties._id'];
        let filteredFullProps = await filteredProps.map(async s => strapi.services.property.fetch({_id: s}));
        console.log(filteredFullProps);
        Promise.all(filteredFullProps).then(s => {
          return s.map(k => {
            return {property_name: k.property_name, _id: k._id};
          });
        }).then(mapped => {return _.groupBy(mapped, 'property_name');}
        ).then(grouped => {
          for (let key in grouped) {
            for (let value of grouped[key]) {
              let alias = [value.property_name];
              let {[alias[0]]: mock, ...rest} = grouped;
              let ids =Object.keys(rest).map(kinRest => rest[kinRest]);
              let arrayOfIds = ids.flat(Infinity);
              arrayOfIds.push(value);
              let picked = _.map(arrayOfIds, '_id');
              let res = filtered.filter(res => {
                let mapped = res.properties.map(s => s._id.toString());
                console.log(mapped);
                console.log("THIS IS OBJECT PROPS");
                console.log("THIS IS PICKED");
                return arrayContainsArray(mapped, picked);
              });
              console.log(res)

            }
          }
        }
        );
        return await filtered.filter(res => {
          let mapped = res.properties.map(s => s._id.toString());
          return arrayContainsArray(mapped, filteredProps);
        });
      }
      return strapi.services.product.fetchAll(ctx.query, populate);
    }
  },
  build: async (ctx) => {
    class Category {
      constructor(cat, parent, name) {
        this.cat = cat;
        this.parent = parent;
        this.name_ru = name;
      }
    }

    let products = await strapi.services.product.fetchAll({'rozetka_exp': 'true', '_limit': -1});
    if (products.length <= 0) {
      return ctx.response.notFound('The file is empty, because rozetka export is empty.');
    }
    let categoryList = [];

    async function getCat(cat, set) {
      if (!cat.parent) {
        return set;
      } else {
        let res = await strapi.services.category.fetch({'_id': cat.parent});

        let parentId = res.parent ? res.parent._id.toString() : undefined;
        set.push(new Category(res._id.toString(), parentId, res.name_ru));
        return getCat(res, set);
      }
    }

    for (let i = 0; i < products.length; i++) {
      let cat = await strapi.services.category.fetch({'_id': products[i].category._id});
      let parentId = cat.parent._id.toString();
      categoryList.push(new Category(cat._id.toString(), parentId, cat.name_ru));
      await getCat(cat, categoryList);
      // if(categories[parentId] === undefined || childCategories[cat._id] === undefined ) {
      //   categories[parentId] = cat.parent.name_ru;
      //   childCategories[cat._id] = parentId + '||' + cat.name_ru;
      // }
    }
    categoryList = _.uniqBy(categoryList, cat => cat.cat + cat.parent);

    // products.forEach(prod => {Category.findOne(prod.category).then(i => console.log(i.parent))});
    let xml = builder.create('yml_catalog', {encoding: 'utf-8'})
      .att('date', new Date().toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')
        .substring(0, 16))
      .ele('shop')
      .ele('name', 'O-la-la').up()
      .ele('company', 'O-la-la inc.').up()
      .ele('url', 'olalala.com.ua').up()
      .ele('currencies')
      .ele('currency', {id: 'UAH', rate: 1}).up().up()
      .ele('categories');
    var middleElem = {};
    for (let key of categoryList) {
      if (key.parent) {
        middleElem = xml.ele('category', {id: key.cat, parentId: key.parent}, key.name_ru).up();
      } else {
        middleElem = xml.ele('category', {id: key.cat}, key.name_ru).up();
      }
    }
    middleElem = middleElem.up();
    var smth = middleElem.ele('offers');
    for (let i in products) {
      var elem = smth.ele('offer', {id: products[i]._id, avaliable: products[i].avaliable})
        .ele('url', 'http://olalala.com.ua/products/' + products[i]._id)
        .up()
        .ele('price', products[i].price)
        .up()
        .ele('currencyId', 'UAH')
        .up()
        .ele('categoryId', products[i].category._id)
        .up();
      for (let picture in products[i].photos) {
        elem
          .ele('picture', 'http://olalala.com.ua' + products[i].photos[picture].url)
          .up();
      }
      elem
        .ele('vendor', products[i].vendor)
        .up()
        .ele('stock_quantity', products[i].amount)
        .up()
        .ele('name', products[i].name_rozetka)
        .up()

        .ele('description')
        .cdata(md.render(products[i].desc).replace('####', '')).up().up();
      let propertiesMap = _.groupBy(products[i].properties, property => property.property_name);
      for (let props of Object.keys(propertiesMap)) {
        elem.ele('param', {name: props}, _.map(propertiesMap[props], 'property_val').join(', ')).up();
      }
    }
    ctx.response.status = 200;
    ctx.response.type = 'xml';

    ctx.send(xml.end({pretty: true}));
  },
  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }

    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }
    var now = new Date(new Date().getFullYear() + 1, new Date().getMonth());
    var isoString = now.toISOString();
    client.POST('/events', {
      events: [{
        'namespace': 'products',
        'person': ctx.state.user ? ctx.state.user._id : 'public_user',
        'action': 'view',
        'thing': ctx.params._id,
        'expires_at': isoString
      }]
    }).then(res => console.log(res));

    var result = await strapi.services.product.fetch(ctx.params);
    var length = result.comments.length;
    var newRes = result.toObject();
    newRes['comments_len'] = length;
    var desc = result.desc;
    let formattedDesc = desc.split('####');
    var filtered = formattedDesc.filter(i => i.length > 0);
    var mapped = filtered.map(i => {
      var obj = {};
      var splitArr = i.split('\r\n');
      if (splitArr.length <= 1) {
        splitArr = i.split('\n');
      }
      obj.header = splitArr[0];
      obj.body = splitArr.slice(1, splitArr.length).join('\n');
      return obj;
    });
    newRes.descJSON = mapped;
    try {
      newRes.recommendations = await strapi.controllers.product.recommendationPoint(ctx);
    } catch (e) {
      console.log(e);
      newRes.recommendations = [];
    }
    let category = await strapi.services.category.fetch({'_id': result.category});
    let minusPrice = 0;
    if (category.discount && category.discount.expirate_date.getTime() > new Date().getTime()) {
      minusPrice = (result.price * (category.discount.percent / 100));
    } else {
      if (result.discount && result.discount.expirate_date.getTime() > new Date().getTime()) {
        minusPrice += (result.discount.percent / 100) * (result.price - minusPrice);
      }
      newRes.discount_price = result.discount ? (result.price - minusPrice) : 0;
    }
    return Promise.resolve(newRes);
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
    return strapi.services.product.edit(ctx.params, ctx.request.body);
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
