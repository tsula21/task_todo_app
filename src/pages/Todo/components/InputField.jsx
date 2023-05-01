import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

const InputField = () => {
  const { addTodo, input, setInput, handleKeyPress } = useContext(UserContext);
  return (
    <div className="input_field">
      <input
        type="text"
        placeholder="my task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
};

export default InputField;
