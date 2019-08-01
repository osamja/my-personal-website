import {
  getBaseUrl,
  getBasePath,
  DEFAULT_BLACK_IMAGE_PATH
} from '../../scripts/Routes/images.js';

const path = 'guitar';

function getImageSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + path + '/' + imageFileName;
}

const songsIdLikeToPlay = [
  'Passionfruit - Drake',
];

const sevenMinuteSet = {
  'Better Together': '3 min',
  'Why Georgia': '3 min',
  'Blackbird': '2 min'
};

export const guitar = [
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Better Together - Jack Johnson',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Why Georgia - John Mayer',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Blackbird - The Beatles',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Crash Into Me - Dave Matthews Band',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Razor - Foo Fighters',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Love Yourself - Justin Bieber',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Belief - John Mayer',
        'url': '#',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Wonderland - John Mayer',
        'url': '#',
    },
];
