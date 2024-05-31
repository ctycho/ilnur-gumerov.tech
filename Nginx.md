* location of nginx config
```
nginx -t
```

* restart nginx
```
nginx -s reload
sudo systemctl restart nginx
```

* nginx start
```
sudo nginx
```

* check ports nginx uses
```
sudo netstat -pan | grep "nginx"
```

* test nginx config
```
sudo nginx -t
```

* make symbolic link
```
sudo ln -s /etc/nginx/sites-available/ilnur-gumeroc.tech /etc/nginx/sites-enabled/ 
```

* get ssl certificate
```
sudo certbot --nginx -d ilnur-gumerov.tech -d www.ilnur-gumerov.tech
```