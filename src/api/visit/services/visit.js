'use strict';

/**
 * visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visit.visit');
