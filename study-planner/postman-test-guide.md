# Postman Testing Guide

## 1. Test Server Connection
**GET** `http://localhost:5000/`
- Should return: `{"message": "Study Planner API is running!"}`

## 2. Test API Endpoint
**GET** `http://localhost:5000/api/test`
- Should return: `{"message": "API is working!", "timestamp": "..."}`

## 3. Register New User
**POST** `http://localhost:5000/api/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

**Expected Response:**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "Test User",
    "email": "test@example.com"
  }
}
```

## 4. Login User
**POST** `http://localhost:5000/api/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

## 5. Get Tasks (Protected Route)
**GET** `http://localhost:5000/api/tasks`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

## Common 404 Errors:
- Wrong URL (check spelling)
- Server not running on port 5000
- Missing `/api/` in the URL
- Wrong HTTP method (GET vs POST)

## Troubleshooting:
1. Make sure backend server is running: `cd backend && npm start`
2. Check server logs for errors
3. Verify MongoDB is running
4. Test basic connection first: `GET http://localhost:5000/`