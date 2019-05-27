import {
  DEFAULT_BLACK_IMAGE_PATH,
  getBaseUrl,
  getBasePath,
} from '../../../scripts/Routes/images.js';

const travel2019Path = 'travel/cover';

function getHomePageSource(imageFileName) {
    return getBaseUrl() + '/' + getBasePath() + '/' + travel2019Path + '/' + imageFileName;
}

export const travel2019 = [
    {
        'src': getHomePageSource('LA-19.jpg'),
        'text': 'Los Angeles, CA',
        'duration': '3 days',
        'redirect': true,
        'url': 'https://youtu.be/fDHBSap9X28',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Rawalpindi, Pakistan',
        'duration': '14 days',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Yosemite, CA',
        'duration': '3 days',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'New Orleans, LA',
        'duration': '4 days',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Los Angeles, CA',
        'duration': '2 days',
        'url': '#',
    },
];
