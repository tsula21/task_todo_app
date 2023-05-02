import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
//
import { UserContext } from "../../UserContext";
import Navbar from "./components/Navbar";
import ApplicationTitle from "../../components/ApplicationTitle";
import InputField from "./components/InputField";
import SingleItem from "./components/SingleItem";
import "./Todo.scss";

const Todo = () => {
  const { todoList } = useContext(UserContext);

  let title = useRef(null);
  let todoContent = useRef(null);

  useEffect(() => {
    // GSAP;
    gsap.fromTo(
      title.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.4 }
    );
    gsap.fromTo(
      todoContent.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.8 }
    );
  }, []);
  return (
    <div className="Todo">
      <Navbar />
      <ApplicationTitle
        headerDetails={title}
        className="todo_title"
        Text="Add Your Daily Tasks"
      />
      <section ref={todoContent}>
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
