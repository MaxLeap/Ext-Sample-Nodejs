#!/bin/bash

# 设置 version, 默认为 latest
if [ $1 ]
then
    VERSION=$1
else
    VERSION="latest"
fi

docker push dockerhub.leapcloud.cn:5080/ext-sample/ext-sample-nodejs:${VERSION}