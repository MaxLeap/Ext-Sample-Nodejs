#!/bin/bash

# 设置 Tag, 默认为 latest
if [ $1 ]
then
    Tag=$1
else
    Tag="latest"
fi

docker build -t 10.10.10.160:8010/uxteam/ext-sample-nodejs:${Tag} ..