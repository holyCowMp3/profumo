'use strict';

/**
 * Warranty.js controller
 *
 * @description: A set of functions called "actions" for managing `Warranty`.
 */

module.exports = {

  /**
   * Retrieve warranty records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.warranty.search(ctx.query);
    } else {
      return strapi.services.warranty.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a warranty record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.warranty.fetch(ctx.params);
  },

  /**
   * Count warranty records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.warranty.count(ctx.query);
  },

  /**
   * Create a/an warranty record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.warranty.add(ctx.request.body);
  },

  /**
   * Update a/an warranty record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.warranty.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an warranty record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.warranty.remove(ctx.params);
  }
};
