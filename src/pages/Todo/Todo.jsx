import React, { useContext } from "react";
//
import { UserContext } from "../../UserContext";
import Navbar from "./components/Navbar";
import ApplicationTitle from "../../components/ApplicationTitle";
import InputField from "./components/InputField";
import SingleItem from "./components/SingleItem";
import TodoLogo from "../../assets/todo.jpg";
import TodoLogo1 from "../../assets/todo1.png";

const Todo = () => {
  const { todoList } = useContext(UserContext);
  return (
    <div className="bg-[#292c33] min-h-screen">
      <Navbar />
      <ApplicationTitle
        className="text-[42px] text-[#000] font-[poppins-semi] text-center mt-[35px] mb-[27px]"
        Text="Add Your Daily Tasks"
      />
      <section className="w-[595px] mx-[auto]">
        <InputField />
        {todoList &&
          todoList.map((item) => {
            return <SingleItem key={item.id} item={item} />;
          })}
        {todoList.length == 0 && (
          <h2 className="text-[24px] text-[#000] font-[poppins-medium] text-center mt-[35px]">
            Your To Do is empty
          </h2>
        )}
      </section>
    </div>
  );
};

export default Todo;
