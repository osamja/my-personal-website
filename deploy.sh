#!/usr/bin/env bash

# Import environment variables
. .env

echo $environment;

if [ "$environment" == "development" ]; then
	npm run build && sudo nohup node server.js 8001 &
elif [ "$environment" == "staging" ]; then
	npm run build && sudo nohup node server.js 8000 &
elif [ "$environment" == "production" ]; then
	npm run build && sudo nohup node server.js 443 &
else
        echo "The .env file does not exist.";
	exit;
fi

