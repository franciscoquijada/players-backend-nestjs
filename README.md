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
## Postman

You can test in postman:

<div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-var-1="15086964-34010f66-2f48-46e6-9733-bc16af3b8219"
data-postman-collection-url="entityId=15086964-34010f66-2f48-46e6-9733-bc16af3b8219&entityType=collection&workspaceId=a2f21d4d-41d4-4207-8df2-732535a2929a"
data-postman-param="env%5BHeroku%5D=W3sia2V5IjoidXJsIiwidmFsdWUiOiJodHRwczovL3BsYXllcnNhcGluZXN0Lmhlcm9rdWFwcC5jb20iLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImFwaVZlcnNpb24iLCJ2YWx1ZSI6ImFwaS92MSIsImVuYWJsZWQiOnRydWV9XQ=="></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

## Docker

You can download the associated docker image in the Packages section in the right menu of github.

