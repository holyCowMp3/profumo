'use strict';

/**
 * Discount.js controller
 *
 * @description: A set of functions called "actions" for managing `Discount`.
 */

module.exports = {

  /**
   * Retrieve discount records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.discount.search(ctx.query);
    } else {
      return strapi.services.discount.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a discount record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.discount.fetch(ctx.params);
  },

  /**
   * Count discount records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.discount.count(ctx.query);
  },

  /**
   * Create a/an discount record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.discount.add(ctx.request.body);
  },

  /**
   * Update a/an discount record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.discount.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an discount record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.discount.remove(ctx.params);
  }
};
