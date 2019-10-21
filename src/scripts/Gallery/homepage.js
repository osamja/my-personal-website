import {
    getBaseUrl,
    getBasePath,
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
        'src': getHomePageSource('guitar-body.jpg'),
        'text': 'Guitar',
        'url': '/guitar',
    },
    {
        'src': getHomePageSource('movies.jpg'),
        'text': 'Movies',
        'url': '/movies',
    },
    {
        'src': getHomePageSource('academic.jpg'),
        'text': 'Academic',
        'url': '/academic',
    },
];
