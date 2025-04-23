Sure! Here's the complete `README.md` file in a single block for easy copy-pasting:

---

```markdown
# 🚀 User Authentication API

A simple backend API for user authentication built with Node.js, Express, MongoDB, and JWT. This project includes user registration with input validation, password hashing, and token-based authentication.

---

## 📌 Base URL
```

http://localhost:5000

```

---

## 📍 Endpoint: `POST /user/register`

This endpoint registers a new user.

### ✅ Description

- Validates incoming data using `express-validator`.
- Hashes the password securely using `bcrypt`.
- Saves the user to the MongoDB database.
- Returns a JWT token and user information (excluding the password).

---

### 🔐 Request Headers

```

Content-Type: application/json

````

---

### 📝 Request Body

| Field                 | Type   | Required | Description                                |
|----------------------|--------|----------|--------------------------------------------|
| `fullname.firstname` | String | ✅        | First name (min 3 characters)              |
| `fullname.lastname`  | String | ❌        | Last name (optional, min 3 characters)     |
| `email`              | String | ✅        | Must be a valid email                      |
| `password`           | String | ✅        | Must be at least 6 characters              |

#### 🧪 Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword"
}
````

---

### 🟢 Success Response

**Code:** `201 Created`

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "1234567890",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### 🔴 Error Responses

#### 400 Bad Request (Validation Errors)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### 500 Internal Server Error

```json
{
  "error": "Something went wrong. Please try again later."
}
```

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcrypt
- JWT
- express-validator

---

## 💡 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```
   DB_CONNECT=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## 🔐 Environment Variables

| Variable     | Required | Description                |
| ------------ | -------- | -------------------------- |
| `DB_CONNECT` | ✅       | MongoDB connection URI     |
| `JWT_SECRET` | ✅       | Secret key for signing JWT |

---

## 📂 Project Structure

```
/controllers
  └── user.controller.js
/models
  └── user.model.js
/services
  └── user.service.js
/routes
  └── user.route.js
/app.js
/server.js
```

---

## 📬 Author

Made by [Your Name] – [GitHub](https://github.com/your-username)

```

```
