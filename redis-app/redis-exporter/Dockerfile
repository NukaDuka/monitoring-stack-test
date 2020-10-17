




FROM ubuntu

RUN apt-get update 

COPY ./data /opt/exporter

CMD opt/exporter/redis_exporter --debug --redis.addr redis-app_master_1
