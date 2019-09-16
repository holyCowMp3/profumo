'use strict';

/**
 * Useragreement.js controller
 *
 * @description: A set of functions called "actions" for managing `Useragreement`.
 */

module.exports = {

  /**
   * Retrieve useragreement records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.useragreement.search(ctx.query);
    } else {
      return strapi.services.useragreement.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a useragreement record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.useragreement.fetch(ctx.params);
  },

  /**
   * Count useragreement records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.useragreement.count(ctx.query);
  },

  /**
   * Create a/an useragreement record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.useragreement.add(ctx.request.body);
  },

  /**
   * Update a/an useragreement record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.useragreement.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an useragreement record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.useragreement.remove(ctx.params);
  }
};
