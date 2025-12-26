# Study Planner - MERN Stack Project

A full-stack web application for managing study tasks and schedules.

## 🚀 Technology Stack

- **Frontend:** React.js (JSX)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **API Testing:** Postman

## 📁 Project Structure

```
study-planner/
│
├── backend/
│   ├── server.js              # Main server file
│   ├── models/Study.js        # MongoDB schema
│   ├── routes/studyRoutes.js  # API routes
│   ├── controllers/studyController.js # Business logic
│   ├── package.json
│   └── .env                   # Environment variables
│
└── frontend/
    ├── public/index.html      # HTML template
    ├── src/
    │   ├── App.jsx           # Main React component
    │   ├── index.js          # React entry point
    │   ├── components/
    │   │   ├── AddTask.jsx   # Add task form
    │   │   └── TaskList.jsx  # Display tasks
    │   └── services/api.js   # API calls
    └── package.json
```

## ✨ Features

- ✅ User Registration & Login
- ✅ User-specific task management
- ✅ Add study tasks
- ✅ View all tasks
- ✅ Update tasks
- ✅ Delete tasks
- ✅ Mark tasks as Completed/Pending
- ✅ Priority levels (High/Medium/Low)
- ✅ Date and time scheduling
- ✅ Secure authentication with JWT

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/studyplanner
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the server:
   ```bash
   npm start
   # or for development
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Tasks (Protected Routes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get user's tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## 📱 Usage

1. Start MongoDB service
2. Run backend server (port 5000)
3. Run frontend app (port 3000)
4. Open http://localhost:3000 in browser

## 🧪 Testing with Postman

Import the provided Postman collection to test all API endpoints.

## 📝 Task Schema

```javascript
{
  subjectName: String (required),
  topic: String (required),
  studyDate: Date (required),
  startTime: String (required),
  endTime: String (required),
  priority: String (High/Medium/Low),
  status: String (Pending/Completed)
}
```