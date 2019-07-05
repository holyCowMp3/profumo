'use strict';

/**
 * Contacts.js controller
 *
 * @description: A set of functions called "actions" for managing `Contacts`.
 */

module.exports = {

  /**
   * Retrieve contacts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.contacts.search(ctx.query);
    } else {
      return strapi.services.contacts.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a contacts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contacts.fetch(ctx.params);
  },

  /**
   * Count contacts records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contacts.count(ctx.query);
  },

  /**
   * Create a/an contacts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contacts.add(ctx.request.body);
  },

  /**
   * Update a/an contacts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contacts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contacts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contacts.remove(ctx.params);
  }
};
