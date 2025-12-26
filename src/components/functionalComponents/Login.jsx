import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      alert('Login successful!');
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try signing up.');
      setTimeout(() => navigate('/signup'), 2000);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;