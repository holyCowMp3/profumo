'use strict';

/**
 * Callback.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');
const { convertRestQueryParams, buildQuery } = require('strapi-utils');
module.exports = {

  /**
   * Promise to fetch all callbacks.
   *
   * @return {Promise}
   */

  fetchAll: (params, populate) => {
    const filters = convertRestQueryParams(params);

    const populateOpt = populate || Callback.associations
  .filter(ast => ast.autoPopulate !== false)
  .map(ast => ast.alias);

  return buildQuery({
    model: Callback,
    filters,
    populate: populateOpt,
    });
    },


    /**
     * Promise to fetch a/an callback.
     *
     * @return {Promise}
     */

  fetch: (params) => {
    // Select field to populate.
    const populate = Callback.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Callback
      .findOne(_.pick(params, _.keys(Callback.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count callbacks.
   *
   * @return {Promise}
   */

  count: (params) => {
    const filters = convertRestQueryParams(params);

    return buildQuery({
      model: Callback,
  filters: { where: filters.where },
  })
  .count();
  },


    /**
     * Promise to add a/an callback.
     *
     * @return {Promise}
     */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Callback.associations.map(ast => ast.alias));
    const data = _.omit(values, Callback.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Callback.create(data);

    // Create relational data and return the entry.
    return Callback.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an callback.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Callback.associations.map(a => a.alias));
    const data = _.omit(values, Callback.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Callback.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Callback.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an callback.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Callback.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Callback
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Callback.associations.map(async association => {
        if (!association.via || !data._id || association.dominant) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an callback.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('callback', params);
    // Select field to populate.
    const populate = Callback.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Callback.attributes).reduce((acc, curr) => {
      switch (Callback.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Callback
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }

};
