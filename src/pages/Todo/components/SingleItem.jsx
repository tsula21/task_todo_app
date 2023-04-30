import React, { useContext } from "react";
//
import { UserContext } from "../../../UserContext";
import tick from "../../../assets/icons/tick.svg";
import bin from "../../../assets/icons/bin.svg";

const SingleItem = ({ item }) => {
  const { removeTodo, completeTodo } = useContext(UserContext);
  return (
    <div
      className={`flex items-center justify-between pl-[24px] mb-[16px] min-h-[54px]  w-full rounded-[4px] hover:scale-[1.01] transition-transform ${
        item.complete ? "#ededed" : "bg-[#000]"
      } text-[#fff] text-[22px] font-[poppins-light]`}
    >
      <p className="text-[22px] text-[#fff] py-[11.5px]">{item.task}</p>
      <span className="flex items-center ">
        <div
          onClick={() => completeTodo(item.id)}
          className="rounded-[4px] cursor-pointer h-[54px] w-[54px] flex items-center justify-center transition-colors hover:bg-[#5EFC8D]"
        >
          <img src={tick} alt="complete" />
        </div>
        <div
          onClick={() => removeTodo(item.id)}
          className="rounded-[4px] cursor-pointer h-[54px] w-[54px] flex items-center justify-center transition-colors hover:bg-[#d82558]"
        >
          <img src={bin} alt="delete" />
        </div>
      </span>
    </div>
  );
};

export default SingleItem;
