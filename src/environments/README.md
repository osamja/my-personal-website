There are four environments for my-personal-website
 1) local
    - local.Dockerfile that maps host to container volume
    - runs `npm start`
    - hot reloading
    - Use case: rapid frontend (react/css/design) development
    - test at http://sammyjaved.com:3001/
    - @TODO: make availbable on host machine to faciliate offline development
 2) development
    - dev.Dockerfile that maps host to container volume
    - runs `node server.js 8080`
    - @TODO: support hot reloading in future
    - Use case: rapid backend + server-side development
    - test at https://sammyjaved.com:8080/
 3) staging
    - stage.Dockerfile that builds the entire app into the docker image
    - runs `node server.js 8000`
    - Use case: testing before changes go to production
    - test at https://sammyjaved.com:8000/
 4) production
    - prod.Dockerfile that builds the entire app into the docker image
    - runs `node server.js 443`
    - Use case: Serve sammyjaved.com


# TEMPORARY: removed node_modules from .dockerignore for quicker testing
