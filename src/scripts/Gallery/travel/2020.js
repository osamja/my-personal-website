import {
  getBaseUrl,
  getBasePath,
  getCloudinaryBaseUrl,
} from '../../../scripts/Routes/images.js';

const travel2019Path = 'travel/cover';

const cloudinaryTravelPath = 'v1564458339/my-personal-website/travel/2020/';

function getImageSource(imageFileName, useCloudinary, season) {
    if (useCloudinary) {
        return getCloudinaryBaseUrl() + cloudinaryTravelPath + imageFileName;
    }

    return getBaseUrl() + '/' + getBasePath() + '/' + travel2019Path + '/' + imageFileName;
}

export const travel2020 = [
    {
        'src': getImageSource('hawaii_ztaedu.jpg', true),
        'text': 'Hawaii (Oahu, Maui)',
        'duration': '7 days',
        'time': 'Winter 2020',
        'url': '#',
    },
    {
        'src': getImageSource('covid.png'),
        'text': 'Shovid-19',
        'duration': '2020-present',
        'time': '2020',
        'url': 'https://www.cdc.gov/coronavirus/2019-ncov/',
    },
];
