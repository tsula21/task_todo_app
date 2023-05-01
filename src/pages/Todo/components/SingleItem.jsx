import React, { useContext } from "react";
//
import { UserContext } from "../../../UserContext";
import tick from "../../../assets/icons/tick.svg";
import bin from "../../../assets/icons/bin.svg";

const SingleItem = ({ item }) => {
  const { removeTodo, completeTodo } = useContext(UserContext);
  return (
    <div
      className={`singleitem ${item.complete ? "bg-[#ededed]" : "bg-[#000]"} `}
    >
      <p className="task">{item.task}</p>
      <span className="flex items-center">
        <div
          onClick={() => completeTodo(item.id)}
          className="singleitem_btns hover:bg-[#5EFC8D]"
        >
          <img src={tick} alt="complete" />
        </div>
        <div
          onClick={() => removeTodo(item.id)}
          className="singleitem_btns hover:bg-[#d82558]"
        >
          <img src={bin} alt="delete" />
        </div>
      </span>
    </div>
  );
};

export default SingleItem;
