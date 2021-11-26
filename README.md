  <h1 align="center"> 
    Api Players
  </h1>

  <p align="center">
    Api that exposes a list of player elements extracted from a moongoose database.
  </p>
**Deploy in heroku:** https://playersapinest.herokuapp.com/api/v1/

## Description

It was built with the nest framework [Nest](https://github.com/nestjs/nest).

## Instructions to execute:

- Clone this repository.
- Go to the root directory of the project.
- Create file .env, you can follow the example of the .envExample file in the root of proyect.
- Install the dependencies with this command: `npm install` or `yarn install`.
- Execute the project: `npm start`.

## Project architecture
- **configs**: Contains constants for the definition of the api version and the prefix used in the urls
- **database**: Contains constants the connection string used to connect with mongoose.
- **commons**: Contains classes that are shared by system modules.
  - **pagination:**  Dto related to pagination.
- **modules**: Contains the modules that make up the system
  - **players**: Module associated with the players entity
    - **controllers**: Controllers associated with the players entity
    - **schemas**: Contains the schema player
    - **services**: Contains the services associated with the players entity
    
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
This project has unit tests, which you can run with the command:
# unit tests
$ npm run test

This project has Tests E2E, which you can run with the command:
# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Api Documentation

When running the project you can verify the api documentation through [Swagger](https://swagger.io/) using the url: YourUrl/api/.
You can test it in this deployment: [https://playersapinest.herokuapp.com/api/](https://playersapinest.herokuapp.com/api/)

## Postman

You can test in postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/15086964-34010f66-2f48-46e6-9733-bc16af3b8219?action=collection%2Ffork&collection-url=entityId%3D15086964-34010f66-2f48-46e6-9733-bc16af3b8219%26entityType%3Dcollection%26workspaceId%3Da2f21d4d-41d4-4207-8df2-732535a2929a#?env%5BHeroku%5D=W3sia2V5IjoidXJsIiwidmFsdWUiOiJodHRwczovL3BsYXllcnNhcGluZXN0Lmhlcm9rdWFwcC5jb20iLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImFwaVZlcnNpb24iLCJ2YWx1ZSI6ImFwaS92MSIsImVuYWJsZWQiOnRydWV9XQ==)

## Docker

You can download the associated docker image in the Packages section in the right menu of github.

