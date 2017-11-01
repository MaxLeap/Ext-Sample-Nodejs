#!/bin/bash

# 设置 version, 默认为 latest
if [ $1 ]
then
    VERSION=$1
else
    VERSION="latest"
fi

docker push 10.10.10.160:8010/uxteam/ext-sample-nodejs:${VERSION}