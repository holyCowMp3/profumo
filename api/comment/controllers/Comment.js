'use strict';

/**
 * Comment.js controller
 *
 * @description: A set of functions called "actions" for managing `Comment`.
 */

module.exports = {

  /**
   * Retrieve comment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {})=> {

    if (ctx.query._q) {
       const comment = await strapi.services.comment.search(ctx.query);
      const {owner} = comment;
      console.log(owner);
      return comment;
    } else {
      return await strapi.services.comment.fetchAll(ctx.query, populate).then(col => {
        for (var i in col) {

          if (ctx.state.user == undefined || col[i]['owner']['_id'].toString()!==ctx.state.user._id.toString()) {
            col[i]['owner']=undefined;
            }
        }
        return col;
      });
    }
  },

  /**
   * Retrieve a comment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.comment.fetch(ctx.params).then(col => {
        if (ctx.state.user == undefined || col['owner']['id'].toString()!== ctx.state.user._id.toString()) {
            col['owner'] =undefined;
        }
        console.log(col);
      return col;
    });
  },

  /**
   * Count comment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.comment.count(ctx.query);
  },

  /**
   * Create a/an comment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.comment.add(ctx.request.body);
  },

  /**
   * Update a/an comment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.comment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an comment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    if (ctx.params.id) 
    return strapi.services.comment.remove(ctx.params);
  }
};
