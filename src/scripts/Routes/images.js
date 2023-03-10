const BASE_DOMAIN = 'sammyjaved.com';
const HTTPS = 'https://';
const BASE_PATH = 'static';
const CATEGORY = 'images';

/**
 * Returns the base domain used for retrieving static images
 * TODO: Utilize switch() statement
 * @returns {string}
 */
function getBaseDomain() {
  return BASE_DOMAIN;
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBaseUrl() {
  // for local development
  if (window.location.hostname === 'localhost') {
    return 'http://' + 'localhost:3000';
  }
  
  return HTTPS + getBaseDomain();
}

export function getCloudinaryBaseUrl() {
  return 'https://res.cloudinary.com/dgrlg424p/image/upload/';
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBasePath() {
  const basePath = BASE_PATH + '/' + CATEGORY;
  return basePath;
}



export const DEFAULT_BLACK_IMAGE_PATH = getBaseUrl() + '/' + getBasePath() + '/general/colors/black.jpg';
export const DEFAULT_BLACK_THUMBNAIL_IMAGE_PATH = getBaseUrl() + '/' + getBasePath() + '/general/colors/black-thumbnail.jpg';
