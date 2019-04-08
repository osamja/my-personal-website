const process = require('process');
require('dotenv').config();

const BASE_DOMAIN = 'sammyjaved.com';
const PROTOCOL = 'https://';
const BASE_PATH = 'static';
const CATEGORY = 'images';

export function getBaseDomain() {
  if (process.env.environment === 'local') {
    return 'localhost:3000';
  } else {
    return BASE_DOMAIN;
  }
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBaseUrl() {
  const baseUrl = BASE_DOMAIN + PROTOCOL;
  return baseUrl;
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBasePath() {
  const basePath = BASE_PATH + '/' + CATEGORY;
  return basePath;
}
