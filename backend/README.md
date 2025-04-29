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

# User Logout Endpoint

## Description

Invalidates the user's current authentication token. This implementation assumes a client-side approach where the token is discarded by the client. The server might implement additional logic (e.g., blacklisting tokens) for more robust logout functionality.

## HTTP Method

`POST`

## Endpoint URL

`/api/auth/logout`

## Request Headers

`Authorization: Bearer <JWT>` (The JWT to be invalidated)

## 200 OK

```json
{
  "message": "Logged out successfully"
}
```

## 401 Unauthorized

Returned if the provided JWT is invalid or missing.

```json
{
  "message": "Unauthorized"
}
```

---

# Get User Profile Endpoint

## Description

Retrieves the profile information of the authenticated user. Requires a valid JWT for authentication.

## HTTP Method

`GET`

## Endpoint URL

`/api/auth/profile`

## Request Headers

`Authorization: Bearer <JWT>` (The JWT of the user whose profile is being requested)

## Request Body

_(Empty)_ No request body is required.

## 200 OK

```json
{
  "_id": "6444YWYxMjM0Z...",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "createdAt": "2023-04-23T10:00:00.000Z",
  "updatedAt": "2023-04-23T10:30:00.000Z",
  "__v": 0
}
```

## 401 Unauthorized

Returned if the provided JWT is invalid or missing.

```json
{
  "message": "Unauthorized"
}
```
