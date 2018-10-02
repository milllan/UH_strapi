'use strict';

/**
 * Wolabor.js controller
 *
 * @description: A set of functions called "actions" for managing `Wolabor`.
 */

module.exports = {

  /**
   * Retrieve wolabor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wolabor.search(ctx.query);
    } else {
      return strapi.services.wolabor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wolabor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.wolabor.fetch(ctx.params);
  },

  /**
   * Count wolabor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wolabor.count(ctx.query);
  },

  /**
   * Create a/an wolabor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    console.log('WOEXP request.body', ctx.request.body);

    //ctx.request.body['UH__totalCost__c'] = ctx.request.body.UH__Quantity__c * ctx.request.body.UH__Cost__c;
    //console.log('UH__totalCost__c ... ', ctx.request.body['UH__totalCost__c']);
    
    let count = await strapi.services.wolabor.count(ctx.query);
    const countIncrementedStr = () => {return ('0000000' + count).substr(-7);};
    
    ctx.request.body['Name'] = 'WO_LABOUR-'+(new Date()).getFullYear()+'-'+countIncrementedStr();

    let woLabor = strapi.services.wolabor.add(ctx.request.body);
    console.log('WO_LABOUR', woLabor);
    return woLabor;
  },

  /**
   * Update a/an wolabor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wolabor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wolabor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wolabor.remove(ctx.params);
  }
};
