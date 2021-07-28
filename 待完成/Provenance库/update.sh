#!/usr/bin/env sh

rm -rf update

mkdir update

sshpass -p "tty@041639" scp  pkg@10.167.2.15:/data4/pkg/package/nifi/1.11.4/develop/nifi.zip ./update/

cd ./update

unzip nifi.zip

rm -rf ../nifi-1.11.4/lib/*

cp -r ./lib/* ../nifi-1.11.4/lib/

cd ..

rm -rf ./update

./nifi-1.11.4/bin/nifi.sh restart

tailf ./nifi-1.11.4/logs/nifi-app.log
