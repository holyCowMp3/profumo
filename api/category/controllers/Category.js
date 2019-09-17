'use strict';

/**
 * Category.js controller
 *
 * @description: A set of functions called "actions" for managing `Category`.
 */

module.exports = {

  /**
   * Retrieve category records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.category.search(ctx.query);
    } else {
      return strapi.services.category.fetchAll(ctx.query, populate);
    }
  },

  getTree: async (ctx, next, { populate } = {}) => {
    let array =[];
    let tree = [];
   async function processCategory(cat) {
      let node = {};
      node.key = cat._id;
      node.label = cat.name_ru;
      node.icon = 'pi pi-fw pi-folder';
      node.data = cat.desc;
      try {
        if (cat.child.length != 0) {
          node.children = [];
          for (let child  of cat.child) {
            let res = await strapi.services.category.fetch({'_id': child._id});
            let resproc = await processCategory(res);
            node.children.push(resproc);
          }
          ;
          return node;
        } else {
          node.children = [];
          for (let child of cat.products) {
            let res = await strapi.services.product.fetch({'_id': child._id});
            let resproc = await processCategory(res);
            resproc.type = 'product';
            resproc.icon = 'pi pi-fw pi-pencil';
            node.children.push(resproc);
          }
          return node;
        }
      } catch (e) {

      }

      return node;
    }
    ctx.query._limit = 500;
    if (ctx.query._q) {
      array = await strapi.services.category.search(ctx.query);
      array.filter(cat => !cat.parent).map(cat => {
        tree.push(processCategory(cat));
      });
      return tree;
    } else {
      array = await strapi.services.category.fetchAll(ctx.query, populate);
      var parentsCat = array.filter(cat => !cat.parent);
      for (let cat of parentsCat){
        let result = await processCategory(cat);
        tree.push(result);
      }
      return await tree;
    }
  },

  getTreeWithoutProducts: async (ctx, next, { populate } = {}) => {
    const fs = require('fs');




    try{
      let tree = require('./cat.json');
      if(tree){
        return tree;
      }
    } catch (e) {
      fs.writeFileSync('./cat.json', JSON.stringify(await this.getTreeWithoutProducts(ctx, next, { populate } = {})));
    }
    let array =[];
    let tree = [];
    async function processCategory(cat) {
      let node = {};
      node.key = cat._id;
      node.label = cat.name_ru;
      node.icon = 'pi pi-fw pi-folder';
      node.data = cat.desc;
      try {
        if (cat.child.length != 0) {
          node.children = [];
          for (let child  of cat.child) {
            let res = await strapi.services.category.fetch({'_id': child._id});
            let resproc = await processCategory(res);
            node.children.push(resproc);
          };
          return node;
        } else {
          return node;
        }
      } catch (e) {
      }
      return node;
    }
    ctx.query._limit = 500;
    if (ctx.query._q) {
      array = await strapi.services.category.search(ctx.query);
      array.filter(cat => !cat.parent).map(cat => {
        tree.push(processCategory(cat));
      });
      return tree;
    } else {
      array = await strapi.services.category.fetchAll(ctx.query, populate);
      var parentsCat = array.filter(cat => !cat.parent);
      for (let cat of parentsCat){
        let result = await processCategory(cat);
        tree.push(result);
      }

      return await tree;
    }
  },
  /**
   * Retrieve a category record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.category.fetch(ctx.params);
  },

  /**
   * Count category records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.category.count(ctx.query);
  },

  /**
   * Create a/an category record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.category.add(ctx.request.body);
  },

  /**
   * Update a/an category record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.category.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an category record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.category.remove(ctx.params);
  }
};
