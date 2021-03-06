import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [goRegister, setGoResister] = useState(false);

  if (goRegister) return <RegisterForm setGoResister={setGoResister} />;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": process.env.REACT_APP_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setGoResister(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <div align="center">
          <button className="link-button" onClick={() => setGoResister(true)}>
            go to register
          </button>
        </div>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
