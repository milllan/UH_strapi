'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */

module.exports = {
  /* Custom */
  
  /**
   * Retrieve a product record.
   * Underscore fix za UH__Type__c 
   *
   * @return {Object}
   */

  findOne_: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }
    let obj = await strapi.services.product.fetch(ctx.params);
    if (obj.UH__Type__c)
      obj.UH__Type__c = obj.UH__Type__c.replace(/_/g, ' '); // 2018.08.29, spare_part fix
    
    console.log('\n\n  wo (controller) \n\n', obj);
    console.log('\n\n  wo (controller) \n\n', obj.UH__Type__c);

    return obj;
  },

  /* Default */

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.product.search(ctx.query);
    } else {
      return strapi.services.product.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.product.fetch(ctx.params);
  },

  /**
   * Count product records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.product.count(ctx.query);
  },

  /**
   * Create a/an product record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.product.add(ctx.request.body);
  },

  /**
   * Update a/an product record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.product.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an product record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.product.remove(ctx.params);
  }
};
