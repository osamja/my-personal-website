const process = require('process');
require('dotenv').config();

const BASE_DOMAIN = 'sammyjaved.com';
const PROTOCOL = 'https://';
const BASE_PATH = 'static';
const CATEGORY = 'images';

function getBaseDomain() {
  if (process.env.environment === 'local') {
    return 'localhost:3000';
  } else if (process.env.environment === 'development') {
      return BASE_DOMAIN + ':8001';
  } else if (process.env.environment === 'staging') {
      return BASE_DOMAIN + ':8000';
  } else if (process.env.environment === 'production') {
      return BASE_DOMAIN;
  } else {
      return BASE_DOMAIN;
  }
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBaseUrl() {
  const baseUrl = PROTOCOL + getBaseDomain();
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

export const DEFAULT_BLACK_IMAGE_PATH = getBaseUrl() + '/' + getBasePath() + '/' + 'general/colors/black.jpg';
