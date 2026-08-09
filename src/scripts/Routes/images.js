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
    return 'http://localhost:3000';
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

export function getImageSource(imageName, category = null) {
  if (category) {
    return getBaseUrl() + '/' + getBasePath() + '/' + category + '/' + imageName;
  }

  return getBaseUrl() + '/' + getBasePath() + '/' + imageName;
}



const generatePlaceholderSvg = (w, h) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3a4565"/>
        <stop offset="100%" style="stop-color:#2a3350"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <line x1="0" y1="0" x2="${w}" y2="${h}" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <line x1="${w}" y1="0" x2="0" y2="${h}" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};

export const DEFAULT_BLACK_IMAGE_PATH = generatePlaceholderSvg(800, 600);
export const DEFAULT_BLACK_THUMBNAIL_IMAGE_PATH = generatePlaceholderSvg(400, 300);
