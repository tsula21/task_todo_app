import React, { useContext } from "react";
//
import { UserContext } from "../../../UserContext";
import tick from "../../../assets/icons/tick.svg";
import bin from "../../../assets/icons/bin.svg";

const SingleItem = ({ item }) => {
  const { removeTodo } = useContext(UserContext);
  return (
    <div className="flex items-center justify-between pl-[24px] mb-[16px] h-[54px] w-full rounded-[4px] bg-[#000] text-[#fff] text-[22px] font-[poppins-light]">
      <p className="text-[22px] text-[#fff] " onClick={() => console.log(item)}>
        {item.task}
      </p>
      <span className="flex items-center ">
        <div className="rounded-[4px] cursor-pointer h-[54px] w-[54px] flex items-center justify-center transition-colors hover:bg-[#5EFC8D]">
          <img src={tick} alt="complete" />
        </div>
        <div className="rounded-[4px] cursor-pointer h-[54px] w-[54px] flex items-center justify-center transition-colors hover:bg-[#d82558]">
          <img onClick={() => removeTodo(item.id)} src={bin} alt="delete" />
        </div>
      </span>
    </div>
  );
};

export default SingleItem;
