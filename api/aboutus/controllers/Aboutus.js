'use strict';

/**
 * Aboutus.js controller
 *
 * @description: A set of functions called "actions" for managing `Aboutus`.
 */

module.exports = {

  /**
   * Retrieve aboutus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.aboutus.search(ctx.query);
    } else {
      return strapi.services.aboutus.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a aboutus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.aboutus.fetch(ctx.params);
  },

  /**
   * Count aboutus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.aboutus.count(ctx.query);
  },

  /**
   * Create a/an aboutus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.aboutus.add(ctx.request.body);
  },

  /**
   * Update a/an aboutus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.aboutus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an aboutus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.aboutus.remove(ctx.params);
  }
};
