FROM debian:stretch-slim
RUN echo 'deb http://ftp.debian.org/debian stretch-backports main' >>/etc/apt/sources.list && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y nginx && \
    apt-get install -y python3-certbot-nginx -t stretch-backports

COPY sites-available/* /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/paraguide.uk /etc/nginx/sites-enabled/
COPY www/ /var/www/
COPY www/paraguide.uk/ /var/www/pilot.paraguide.uk

CMD ["nginx", "-g", "daemon off;"]

# Need to run certbot once?
#certbot --nginx -d paraguide.uk

