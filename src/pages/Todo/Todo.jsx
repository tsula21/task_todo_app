import React, { useContext } from "react";
//
import { UserContext } from "../../UserContext";
import Navbar from "./components/Navbar";
import ApplicationTitle from "../../components/ApplicationTitle";
import InputField from "./components/InputField";
import SingleItem from "./components/SingleItem";
import "./Todo.scss";

const Todo = () => {
  const { todoList } = useContext(UserContext);
  return (
    <div className="Todo">
      <Navbar />
      <ApplicationTitle className="todo_title" Text="Add Your Daily Tasks" />
      <section>
        <InputField />
        <div className="todolist">
          {todoList &&
            todoList.map((item) => {
              return <SingleItem key={item.id} item={item} />;
            })}
          {todoList.length == 0 && (
            <h2 className="text-[24px] text-[#000] font-[poppins-medium] text-center mt-[35px]">
              Your To Do is empty
            </h2>
          )}
        </div>
      </section>
    </div>
  );
};

export default Todo;
