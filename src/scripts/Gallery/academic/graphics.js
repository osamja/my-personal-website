import {
    getBaseUrl,
    getBasePath,
} from '../../../scripts/Routes/images.js';

const graphicsPath = 'academic/graphics';
const graphicsWriteupPath = 'static/archive/cs184';

function getGraphicsPhotoSource(imageFileName) {
    return getBaseUrl() + '/' + getBasePath() + '/' + graphicsPath + '/' + imageFileName;
}

function getGraphicsProjectSource(projectNumber) {
    if (projectNumber === 1) {
        return getBaseUrl() + '/' + graphicsWriteupPath + '/asst1/index.html';
    } else if (projectNumber === 2) {
        return getBaseUrl() + '/' + graphicsWriteupPath + '/asst2/index.html';
    } else if (projectNumber === 3) {
        return getBaseUrl() + '/' + graphicsWriteupPath + '/asst3/index.html';
    } else if (projectNumber === 4) {
        return getBaseUrl() + '/' + graphicsWriteupPath + '/asst4/index.html';
    } else {
        return '#';
    }
}

export const graphicsImages = [
    {
        'src': getGraphicsPhotoSource('proj1.jpg'),
        'text': 'Rasterizester',
        'url': getGraphicsProjectSource(1),
        'redirect': true,
    },
    {
        'src': getGraphicsPhotoSource('proj2.jpg'),
        'text': 'GeoMenagerie',
        'url': getGraphicsProjectSource(2),
        'redirect': true,
    },
    {
        'src': getGraphicsPhotoSource('proj3.jpg'),
        'text': 'PathTracer',
        'url': getGraphicsProjectSource(3),
        'redirect': true,
    },
    {
        'src': getGraphicsPhotoSource('proj4.jpg'),
        'text': 'Lens Simulator',
        'url': getGraphicsProjectSource(4),
        'redirect': true,
    },

];
