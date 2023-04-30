import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useFormik } from "formik";
//
import { basicSchema } from "./components/validation/Validation";
import Landing from "./pages/Landing/Landing";
import AuthForm from "./pages/Form/AuthForm";
import Todo from "./pages/Todo/Todo";

function App() {
  const [photo, setPhoto] = useState([]);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: basicSchema,
  });

  const handleCklick = () => {
    const id = todoList.length + 1;
    if (input) {
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
        },
      ]);
      setInput("");
    } else {
      alert("fill field");
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_container">
          <UserContext.Provider
            value={{
              photo,
              setPhoto,
              formik,
              handleCklick,
              input,
              setInput,
              todoList,
              setTodoList,
            }}
          >
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/AuthForm" element={<AuthForm />} />
              <Route path="/Todo" element={<Todo />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
