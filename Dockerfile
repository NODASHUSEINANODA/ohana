FROM nginx:1.15.0

ENV TZ Asia/Tokyo

RUN apt-get update \
  && apt-get -qq -y install curl

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html
