import React from "react";
import Logo from "./assets/todo_logo.svg";
import ApplicationLogo from "./components/ApplicationLogo";
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
