#!/usr/bin/env bash

# Import environment variables
. .env

echo $environment;


npm run build

if [ "$environment" == "staging" ]; then
	sudo nohup node server.js 8000 &
elif [ "$environment" == "production" ]; then
	sudo nohup node server.js 80 &
else
        echo "The .env file does not exist.";
	exit;
fi

