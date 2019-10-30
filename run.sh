#!/bin/sh

#docker stop ipic-site && docker rm ipic-site
docker build -t ipic/site .
#docker run -d -p 3300:3300 --name ipic-site ipic/site
rm -rf node_modules
docker-compose up -d
npm install
