'use strict';

/**
 * Woexpense.js controller
 *
 * @description: A set of functions called "actions" for managing `Woexpense`.
 */

module.exports = {

  /**
   * Retrieve woexpense records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.woexpense.search(ctx.query);
    } else {
      return strapi.services.woexpense.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a woexpense record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.woexpense.fetch(ctx.params);

    // let woExp = await strapi.services.woexpense.fetch(ctx.params);
    
    // woExp['UH__totalCost__c'] = woExp.UH__Quantity__c * woExp.UH__Cost__c;
    // //ctx.request.body['UH__totalCost__c'] = ctx.request.body.UH__Quantity__c * ctx.request.body.UH__Cost__c;
    // //console.log('UH__totalCost__c ... ', ctx.request.body['UH__totalCost__c']);
    // console.log('woExp', woExp);
    
    // return woExp;
  },

  /**
   * Count woexpense records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.woexpense.count(ctx.query);
  },

  /**
   * Create a/an woexpense record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.woexpense.add(ctx.request.body);

    // console.log('WOEXP request.body', ctx.request.body);

    // //ctx.request.body['UH__totalCost__c'] = ctx.request.body.UH__Quantity__c * ctx.request.body.UH__Cost__c;
    // //console.log('UH__totalCost__c ... ', ctx.request.body['UH__totalCost__c']);
    
    // let count = await strapi.services.woexpense.count(ctx.query);
    // const countIncrementedStr = () => {return ('0000000' + count).substr(-7);};
    
    // ctx.request.body['Name'] = 'WO_EXPENSE-'+(new Date()).getFullYear()+'-'+countIncrementedStr();

    // let woExp =  strapi.services.woexpense.add(ctx.request.body);
    // console.log('WOEXP', woExp);
    // return woExp;
  },

  /**
   * Update a/an woexpense record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.woexpense.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an woexpense record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.woexpense.remove(ctx.params);
  }
};
