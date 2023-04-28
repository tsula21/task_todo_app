import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_container">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
