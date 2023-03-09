# This Node image builds our frontend assets into the ./build directory which is then served by nginx
# BUILD IMAGE: docker build -t my-personal-website:prod -f prod.Dockerfile .

FROM node:18.15.0-alpine AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

COPY package.json /app
RUN npm install

RUN npm run build
