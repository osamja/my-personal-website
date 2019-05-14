import {
  getBaseUrl,
  getBasePath,
  DEFAULT_BLACK_IMAGE_PATH,
} from '../../../scripts/Routes/images.js';

const coursesAcademicProjectsPath = 'academic/courses';

function getCompPhotoSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + coursesAcademicProjectsPath + '/' + imageFileName;
}

export const coursesAcademicProjects = [
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Intro to Machine Learning - Andrew Ng',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Machine Learning Case Studies - Univ Of Washington',
    'url': '#',
  },
  {
    'src': DEFAULT_BLACK_IMAGE_PATH,
    'text': 'Advanced React and GraphQL - Wes Bos',
    'url': '#',
  },
];
