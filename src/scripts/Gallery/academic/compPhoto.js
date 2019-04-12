import {
  getBaseUrl,
  getBasePath,
} from '../../../scripts/Routes/images.js';

const compPhotoPath = 'academic/compPhoto';

function getCompPhotoSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + compPhotoPath + '/' + imageFileName;
}

export const computationalPhotography = [
    {
        'src': getCompPhotoSource('proj1-colorizing-photos.jpg'),
        'text': 'Colorizing the Prokudin-Gorskii photo collection',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj1/cs194-26-aeg/osam_javed_proj1/',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('proj2-camera-obscura.jpg'),
        'text': 'Camera Obscura',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj2/cs194-26-aeg/cs194-project2/',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('proj3-frequencies.jpg'),
        'text': 'Fun with Frequencies',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj3/cs194-26-aeg/osam_javed_proj3/',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('proj4-content-aware-resizing.jpg'),
        'text': 'Content Aware Resizing',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj4/cs194-26-aeg/osam_javed_proj4/',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('proj5-face-morphing.jpg'),
        'text': 'Face Morphing',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj5/cs194-26-aeg',
        'redirect': true,
    },
    {
        'src': getCompPhotoSource('proj6-lightfield.jpg'),
        'text': 'Lightfield Cameras',
        'url': 'https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj6/cs194-26-aeg',
        'redirect': true,
    },
];
