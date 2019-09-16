'use strict';

/**
 * Delivery.js controller
 *
 * @description: A set of functions called "actions" for managing `Delivery`.
 */

module.exports = {

  /**
   * Retrieve delivery records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.delivery.search(ctx.query);
    } else {
      return strapi.services.delivery.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a delivery record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.delivery.fetch(ctx.params);
  },

  /**
   * Count delivery records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.delivery.count(ctx.query);
  },

  /**
   * Create a/an delivery record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.delivery.add(ctx.request.body);
  },

  /**
   * Update a/an delivery record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.delivery.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an delivery record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.delivery.remove(ctx.params);
  }
};
