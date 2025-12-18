import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const req = await axios.post("http://localhost:8001/login", {
        email,
        password,
      });

      const { message, isLoggedIn } = req.data;

      if (isLoggedIn) {
        localStorage.setItem("isLogin", "true");
        alert(message);
        navigate("/");
        window.location.reload();
      }
    } catch (e) {
      console.error("Login error:", e);
      if (e.response) {
        alert(e.response.data.message || "Login Failed");
      } else if (e.request) {
        alert("Cannot connect to server. Make sure backend is running on port 8001");
      } else {
        alert("Login Failed: " + e.message);
      }
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        Create an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;