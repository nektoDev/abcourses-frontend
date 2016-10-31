# ABCourses frontend application
Author [Tsykin V.A. aka Nektodev](http://nektodev.ru)

## Description
Frontend application based on React.js for [ABCourses](http://english.nektodev.ru) project.
 
### Technology stack
- React.js
- npm
- babel
- webpack
- jsonrpc 2.0
- Docker

## Quickstart

1. `npm install` - build application
2. `npm run` - start application

Configuration depended on environment placed `./src/config`

Default output directory: `./dist` 

For building the docker image use `release.sh <patch | minor | major>`

Container should be run with ABCourses backend application (+ mongo) 
