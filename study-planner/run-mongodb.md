# MongoDB Setup & Run Guide

## Step 1: Install MongoDB
Download and install MongoDB Community Server from: https://www.mongodb.com/try/download/community

## Step 2: Start MongoDB Service
```bash
# Windows (Run as Administrator)
net start MongoDB

# Or start manually
mongod --dbpath "C:\data\db"
```

## Step 3: Install Backend Dependencies
```bash
cd backend
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon
```

## Step 4: Start Backend with MongoDB
```bash
cd backend
node server-mongo.js
```

## Step 5: Test Authentication
**Postman Test:**
- POST `http://localhost:5000/api/auth/register`
- Body:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

## Step 6: Start Frontend
```bash
cd frontend
npm start
```

## Troubleshooting 401 Error:
1. Check browser console for token logs
2. Check backend console for auth logs
3. Make sure token is saved after login
4. Verify Authorization header is sent

## Quick Test Commands:
```bash
# Check if MongoDB is running
mongo --eval "db.adminCommand('ismaster')"

# Check server logs for token issues
# Look for: "Token added to request" and "User authenticated"
```