'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */
const builder = require('xmlbuilder');
const md = require('markdown-it')();
const  request = require('request');
module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */
  recommendations: async (ctx, callback) => {
    var dataString = {
      'namespace': 'products',
      'thing': ctx.params._id,
      'configuration': {
        'actions' : {'view': 5, 'buy': 10}
      }
    };
    var options = {
      url: 'http://localhost:3456/recommendations',
      method: 'POST',
      body: dataString
    };

    function call(error, response, body) {
      if (!error && response.statusCode == 200) {
        let array = [];
        let recommendResult = JSON.parse(body);
        for (let row of recommendResult.recommendations){
          array.push(row.thing);
        }
        callback(array);
      }
    }
    request(options, call);
    return ctx.ok();
  },
  recommendationsPersonal: async (ctx) => {
    var dataString = {
      'namespace': 'products',
      'person': ctx.state.user? ctx.state.user._id:'',
      'configuration': {
        'actions' : {'view': 5, 'buy': 10}
      }
    };
    var options = {
      url: 'http://localhost:3456/recommendations',
      method: 'POST',
      body: dataString
    };
    let array = [];
    request(options, (error, response, body) =>{
      if (!error && response.statusCode == 200) {
        let recommendResult = JSON.parse(body);
        for (let row of recommendResult.recommendations){
          array.push(row.thing);
        }
      }
    });
    return array;
  },

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.product.search(ctx.query);
    } else {
      return strapi.services.product.fetchAll(ctx.query, populate);
    }
  },
  build: async (ctx) =>{
    let products =  await strapi.services.product.fetchAll({'rozetka_exp':'true'});
    if (products.length<=0){
      return ctx.response.notFound('The file is empty, because rozetka export is empty.');
    }
    let categories = {};
    let childCategories = {};
    for (let i = 0; i < products.length; i++) {
      let cat = await strapi.services.category.fetch({'_id':products[i].category._id});
      console.log(cat);
      let parentId =cat.parent._id.toString();
      if(categories[parentId] === undefined || childCategories[cat._id] === undefined ) {
        categories[parentId] = cat.parent.name_ru;
        childCategories[cat._id] = parentId + '||' + cat.name_ru;
      }
    }

    // products.forEach(prod => {Category.findOne(prod.category).then(i => console.log(i.parent))});
    let xml = builder.create('yml_catalog', { encoding: 'utf-8'})
      .att('date', new Date().toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')
        .substring(0,16))
      .ele('shop')
      .ele('name','O-la-la').up()
      .ele('company','O-la-la inc.').up()
      .ele('url','profumo.com.ua').up()
      .ele('currencies')
      .ele('currency', {id:'UAH',rate:1}).up().up()
      .ele('categories');
    for (let key in categories) {
      var elememt =
        xml.ele('category',{id:key}, categories[key]).up();
    }
    for (let key in childCategories) {
      var middleElem = elememt.ele('category',{id:key, parentId:childCategories[key].split('||')[0]}, childCategories[key].split('||')[1] ).up();
    }
    middleElem = middleElem.up();
    var smth =  middleElem.ele('offers');
    for (let i in products) {
      var elem = smth.ele('offer', {id: products[i]._id, avaliable: products[i].avaliable})
        .ele('url', 'http://olalala.com.ua/products/'+ products[i]._id)
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
        .ele('desc')
        .cdata(md.render(products[i].desc)).up().up();
      for (let k in products[i].properties) {
        elem.ele('param', {name: products[i].properties[k].property_name}, products[i].properties[k].property_val).up();
      }
    }
    ctx.response.status =200;
    ctx.response.type = 'xml';

    ctx.send(xml.end());
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
    if(ctx.state.user) {

      let dataString = {
        'events': [
          {
            'namespace': 'products',
            'person': ctx.state.user._id,
            'action': 'view',
            'thing': ctx.params._id
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


    var result  = await strapi.services.product.fetch(ctx.params);

    var length = result.comments.length;

    var newRes = result.toObject();
    newRes['comments_len'] = length;
    var desc = result.desc;
    let formattedDesc = desc.split('####');
    var filtered = formattedDesc.filter( i => i.length>0);
    var mapped = filtered.map(i => {
      var obj = {};
      var splitArr = i.split('\r\n');
      obj.header = splitArr[0];
      obj.body = splitArr.slice(1,splitArr.length).join('\n');
      return obj;
    });
    newRes.descJSON = mapped;
    await recommendations(ctx, (res)=>{
      newRes.recommendations = res;
    });
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
