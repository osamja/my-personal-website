import {
  getBaseUrl,
  getBasePath,
  DEFAULT_BLACK_THUMBNAIL_IMAGE_PATH,
} from '../../Routes/images.js';

const homepagePath = 'professional';

function getProfessionalSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + homepagePath + '/' + imageFileName;
}

export const professional = [
  {
    'src': getProfessionalSource('adobe-1.jpg'),
    'text': 'Adobe',
    'url': '#',
  },
  {
    'src': getProfessionalSource('Juniper-Networks.jpg'),
    'text': 'Juniper Networks',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_THUMBNAIL_IMAGE_PATH,
    'text': 'TeleSense',
    'url': '#',
  },
];
