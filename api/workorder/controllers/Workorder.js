'use strict';

/**
 * Workorder.js controller
 *
 * @description: A set of functions called "actions" for managing `Workorder`.
 */

module.exports = {

  /**
   * Retrieve workorder records.
   *
   * @return {Object|Array}
   */
   
  /* Custom */

  findOne_woResourceCtrl: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }
    let wo = await strapi.services.workorder.fetch_woResourceCtrl(ctx.params);

    let statuses = ['Open', 'Accept', 'Travelling', 'Arrived on place', 'Completed', 'Closed'];
    let tmpStrings = ['complete', 'incomplete'];
    let statusArr = statuses.map(x => (x==wo.UH__Status__c) ? function(){tmpStrings.shift(); return 'current'}() : tmpStrings[0]);
    
    wo.statusesMap = {
      'Open':'slds-tabs_path__item slds-is-'+statusArr[0],
      'Accept':'slds-tabs_path__item slds-is-'+statusArr[1],
      'Travelling':'slds-tabs_path__item slds-is-'+statusArr[2],
      'Arrived on place':'slds-tabs_path__item slds-is-'+statusArr[3],
      'Completed':'slds-tabs_path__item slds-is-'+statusArr[4],
      'Closed':'slds-tabs_path__item slds-is-'+statusArr[5]
    };
    
    //console.log('\n\n  wo (controller) \n\n', wo);
    //console.log('\n\n  wo (controller) \n\n', wo.statusesMap);
    
    return wo;
  },

  update_woResourceCtrl: async (ctx, next) => {
    if (ctx.request.body.UH__Status__c)
      ctx.request.body.UH__Status__c = ctx.request.body.UH__Status__c.replace(/\s/g, '_'); // 2018.08.17, arrived on place fix
    return strapi.services.workorder.edit(ctx.params, ctx.request.body) ;
  },

  /* Default */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.workorder.search(ctx.query);
    } else {
      return strapi.services.workorder.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a workorder record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    let wo = await strapi.services.workorder.fetch(ctx.params);

    let statuses = ['Open', 'Accept', 'Travelling', 'Arrived on place', 'Completed', 'Closed'];
    let tmpStrings = ['complete', 'incomplete'];
    let statusArr = statuses.map(x => (x==wo.UH__Status__c) ? function(){tmpStrings.shift(); return 'current';}() : tmpStrings[0]);
    
    wo.statusesMap = {
      'Open':'slds-tabs_path__item slds-is-'+statusArr[0],
      'Accept':'slds-tabs_path__item slds-is-'+statusArr[1],
      'Travelling':'slds-tabs_path__item slds-is-'+statusArr[2],
      'Arrived on place':'slds-tabs_path__item slds-is-'+statusArr[3],
      'Completed':'slds-tabs_path__item slds-is-'+statusArr[4],
      'Closed':'slds-tabs_path__item slds-is-'+statusArr[5]
    };
    
    return wo;
  },

  /**
   * Count workorder records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.workorder.count(ctx.query);
  },

  /**
   * Create a/an workorder record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.workorder.add(ctx.request.body);
  },

  /**
   * Update a/an workorder record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    if (ctx.request.body.UH__Status__c)
      ctx.request.body.UH__Status__c = ctx.request.body.UH__Status__c.replace(/\s/g, '_'); // 2018.08.17
    return strapi.services.workorder.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an workorder record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.workorder.remove(ctx.params);
  }
};
