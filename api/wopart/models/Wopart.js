'use strict';

/**
 * Lifecycle callbacks for the `Wopart` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  afterFetchAll: async (model, results) => {
    results.map(entry => {
      entry.Id = entry.id;
      if (!entry.UH__totalCost__c)
        entry.UH__totalCost__c = entry.UH__Quantity__c * entry.UH__Cost__c; // 2018.08.29, total cost calc
    });
  },

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  afterFetch: async (model, result) => {
    result.Id = result.id;
    if (!result.UH__totalCost__c)
      result.UH__totalCost__c = result.UH__Quantity__c * result.UH__Cost__c;  // 2018.08.29, total cost calc
  },

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
