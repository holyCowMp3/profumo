'use strict';

/**
 * Callback.js controller
 *
 * @description: A set of functions called "actions" for managing `Callback`.
 */

module.exports = {

  /**
   * Retrieve callback records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.callback.search(ctx.query);
    } else {
      return strapi.services.callback.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a callback record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.callback.fetch(ctx.params);
  },

  /**
   * Count callback records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.callback.count(ctx.query);
  },

  /**
   * Create a/an callback record.
   *
   * @return {Object}
   */

  create: async (ctx) => {


    return strapi.services.callback.add(ctx.request.body);
  },

  /**
   * Update a/an callback record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.callback.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an callback record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.callback.remove(ctx.params);
  }
};
