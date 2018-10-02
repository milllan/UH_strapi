'use strict';

/**
 * Lifecycle callbacks for the `Wolabor` model.
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
    console.log('WO laber afterFetchAll');
    results.map(entry => {
      entry.Id = entry.id;
      if (!entry.UH__totalCost__c || parseFloat(entry.UH__totalCost__c) == 0) {
        entry.UH__totalCost__c = entry.UH__hoursCount__c * entry.UH__Cost__c; // 2018.08.29, total cost calc
      }
      console.log('entry.UH__totalCost__c: ', parseFloat(entry.UH__totalCost__c));
    });

  },

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  afterFetch: async (model, result) => {
    result.Id = result.id;
    //console.log('WO laber afterFetch', result.UH__totalCost__c);
    if (!result.UH__totalCost__c || parseFloat(result.UH__totalCost__c) == 0) {
      result.UH__totalCost__c = result.UH__hoursCount__c * result.UH__Cost__c;  // 2018.08.29, total cost calc
    }
    //console.log('result.UH__totalCost__c: ', parseFloat(result.UH__totalCost__c));
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
