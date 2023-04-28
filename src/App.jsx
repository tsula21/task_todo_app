import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
//
import Landing from "./pages/Landing/Landing";
import AuthForm from "./pages/Form/AuthForm";

function App() {
  const [photo, setPhoto] = useState([]);
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_container">
          <UserContext.Provider
            value={{
              photo,
              setPhoto,
              userName,
              setUserName,
            }}
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/AuthForm" element={<AuthForm />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
