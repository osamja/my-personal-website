import {
    getBaseUrl,
    getBasePath,
} from '../../scripts/Routes/images.js';

const photographyPath = 'photography';

function getPhotographySource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + photographyPath + '/' + imageFileName;
}

export const imgUrls = [
    {
        'src': getPhotographySource('sammy-hafiz.jpg'),
        'text': 'Hafiz Juice',
        'url': '#',
    },
];
