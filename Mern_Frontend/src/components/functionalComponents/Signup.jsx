import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const req = await axios.post("http://localhost:8001/signup", {
        email,
        username,
        password,
      });

      const { Message, isSignup } = req.data;

      if (isSignup) {
        alert(Message);
        navigate("/login");
      }
    } catch (e) {
      console.error("Signup error:", e);
      if (e.response) {
        alert(e.response.data.message || "Signup Failed");
      } else if (e.request) {
        alert("Cannot connect to server. Make sure backend is running on port 8001");
      } else {
        alert("Signup Failed: " + e.message);
      }
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <br />
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already having an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;