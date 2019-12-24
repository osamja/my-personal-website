# https://mherman.org/blog/dockerizing-a-react-app/

# BUILD IMAGE: docker build -t my-personal-website:prod -f prod.Dockerfile .
# RUN CONTAINER: docker run -p 443:443 -p 80:80 -d --restart always my-personal-website:prod
# SHELL: docker container run -it my-personal-website:prod sh

# Development steps:
#  1) run container 
#  2) make code changes
#  3) rebuild image and restart container

# build environment
FROM node:12.2.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build-prod

CMD ["node", "server.js", "443"]
