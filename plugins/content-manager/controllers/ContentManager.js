'use strict';

const _ = require('lodash');

/**
 * A set of functions called "actions" for `ContentManager`
 */

module.exports = {
  models: async ctx => {

    const pluginsStore = strapi.store({
      environment: '',
      type: 'plugin',
      name: 'content-manager',
    });

    const models = await pluginsStore.get({ key: 'schema' });

    for (let ob in models.models){
      if(ob=='plugins') continue;
      try {
        models.models[ob].label = models.models[ob].info.description.split('|')[0];
        models.models[ob].labelPlural = models.models[ob].info.description.split('|')[1];
        for (let idre in models.models[ob].relations){
          var model = models.models[Object.keys(models.models).filter(s => s.substring(0, 5)== idre.substring(0,5))[0]];
          if (model) {
            models.models[ob].relations[idre].label = model.label;
            models.models[ob].relations[idre].labelPlural = model.labelPlural;
          }
        }
      } catch (e) {
        console.log(e);
        break;
      }

    }
    ctx.body = {
      models,
    };
  },

  find: async ctx => {
    // Search
    if (!_.isEmpty(ctx.request.query._q)) {
      ctx.body = await strapi.plugins['content-manager'].services['contentmanager'].search(ctx.params, ctx.request.query);
      return;
    }


    // Default list with filters or not.
    ctx.body = await strapi.plugins['content-manager'].services['contentmanager'].fetchAll(ctx.params, ctx.request.query);
  },

  stats: async ctx => {
    // Search



  },

  count: async ctx => {
    // Search
    const count = !_.isEmpty(ctx.request.query._q)
      ? await strapi.plugins['content-manager'].services['contentmanager'].countSearch(ctx.params, ctx.request.query)
      : await strapi.plugins['content-manager'].services['contentmanager'].count(ctx.params, ctx.request.query);

    ctx.body = {
      count: _.isNumber(count) ? count : _.toNumber(count)
    };
  },

  findOne: async ctx => {
    const { source } = ctx.request.query;

    // Find an entry using `queries` system
    const entry = await strapi.plugins['content-manager'].services['contentmanager'].fetch(ctx.params, source, null, false);

    // Entry not found
    if (!entry) {
      return (ctx.notFound('Entry not found'));
    }

    ctx.body = entry;
  },

  create: async ctx => {

    const { source } = ctx.request.query;

    function processText(string) {
      return string.replace('\n','').replace('\n','');
    }
    function  getCategories(url, callback){
      const jsdom = require('jsdom');
      const { JSDOM } = jsdom;
      var request = require('request');
      var subCategories;
      subCategories = [];
      request.get(url,{timeout: 20000}, function (error, response, body) {
        if (!error) {
          const { document } = (new JSDOM(body)).window;
          for (let elem of document.getElementById('menu_categories_left').getElementsByTagName('li')){
            switch (elem.getAttribute('class')) {
              case 'm-cat-l-i m-cat-l-i-roll' :{
                try {
                  // var subCatWithSubCats = elem.getElementsByClassName("m-cat-l-i-title m-cat-l-i-title-roll m-cat-l-i-with-link")[0];
                  // if(subCatWithSubCats){
                  //   var linkToSubCat = subCatWithSubCats.getElementsByClassName("m-cat-subl-i-more")[0].getElementsByTagName("a")[0];
                  //
                  //
                  // }
                  subCategories.push({
                    name_ru:  processText(elem.getElementsByClassName('m-cat-l-i-title-value')[0].innerHTML),
                    rozetkacat: elem.getElementsByClassName('m-cat-subl-i-link')[0].getAttribute('href')
                  });
                } catch (e) {
                  subCategories.push({
                    name_ru: processText(elem.getElementsByClassName('m-cat-l-i-title-link')[0].innerHTML),
                    rozetkacat:elem.getElementsByClassName('m-cat-l-i-title-link')[0].getAttribute('href')});
                }
              } break;
              case  'm-cat-l-i':{
                subCategories.push({
                  name_ru:processText(elem.getElementsByClassName('m-cat-l-i-title-link')[0].innerHTML),
                  rozetkacat:elem.getElementsByClassName('m-cat-l-i-title-link')[0].getAttribute('href')});
              } break;
            }
          }
          callback(subCategories);
        } else {
          console.trace('Произошла ошибка: ' + error);
        }
      }).end();

    }
    function trasformCategories(subCategories, callback){
      const jsdom = require('jsdom');
      const { JSDOM } = jsdom;
      var request = require('request');
      for(let category of subCategories){
        request(category.rozetkacat, function (error, response, body) {
          if (!error) {
            let properties = [];
            let {document} = (new JSDOM(body)).window;
            let formElem = document.getElementById('parameters-filter-form');
            if(!formElem){
              return;
            }
            let parameterBlocks = formElem.getElementsByClassName('filter-parametrs-i ');
            for (let block of parameterBlocks){
              let props = {property_value:[]};
              let name = block.querySelectorAll('[name=\'filter_parameters_title\']')[0].innerHTML;
              if(name.includes('Производитель')
                || name.includes('Программа лояльности')
                || name.includes('Продавец') )
              {continue;}
              props.property_name = name;
              for(let propertyIn of block.querySelectorAll('[name=\'filter_parameters_list\']')){
                for (let param of propertyIn.getElementsByClassName('filter-parametrs-i-l-i-default-title')){
                  props.property_value.push(param.innerHTML);
                }
                properties.push(props);
              }
            }
            category.params = properties;
            callback(category);
          } else {
            console.trace(error);
          }

        });

      }
    }
    function saveCategory(url, obj, callback){
      const jsdom = require('jsdom');
      const { JSDOM } = jsdom;
      var request = require('request');
      request(url, function (error, response, body) {
          if (!error) {
            let properties = [];
            let {document} = (new JSDOM(body)).window;
            let formElem = document.getElementById('parameters-filter-form');
            if(!formElem){
              return;
            }
            let parameterBlocks = formElem.getElementsByClassName('filter-parametrs-i ');
            for (let block of parameterBlocks){
              let props = {property_value:[]};
              let name = block.querySelectorAll('[name=\'filter_parameters_title\']')[0].innerHTML;
              if(name.includes('Производитель')
                || name.includes('Программа лояльности')
                || name.includes('Продавец') )
              {continue;}
              props.property_name = name;
              for(let propertyIn of block.querySelectorAll('[name=\'filter_parameters_list\']')){
                for (let param of propertyIn.getElementsByClassName('filter-parametrs-i-l-i-default-title')){
                  props.property_value.push(param.innerHTML);
                }
                properties.push(props);
              }
            }
            obj.params = properties;
            callback(obj);
          } else {
            console.trace(error);
          }

        });
    }
    async function persistProperties(transformed,parentId, callback) {
    //  transformed.parent = parentId;
      let categoryPropsID = [];
      for (let property of transformed.params){
        for(let propValue of property.property_value){
          let find = await strapi.services.property.fetch({short_name:property.property_name.toLocaleUpperCase() +' '+ propValue.toLocaleUpperCase()});
          if (find){
            console.log(find);
            categoryPropsID.push((find._id)?find._id:find.id);
          } else {
            let add = await strapi.services.property.add({
              short_name:property.property_name.toLocaleUpperCase() +' '+ propValue.toLocaleUpperCase(),
              property_name:property.property_name,
              property_val:propValue
            });
            categoryPropsID.push(add._id);
          }
        }
      }
      Promise.all(categoryPropsID).then( res=>{
        transformed.properties = res;
        callback(transformed);});
    }

    try {
      // Create an entry using `queries` system


      let result = await strapi.plugins['content-manager'].services['contentmanager'].add(ctx.params, ctx.request.body, source);
      ctx.body =  result;
      if('rozetkacat' in ctx.request.body.fields){
      let body = ctx.body;
      let parentId = ctx.body.id;

        try {
          // getCategories(ctx.request.body.fields.rozetkacat, (res)=>{
          //   trasformCategories(res,  (transformed) =>{
          //     persistProperties(transformed,parentId,(persisted) => {
          //       console.log(persisted);
          //       strapi.services.category.add(persisted);
          //     });
          //   });
          // });
          saveCategory(ctx.request.body.fields.rozetkacat, body, (res)=>{
            persistProperties(res,'', result =>{
              strapi.services.category.edit({_id:parentId}, result);
            })
          })

        } catch (e) {
          strapi.log.error(e);
        }

      } else {

      }

      strapi.emit('didCreateFirstContentTypeEntry', ctx.params, source);

    } catch(error) {
      console.trace(error);
      ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: error.message, field: error.field }] }] : error.message);
    }
  },

  update: async ctx => {
    const { source } = ctx.request.query;
    try {
      // Return the last one which is the current model.

      ctx.body = await strapi.plugins['content-manager'].services['contentmanager'].edit(ctx.params, ctx.request.body, source);
      if (ctx.request.body.fields.child){
        let body = ctx.request.body.fields;
        await JSON.parse(body.child).forEach(cat =>  {
          strapi.services.category.edit({'_id':cat._id}, {parent:cat.parent});
        });
      }

    } catch(error) {
      // TODO handle error update
      strapi.log.error(error);
      ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: error.message, field: error.field }] }] : error.message);
    }
  },

  updateSettings: async ctx => {
    const { schema } = ctx.request.body;
    console.log(ctx.request.body);
    const pluginStore = strapi.store({
      environment: '',
      type: 'plugin',
      name: 'content-manager'
    });
    await pluginStore.set({ key: 'schema', value: schema });

    return ctx.body = { ok: true };
  },

  delete: async ctx => {
    ctx.body = await strapi.plugins['content-manager'].services['contentmanager'].delete(ctx.params, ctx.request.query);
  },

  deleteAll: async ctx => {
    ctx.body = await strapi.plugins['content-manager'].services['contentmanager'].deleteMany(ctx.params, ctx.request.query);
  }
};
