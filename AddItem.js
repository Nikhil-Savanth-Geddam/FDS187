// AddItem.js
import React, { useState, useContext } from "react";
import ListContext from "./ListContext";

const AddItem = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(ListContext);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_ITEM", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default AddItem;
