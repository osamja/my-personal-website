import {
  getBaseUrl,
  getBasePath,
} from '../../../scripts/Routes/images.js';

const travel2018Path = 'travel/cover';

function getTravel2018Source(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + travel2018Path + '/' + imageFileName;
}

export const travel2018 = [
    {
        'src': getTravel2018Source('peru.jpg'),
        'text': 'Peru',
        'duration': '14 days',
        'redirect': true,
        'url': 'https://www.youtube.com/watch?v=n7LcDyO7-WI',
    },
    {
        'src': getTravel2018Source('karachi.jpg'),
        'text': 'Karachi, Pakistan',
        'duration': '3 days',
        'url': '#',
    },
    {
        'src': getTravel2018Source('istanbul.jpg'),
        'text': 'Istanbul, Turkey',
        'duration': '4 days',
        'url': '#',
    },
    {
        'src': getTravel2018Source('nyc.jpg'),
        'text': 'New York City',
        'duration': '7 days',
        'url': '#',
    },
];
