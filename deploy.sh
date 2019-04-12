#!/usr/bin/env bash

# Import environment variables
. .env

echo $environment;

if [ "$environment" == "local" ]; then
	npm install && npm run build && sudo nohup node server.js 8002
elif [ "$environment" == "development" ]; then
	sudo fuser -n tcp -k 8001 && npm install && npm run build && sudo nohup node server.js 8001 &
elif [ "$environment" == "staging" ]; then
	npm install && npm run build && sudo nohup node server.js 8000 &
elif [ "$environment" == "production" ]; then
	npm install && npm run build && sudo nohup node server.js 443 &
else
        echo "The .env file does not exist.";
	exit;
fi

