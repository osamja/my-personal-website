# This Node image builds our frontend assets into the build directory within the container which is served by nginx
# BUILD IMAGE: docker build -t my-personal-website:prod -f prod.Dockerfile .
# SHELL: docker container run -it my-personal-website:prod sh

# See readme.me for development steps

FROM node:18.15.0-alpine AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

COPY package.json /app
RUN npm install

RUN npm run build
