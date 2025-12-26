import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styles/AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-header">
        <h1 className="auth-title">
          📚 Study Planner
        </h1>
        <p className="auth-subtitle">
          Organize your study schedule efficiently
        </p>
      </div>

      {isLogin ? (
        <Login onSwitchToSignup={() => setIsLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default AuthPage;