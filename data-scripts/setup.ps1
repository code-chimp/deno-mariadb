#!/usr/bin/env pwsh

docker run --name deno_dev `
    -p 3310:3306 `
    -e "MYSQL_ROOT_PASSWORD=P@ssw0rd" `
    -e "MYSQL_USER=music_admin" `
    -e "MYSQL_PASSWORD=S00p3r_S3kr1t" `
    -e "MYSQL_DATABASE=music" `
    -d mariadb:10.4
