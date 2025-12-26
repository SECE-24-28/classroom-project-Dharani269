import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPage from './components/AuthPage';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './styles/App.css';

const Dashboard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const { user, logout } = useAuth();

  const handleTaskAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            📚 Study Planner
          </h1>
          <p className="welcome-text">
            Welcome, {user?.name}!
          </p>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </header>

      <main>
        <AddTask onTaskAdded={handleTaskAdded} />
        <TaskList refreshTrigger={refreshTrigger} />
      </main>

      <footer className="app-footer">
        <p>Study Planner - MERN Stack Project</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Dashboard /> : <AuthPage />;
};

export default App;