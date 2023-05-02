import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useFormik } from "formik";
//
import { basicSchema } from "./components/validation/Validation";
import Landing from "./pages/Landing/Landing";
import AuthForm from "./pages/Form/AuthForm";
import Todo from "./pages/Todo/Todo";

// LocalStorage
const photoLocal = JSON.parse(localStorage.getItem("photo") || "[]");
const nameLocal = JSON.parse(localStorage.getItem("name") || "[]");
const nameTodos = JSON.parse(localStorage.getItem("todo") || "[]");
const isUser = JSON.parse(localStorage.getItem("user") || false);

function App() {
  const [photo, setPhoto] = useState(photoLocal);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(nameTodos);
  const [isRegistered, setIsRegistered] = useState(isUser);

  const formik = useFormik({
    initialValues: {
      name: nameLocal,
    },
    validationSchema: basicSchema,
  });

  const addTodo = () => {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completeTodo = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
    console.log("complete");
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const clearUser = () => {
    formik.setFieldValue("name", "");
    setPhoto([]);
    setIsRegistered(false);
    setTodoList([]);
  };

  useEffect(() => {
    localStorage.setItem("photo", JSON.stringify(photo));
    localStorage.setItem("name", JSON.stringify(formik.values.name));
    localStorage.setItem("todo", JSON.stringify(todoList));
    localStorage.setItem("user", JSON.stringify(isRegistered));
  }, [photo, formik.values.name, todoList, isRegistered]);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_container">
          <UserContext.Provider
            value={{
              photo,
              setPhoto,
              formik,
              addTodo,
              input,
              setInput,
              todoList,
              setTodoList,
              removeTodo,
              completeTodo,
              handleKeyPress,
              isRegistered,
              setIsRegistered,
              clearUser,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route
                path="*"
                element={
                  <div className="text-[40px] text-[green]">No found</div>
                }
              />
              {/* Redirect registered user */}
              {isRegistered ? (
                <Route path="/AuthForm" element={<Navigate to="/Todo" />} />
              ) : (
                <Route path="/AuthForm" element={<AuthForm />} />
              )}
              {isRegistered ? (
                <Route path="/Todo" element={<Todo />} />
              ) : (
                <Route path="/Todo" element={<Navigate to="/AuthForm" />} />
              )}
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
