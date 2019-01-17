FROM debian:stretch-slim
RUN apt-get update && apt-get upgrade -y && apt-get install -y nginx

COPY sites-available/vhosts /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/vhosts /etc/nginx/sites-enabled/
COPY www/ /var/www/
COPY www/paraguide.uk/ /var/www/paul.paulcager.org/
