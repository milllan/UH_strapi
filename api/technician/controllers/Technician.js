'use strict';

/**
 * Technician.js controller
 *
 * @description: A set of functions called "actions" for managing `Technician`.
 */

module.exports = {

  /**
   * Retrieve technician records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.technician.search(ctx.query);
    } else {
      return strapi.services.technician.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a technician record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.technician.fetch(ctx.params);
  },

  /**
   * Count technician records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.technician.count(ctx.query);
  },

  /**
   * Create a/an technician record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.technician.add(ctx.request.body);
  },

  /**
   * Update a/an technician record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.technician.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an technician record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.technician.remove(ctx.params);
  }
};
