# User Registration Endpoint

## Description

Allows new users to register and create an account. Returns a JWT for authentication and the user object upon successful registration.

## HTTP Method

`POST`

## Endpoint URL

`/api/auth/register`

## Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## 201 Created

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ0YWYxMjM0Z...",
  "user": {
    "_id": "6444YWYxMjM0Z...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## 400 Bad Request

```json
{
  "errors": [
    {
      "type": "field",
      "value": "",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    },
    {
      "type": "field",
      "value": "Jo",
      "msg": "First name must be atleast 3 characters long",
      "path": "fullname.firstname",
      "location": "body"
    },
    {
      "type": "field",
      "value": "12345",
      "msg": "Password must be atleast 6 characters long",
      "path": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint

## Description

Allows existing users to log in to their account. Returns a JWT for authentication and the user object upon successful login.

## HTTP Method

`POST`

## Endpoint URL

`/api/auth/login`

## Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## 200 OK

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ0YWYxMjM0Z...",
  "user": {
    "_id": "6444YWYxMjM0Z...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## 400 Bad Request

```json
{
  "errors": [
    {
      "type": "field",
      "value": "",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    },
    {
      "type": "field",
      "value": "12345",
      "msg": "Password must be atleast 6 characters long",
      "path": "password",
      "location": "body"
    }
  ]
}
```
