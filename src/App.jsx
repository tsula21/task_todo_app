import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Landing />
      </div>
    </div>
  );
}

export default App;
