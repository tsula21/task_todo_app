import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

const InputField = () => {
  const { handleCklick, input, setInput } = useContext(UserContext);
  return (
    <div className="mb-[51px] flex h-[76px]">
      <input
        className="w-full rounded-s-[4px] pl-[24px] outline-none text-[#000] text-[22px] font-[poppins-light] bg-[#E6EBFF]"
        type="text"
        placeholder="my task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => handleCklick()}
        className="bg-[#5EFC8D] rounded-e-[4px] active:bg-[#4a4a4a] w-[108px] text-[32px] text-black hover:bg-[black] hover:text-[#fff] transition-colors font-[poppins-light]"
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
