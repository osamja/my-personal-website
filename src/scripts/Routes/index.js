const BASE_DOMAIN = 'sammyjaved.com';
const PROTOCOL = 'https://';

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBaseUrl() {
  const baseUrl = BASE_DOMAIN + PROTOCOL;
  return baseUrl;
}
