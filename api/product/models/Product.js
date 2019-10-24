'use strict';

/**
 * Lifecycle callbacks for the `Product` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {
  //   console.log(model._update);
  //   if(model._update.amount) {
  //     if (model._update.amount <= 0) {
  //       model._update.amount = 0;
  //       model._update.avaliable = false;
  //     }
  //   }
  // },

  // After saving a value.
  // Fired after an `insert` or `update` query.
  afterSave: async (model, result) => {
    console.log(result + ' !!!!!!! UPDATED');
    console.log(model + ' !!!!!!! UPDATED');
    if (result.amount <= 0) {
      await strapi.services.product.edit({_id: result._id}, {avaliable: false});
    }
  },

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {
  //
  // },

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  afterFetchAll: async (model, results) => {
    for (let result of results) {
      result.promocode = undefined;
    }
  },


  // beforeFetch: async (model) => {
  //
  //
  // },

  afterFetch: async (model, result) => {
    if (result) {
      result.order = undefined;
      result.promocode = undefined;
    }
  },

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {
  //   console.log(model._update);
  //   if(model._update.amount) {
  //     if (model._update.amount <= 0) {
  //       model._update.amount = 0;
  //       model._update.avaliable = false;
  //     }
  //   }
  // },

  // After updating a value.
  // Fired after an `update` query.
  afterUpdate: async (model, result) => {
    console.log(result.amount + ' !!!!!!! UPDATED');
    if (result.amount <= 0) {
      await strapi.services.product.edit({_id: result._id}, {avaliable: false});
    }
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
