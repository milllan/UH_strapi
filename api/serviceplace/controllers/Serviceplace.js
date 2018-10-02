'use strict';

/**
 * Serviceplace.js controller
 *
 * @description: A set of functions called "actions" for managing `Serviceplace`.
 */

module.exports = {

  /**
   * Retrieve serviceplace records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.serviceplace.search(ctx.query);
    } else {
      return strapi.services.serviceplace.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a serviceplace record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.serviceplace.fetch(ctx.params);
  },

  /**
   * Count serviceplace records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.serviceplace.count(ctx.query);
  },

  /**
   * Create a/an serviceplace record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.serviceplace.add(ctx.request.body);
  },

  /**
   * Update a/an serviceplace record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.serviceplace.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an serviceplace record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.serviceplace.remove(ctx.params);
  }
};
