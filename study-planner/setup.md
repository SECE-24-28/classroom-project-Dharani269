# Quick Setup Guide

## Step 1: Install Backend Dependencies
```bash
cd backend
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon
```

## Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install react react-dom axios react-scripts
```

## Step 3: Start Backend (Terminal 1)
```bash
cd backend
npm start
```

## Step 4: Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```

## Step 5: Test Authentication
1. Go to http://localhost:3000
2. Try creating a new account
3. Check browser console for any errors
4. Check backend terminal for logs

## Troubleshooting
- Make sure MongoDB is running
- Check if ports 3000 and 5000 are free
- Look at browser console and backend logs for errors