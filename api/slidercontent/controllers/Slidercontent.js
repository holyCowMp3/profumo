'use strict';

/**
 * Slidercontent.js controller
 *
 * @description: A set of functions called "actions" for managing `Slidercontent`.
 */

module.exports = {

  /**
   * Retrieve slidercontent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.slidercontent.search(ctx.query);
    } else {
      return strapi.services.slidercontent.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a slidercontent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.slidercontent.fetch(ctx.params);
  },

  /**
   * Count slidercontent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.slidercontent.count(ctx.query);
  },

  /**
   * Create a/an slidercontent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.slidercontent.add(ctx.request.body);
  },

  /**
   * Update a/an slidercontent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.slidercontent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an slidercontent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.slidercontent.remove(ctx.params);
  }
};
