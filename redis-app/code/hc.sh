#!/bin/bash

response=$(redis-cli ping)
if [ $response = "PONG" ]
then
    exit 0
else
    exit 1
fi