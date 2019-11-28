# https://mherman.org/blog/dockerizing-a-react-app/

# BUILD IMAGE: docker build -t my-personal-website:staging -f stage.Dockerfile .
# RUN CONTAINER: docker run -p 8000:8000 --rm my-personal-website:staging
# SHELL: docker container run -it my-personal-website:staging sh

# Development steps:
#  1) run container 
#  2) make code changes
#  3) rebuild image and restart container
#   - [untested] shortcut might be to ssh into container and run `npm run build-stage`
#     to update the containers build/ directory thats being served by index.js

# build environment
FROM node:12.2.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build-stage

CMD ["node", "server.js", "8000"]
