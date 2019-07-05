'use strict';

/**
 * Promocode.js controller
 *
 * @description: A set of functions called "actions" for managing `Promocode`.
 */

module.exports = {

  /**
   * Retrieve promocode records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.promocode.search(ctx.query);
    } else {
      return strapi.services.promocode.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a promocode record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.promocode.fetch(ctx.params);
  },

  /**
   * Count promocode records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.promocode.count(ctx.query);
  },

  /**
   * Create a/an promocode record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.promocode.add(ctx.request.body);
  },

  /**
   * Update a/an promocode record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.promocode.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an promocode record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.promocode.remove(ctx.params);
  }
};
