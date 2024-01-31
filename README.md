## Description

Test task from Dmytro Burkovsky. Code example to create REST API server using NestJS, Mysql, Sequelize

## Requirements

NodeJS > 18.0
Mysql

## Installation

```bash
$ git clone git@github.com:Khors/for-fans-crm.git
$ cd for-fans-crm
$ npm install
```
Create database using MySQL server

Rename file *.example.env* to *.env* and set Your own credentials

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

### Registartion
```
# POST request to 
http://localhost:3000/v1/user
```
{
  "email": "john_doe@email.ua",
  "firstName": "John",
  "lastName": "Doe"
}
!!! email field is required

### Authorization and getting JWT

```
#POST to 
http://localhost:3000/v1/auth
```
{
    "email": "john_doe@email.ua"
}
!!! Copy token value out of obtained object

### Getting user list or user information

```
#GET to
http://localhost:3000/v1/user
or
http://localhost:3000/v1/user/{:id}
```
!!! Use header *Authorization* with token to get access to this endpoints


## Stay in touch

- Author - [Dmytro Burkovsky]

## License

Nest is [MIT licensed](LICENSE).
