import {
  getBaseUrl,
  getBasePath,
  DEFAULT_BLACK_IMAGE_PATH,
} from '../../../scripts/Routes/images.js';

const sideAcademicProjectsPath = 'academic/side';

function getCompPhotoSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + sideAcademicProjectsPath + '/' + imageFileName;
}

export const sideAcademicProjects = [
    {
        'src': DEFAULT_BLACK_IMAGE_PATH,
        'text': 'Give Em the Axe',
        'url': '#',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('centroid-classifier.jpg'),
        'text': 'Simple Centroid Classifier',
        'url': 'https://github.com/osamja/SimpleCentroidClassifier/blob/master/centroid.ipynb',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('nextwalk.jpg'),
        'text': 'NextWalk iOS App',
        'url': 'https://www.youtube.com/watch?v=ZAlZrwFGx04&feature=youtu.be',
        'redirect': true,
    },
];
