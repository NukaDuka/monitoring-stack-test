# A small monitoring stack experiment

This stack uses 3 Redis instances, out of which 2 are replicas of 1 master instance. The Redis instance was populated with sample data from an insurance company to test its data ingestion pipeline using Redis-cli. To monitor the app, we use  Prometheus and grafana. To stress-test Redis and see the changes on grafana, we run the python script random_keys.py, which randomly inserts and deletes keys on the Redis instance.
