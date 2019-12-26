#!/usr/bin/env bash

# @deprecrated: This deployment process is now deprecated, see dockerfile for new instructions

# Import environment variables
. .env

echo $environment;

npm install && npm run build && sudo nohup node server.js 80

