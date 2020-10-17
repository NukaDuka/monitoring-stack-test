FROM redis

RUN apt-get update

RUN redis-cli replicaof redis-app_master_1 6379

CMD redis-server
