const BASE_DOMAIN = 'sammyjaved.com';
const PROTOCOL = 'https://';
const BASE_PATH = 'static';
const CATEGORY = 'images';

/**
 * React apps can only read env variables prefixed with 'REACT_APP'.
 * process.env.environment does not work locally with npm start, needs server
 */


/**
 * Returns the base domain used for retrieving static images
 * TODO: Utilize switch() statement
 * @returns {string}
 */
function getBaseDomain() {
  if (process.env.REACT_APP_ENV === 'local' && process.env.environment === "local") {
    return 'localhost:8002';
  } else if (process.env.REACT_APP_ENV === 'development') {
      return BASE_DOMAIN + ':8001';
  } else if (process.env.REACT_APP_ENV === 'staging') {
      return BASE_DOMAIN + ':8000';
  } else if (process.env.REACT_APP_ENV === 'production') {
      return BASE_DOMAIN;
  } else {
      return 'localhost:3000';
  }
}

/**
 * Return base url for my personal website
 * @returns {string}
 */
export function getBaseUrl() {
  if (process.env.REACT_APP_ENV !== 'local' ) {
      return PROTOCOL + getBaseDomain();
  } else {
      return 'http://' + getBaseDomain();
  }
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
