import {
  DEFAULT_BLACK_IMAGE_PATH,
} from '../../../scripts/Routes/images.js';

import {
  getBaseUrl,
  getBasePath,
  getCloudinaryBaseUrl,
} from '../../../scripts/Routes/images.js';

export const countries_visited = [
  'USA',
  'Canada',
  'Mexico',
  'Peru',
  'St Lucia',
  'France',
  'Pakistan',
  'Turkiye',
  'United Arab Emirates',
  'England',
  'Scotland',
  'Italy',
  'Spain',
  'The Netherlands',
  'Belgium',
  'Germany',
  'Japan',
];

function getImageSource(imageFileName, useCloudinary, season) {
  const cloudinaryTravelPath = 'v1564458339/my-personal-website/travel/';
  if (useCloudinary) {
      return getCloudinaryBaseUrl() + cloudinaryTravelPath + imageFileName;
  }

  return getBaseUrl() + '/' + getBasePath() + '/travel/cover/' + imageFileName;
}

export const travel2023 = [
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Japan',
    'duration': '',
    'time': 'February 2023 - ',
    'url': '#',
  },
]

export const travel2022 = [
  {
    'src': getImageSource('europe.png', false),
    'text': 'UK + Europe',
    'duration': '4 months',
    'time': 'July - November 2022',
    'redirect': true,
    'url': 'https://youtu.be/wDBnOPnfvyM',
  },
  {
      'src': DEFAULT_BLACK_IMAGE_PATH,
      'text': 'Oahu, Hawaii',
      'duration': '7 days',
      'time': 'Janurary 2022',
      'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'St Lucia',
    'duration': '7 days',
    'time': 'March 2022',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Miami, Florida',
    'duration': '14 days',
    'time': 'April 2022',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'NYC',
    'duration': '10 days',
    'time': 'May 2022',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Lohn, Texas',
    'duration': '7 days',
    'time': 'June 2022',
    'url': '#',
  },
];

export const travel2021 = [
  {
      'src': DEFAULT_BLACK_IMAGE_PATH,
      'text': 'Hunza, Pakistan',
      'duration': '21 days',
      'time': 'September 2021',
      'url': '#',
  },
];
