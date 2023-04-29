import React from "react";
import Navbar from "./components/Navbar";
import ApplicationTitle from "../../components/ApplicationTitle";
import InputField from "./components/InputField";

const Todo = () => {
  return (
    <div className="bg-[#292c33] min-h-screen">
      <Navbar />
      <ApplicationTitle
        className="text-[42px] text-[#000] font-[poppins-semi] text-center mt-[35px]"
        Text="Add Your Daily Tasks"
      />
      <InputField />
    </div>
  );
};

export default Todo;
