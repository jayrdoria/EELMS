import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </div>
        {message && <div className="text-red-500 mt-2">{message}</div>}
      </form>
    </div>
  );
}

export default Login;
