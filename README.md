docker run -v /data/paul/music/:/var/www/home.paulcager.org/music:ro --restart=always  -p80:80 -p 443:443 -d home


docker exec -it inspiring_clarke certbot renew
