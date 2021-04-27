import { useState } from "react";
import axios from "axios";

const RegisterForm = ({ setGoResister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clinet = axios.create({
    headers: {
      "PRIVATE-KEY": process.env.REACT_APP_PRIVATE_KEY,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await clinet.post("https://api.chatengine.io/users/", {
        username,
        secret: password,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
      setGoResister(false);
    } catch (err) {}
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input register"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input register"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Craete Account</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default RegisterForm;
