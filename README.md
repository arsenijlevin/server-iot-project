## Description

Server-side application for IoT project.

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
# swagger location: http://localhost:3000/api
# available after server startup
$ npm run start

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Endpoints
### Send temperature and humidity to server
```bash
$ POST /temperature-and-humidity

# body
{
  "temperature": 10,
  "humidity": 10
}
```
