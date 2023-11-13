#!/bin/bash

# sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.15.0
#
# Copy the generated elastic password and enrollment token. 
# These credentials are only shown when you start Elasticsearch for the first time. You can regenerate the credentials using the following commands.
# docker exec -it es01 /usr/share/elasticsearch/bin/elasticsearch-reset-password 
# docker exec -it es01 /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana
# ***************************** password:  Q0+0h-hz1k75KVnV*gqC
# ***************************** enrolment_token: eyJ2ZXIiOiI4LjkuMSIsImFkciI6WyIxNzIuMTguMC4yOjkyMDAiXSwiZmdyIjoiYzlmNmVmNjQ4NTQ1NTFlNDM4MTBiOWUzZTg5MmNjMjczMTFiMjZkNzcwN2M0OWU2YjNkMGI0ODMxMTYxZjAyMCIsImtleSI6ImRod3ZiSW9CNWp5STVnN25oVjZHOnhVWkYzcFpUVDh5QVVmN3M5M181MlEifQ==
# Add more nodes
# Use an existing node to generate a enrollment token for the new node.
# docker exec -it es01 /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node

# Start a new Elasticsearch container. Include the enrollment token as an environment variable.
# docker run -e ENROLLMENT_TOKEN="<token>" --name es02 --net elastic -it -m 1GB docker.elastic.co/elasticsearch/elasticsearch:8.9.1

# Call the cat nodes API to verify the node was added to the cluster.
# curl --cacert http_ca.crt -u elastic:$ELASTIC_PASSWORD https://localhost:9200/_cat/nodes
docker network create elastic
# docker run --name es01 --net elastic -p 9200:9200 -e "discovery.type=single-node" -it -m 1GB docker.elastic.co/elasticsearch/elasticsearch:8.9.1
docker run --net elastic -p 9200:9200 -e "discovery.type=single-node" -it -m 1GB docker.elastic.co/elasticsearch/elasticsearch:8.9.1



# docker network rm elastic
# docker rm es-node01
# docker rm kib-01