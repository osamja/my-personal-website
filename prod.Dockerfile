# This Node image builds our frontend assets into the build directory within the container which is served by nginx
# BUILD IMAGE: docker build -t my-personal-website:prod -f prod.Dockerfile .
# RUN IMAGE: docker container run -p 8123:80 my-personal-website:prod
# SHELL: docker container run -it my-personal-website:prod sh

# See readme.me for development steps

# docker exec -it d79dcbf428d8 sh

# Multi-stage build: https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets


# Stage 1) Node image for building frontend assets
FROM node:18.15.0-alpine AS builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install && npm run build
# RUN mkdir /app/build
# COPY Config/index.html /app/build

# Stage 2) nginx stage to serve frontend assets
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .

# Override the default nginx config with our config
COPY Config/nginx.conf /etc/nginx/nginx.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

