#!/usr/bin/env bash
set -e

RELEASE=$1
if [ -z "$RELEASE" ]
  then
    RELEASE="minor"
fi
npm run dist
npm run release:$RELEASE
VERSION=`jq '.version' package.json | tr -d '"'`
echo $VERSION
docker build --rm -t nektodev/baskinov-frontend:$VERSION -t nektodev/baskinov-frontend .
docker push nektodev/baskinov-frontend
