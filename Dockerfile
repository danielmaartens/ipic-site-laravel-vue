FROM php:7-fpm-alpine

RUN mkdir -p app
WORKDIR /app

RUN apk --update add wget \
  curl \
  git \
  grep \
  build-base \
  libmemcached-dev \
  libmcrypt-dev \
  libxml2-dev \
  imagemagick-dev \
  pcre-dev \
  libtool \
  make \
  autoconf \
  g++ \
  cyrus-sasl-dev \
  libgsasl-dev \
  supervisor \
  nodejs \
  npm \
  openssl \
  zip \
  unzip \
  git

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN echo "Installing dependencies and setting up app... Get some coffee, this may take a while..."
RUN echo "Installing PHP extensions..."
RUN docker-php-ext-install mbstring pdo pdo_mysql >/dev/null 2>&1
RUN rm /var/cache/apk/*

COPY . /app
COPY .env /app/.env

RUN composer install
RUN npm install

RUN npm run prod

EXPOSE 80
EXPOSE 8080

CMD php artisan serve --host=0.0.0.0 --port=80
