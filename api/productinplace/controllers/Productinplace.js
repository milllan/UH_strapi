'use strict';

/**
 * Productinplace.js controller
 *
 * @description: A set of functions called "actions" for managing `Productinplace`.
 */

module.exports = {

  /**
   * Retrieve productinplace records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productinplace.search(ctx.query);
    } else {
      return strapi.services.productinplace.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productinplace record. [MENJAN, 2018.09.12]
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    //return strapi.services.productinplace.fetch(ctx.params);
    return strapi.services.productinplace.fetch_withNesteWOs(ctx.params);  // getPiPDetails, nested WO data
  },

  /**
   * Count productinplace records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productinplace.count(ctx.query);
  },

  /**
   * Create a/an productinplace record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productinplace.add(ctx.request.body);
  },

  /**
   * Update a/an productinplace record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productinplace.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productinplace record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productinplace.remove(ctx.params);
  }
};
