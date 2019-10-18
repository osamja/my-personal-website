import {
    getBaseUrl,
    getBasePath,
    DEFAULT_BLACK_IMAGE_PATH
} from '../../scripts/Routes/images.js';

const homepagePath = 'home';

function getHomePageSource(imageFileName) {
    return getBaseUrl() + '/' + getBasePath() + '/' + homepagePath + '/' + imageFileName;
}

export const imgUrls = [
    {
        'src': getHomePageSource('projects.jpg'),
        'text': 'Projects',
        'url': '/projects',
    },
    {
        'src': getHomePageSource('books.jpg'),
        'text': 'Books',
        'url': '/books',
    },
    {
        'src': getHomePageSource('travel.jpg'),
        'text': 'Travel',
        'url': '/travel',
    },
    {
        'src': getHomePageSource('academic.jpg'),
        'text': 'Academic',
        'url': '/academic',
    },
    {
        'src': getHomePageSource('movies.jpg'),
        'text': 'Movies',
        'url': '/movies',
    },
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Guitar',
        'url': '/guitar',
    },
];
