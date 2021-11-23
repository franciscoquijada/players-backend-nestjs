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
- configs
- database
  - config
- modules 
  - players 
    - controllers
    - repositories
    - schemas
    - services
  - utils
    - pagination
    
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
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
