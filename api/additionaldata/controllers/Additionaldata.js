'use strict';

/**
 * Additionaldata.js controller
 *
 * @description: A set of functions called "actions" for managing `Additionaldata`.
 */

module.exports = {

  /**
   * Retrieve additionaldata records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.additionaldata.search(ctx.query);
    } else {
      return strapi.services.additionaldata.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a additionaldata record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.additionaldata.fetch(ctx.params);
  },

  /**
   * Count additionaldata records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.additionaldata.count(ctx.query);
  },

  /**
   * Create a/an additionaldata record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.additionaldata.add(ctx.request.body);
  },

  /**
   * Update a/an additionaldata record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.additionaldata.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an additionaldata record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.additionaldata.remove(ctx.params);
  }
};
