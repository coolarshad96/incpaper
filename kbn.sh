#!/bin/bash

# docker pull docker.elastic.co/kibana/kibana:8.9.1
docker run --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.9.1
# docker run --name kib-01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.9.1