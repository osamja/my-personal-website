// https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac

const path = require('path');

module.exports = function({ env, paths }) {
  return {
    webpack: {
      alias: {
        environment: path.join(__dirname, 'src', 'environments', process.env.REACT_APP_ENV)
      }
    },
  };
};
