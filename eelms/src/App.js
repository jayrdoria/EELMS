import React from "react";
import "./App.css";
import Login from "./components/Login"; // Import the Login component

function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-gray-100">
      <main className="w-full max-w-md">
        <Login /> {/* Use the Login component here */}
      </main>
    </div>
  );
}

export default App;
