import {
  getBaseUrl,
  getBasePath,
  getCloudinaryBaseUrl
} from '../../../scripts/Routes/images.js';

const travel2019Path = 'travel/cover';

const cloudinaryTravelPath = 'v1564458339/my-personal-website/travel/2019/';

const winter2018 = 'winter%202018/';

// const cloudinaryPath = 'https://res.cloudinary.com/dgrlg424p/image/upload/v1564458339/my-personal-website/travel/2019/winter%202018/sammy-hafiz.jpg';

function getImageSource(imageFileName, useCloudinary, season) {
    if (useCloudinary) {
        return getCloudinaryBaseUrl() + cloudinaryTravelPath + winter2018 + imageFileName;
    }

    return getBaseUrl() + '/' + getBasePath() + '/' + travel2019Path + '/' + imageFileName;
}

export const travel2019 = [
    {
        'src': getImageSource('sammy-hafiz-copy.jpg', true, winter2018),
        'text': 'Rawalpindi, Pakistan',
        'duration': '14 days',
        'when': 'Winter 2018',
        'url': '#',
    },
    {
        'src': getImageSource('LA-19.jpg'),
        'text': '(Downtown) Los Angeles, CA',
        'duration': '3 days',
        'when': 'Winter 2018',
        'redirect': true,
        'url': 'https://youtu.be/fDHBSap9X28',
    },
    {
        'src': getImageSource('yosemite-su-19.jpg'),
        'text': 'Yosemite, CA',
        'duration': '3 days',
        'url': '#',
    },
    {
        'src': getImageSource('new-orleans-april-19.jpg'),
        'text': 'New Orleans, LA',
        'duration': '4 days',
        'url': '#',
    },
    {
        'src': getImageSource('west-la-spring-19.jpg'),
        'text': '(West) Los Angeles, CA',
        'duration': '2 days',
        'url': '#',
    },
    {
        'src': getImageSource('mclean-su-19.jpg'),
        'text': 'McLean, VA',
        'duration': '3 weeks',
        'time': 'Summer 2019',
        'url': '#',
    },
    {
        'src': getImageSource('nyc-su-19.jpg'),
        'text': 'New York City',
        'duration': '1 day',
        'time': 'Summer 2019',
        'url': '#',
    },
    {
        'src': getImageSource('niagra-falls-su-19.jpg'),
        'text': 'Niagara Falls',
        'duration': '2 days',
        'time': 'Summer 2019',
        'url': '#',
    },
];
