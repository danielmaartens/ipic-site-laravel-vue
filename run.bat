git pull
docker stop ipic-site
docker rm ipic-site
docker build -t ipic/site .
docker run -d -p 3300:3300 --name ipic-site ipic/site
