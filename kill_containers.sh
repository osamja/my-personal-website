#!/bin/bash

 # Stop / remove all of Docker containers:
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)


# Delete all containers
# docker rm $(docker ps -aq)
# Delete all untagged images
# docker rmi $(docker images -q --filter "dangling=true")
