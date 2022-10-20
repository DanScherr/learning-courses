FROM mysql:5.7

COPY schema.sql /docker-entrypoint-inidb.d/

# porta padrão do mysql
EXPOSE 3306

VOLUME ["/backup/"]