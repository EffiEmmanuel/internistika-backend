'use strict';

/**
 * visit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visit.visit');
