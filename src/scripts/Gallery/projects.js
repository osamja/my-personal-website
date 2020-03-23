import {
  getBaseUrl,
  getBasePath,
} from '../../scripts/Routes/images.js';

const projectPath = 'projects';

function getProjectSource(imageFileName) {
  return getBaseUrl() + '/' + getBasePath() + '/' + projectPath + '/' + imageFileName;
}

export const projects = [
    {
        'src': getProjectSource('homepage.jpg'),
        'text': 'My Personal Website',
        'url': '/projects/my-personal-website',
    },
    {
        'src': getProjectSource('axe.jpg'),
        'text': 'Give Em the Axe',
        'url': 'https://www.youtube.com/watch?v=silvjiqSnaQ',
        'redirect': true,
    },
    // {
    //     'src': getProjectSource('local-sockets.jpg'),
    //     'text': 'Local File Sharing',
    //     'url': 'https://github.com/osamja/local_sockets',
    //     'redirect': true,
    // },
    {
      'src': getProjectSource('face-morph.jpg'),
      'text': 'Face morphing images',
      'url': '/projects/image-morpher',
      'redirect': true,
  },
];
