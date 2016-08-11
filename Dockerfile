FROM nginx

COPY ./dist/ /usr/share/nginx/html

WORKDIR /var/www
EXPOSE 80
