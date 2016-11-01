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
docker build --rm -t nektodev/abcourses-frontend:$VERSION -t nektodev/abcourses-frontend .
docker push nektodev/abcourses-frontend
