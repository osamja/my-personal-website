# https://mherman.org/blog/dockerizing-a-react-app/

# BUILD IMAGE: docker build -t my-personal-website:dev -f dev.Dockerfile .
# RUN CONTAINER: docker run -v ${PWD}:/app -p 8080:8080 --rm my-personal-website:dev
# SHELL: docker container run -v ${PWD}:/app -it my-personal-website:dev sh

# Development steps:
#  1) run container 
#  2) make code changes
#  3) if changes are to src/, run `npm run build-dev`
#   - the container runs node server.js 8080 on the build/ directory 
#   - thus this just refreshes the build directory
#  4) if changes are to server.js, restart container
#   - the container runs server.js so it will need to be restarted to pick up this change

# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

CMD ["node", "server.js", "8080"]
