'use strict';

/**
 * Wopart.js controller
 *
 * @description: A set of functions called "actions" for managing `Wopart`.
 */

module.exports = {

  /**
   * Retrieve wopart records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wopart.search(ctx.query);
    } else {
      return strapi.services.wopart.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wopart record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.wopart.fetch(ctx.params);
  },

  /**
   * Count wopart records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wopart.count(ctx.query);
  },

  /**
   * Create a/an wopart record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.wopart.add(ctx.request.body);
  },

  /**
   * Update a/an wopart record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wopart.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wopart record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wopart.remove(ctx.params);
  }
};
