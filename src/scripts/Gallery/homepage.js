import {
    getBaseUrl,
    getBasePath,
} from '../../scripts/Routes/images.js';

const homepagePath = 'home/compressed';

function getHomePageSource(imageFileName) {
    return getBaseUrl() + '/' + getBasePath() + '/' + homepagePath + '/' + imageFileName;
}

export const imgUrls = [
    {
        'src': getHomePageSource('pier.jpg'),
        'text': 'Projects',
        'url': '/projects',
    },
    {
        'src': getHomePageSource('evc2.jpg'),
        'text': 'Books',
        'url': '/books',
    },
    {
        'src': getHomePageSource('travel.jpg'),
        'text': 'Travel',
        'url': '/travel',
    },
    {
        'src': getHomePageSource('laska.jpg'),
        'text': 'Photography',
        'url': '/photography',
    },
    {
        'src': getHomePageSource('cal.jpg'),
        'text': 'Academic',
        'url': '/academic',
    },
    {
        'src': getHomePageSource('movies.jpg'),
        'text': 'Movies',
        'url': '/movies',
    },
];
