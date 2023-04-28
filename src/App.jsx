import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import AuthForm from "./pages/Form/AuthForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/AuthForm" element={<AuthForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
