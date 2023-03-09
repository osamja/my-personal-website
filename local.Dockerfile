# https://mherman.org/blog/dockerizing-a-react-app/
# BUILD IMAGE: docker build -t my-personal-website:local -f local.Dockerfile .
# RUN CONTAINER: docker run -v ${PWD}:/app -p 3001:3000 --rm my-personal-website:local
# SHELL: docker container run -v ${PWD}:/app -it my-personal-website:local sh

# Development steps:
#   1) run container binded to port 3001
#   2) make changes to src/ directory + save changes
#   3) app will hot reload, test http://sammyjaved.com:3001 afterwards

# base image
FROM node:18.15.0-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start"]
