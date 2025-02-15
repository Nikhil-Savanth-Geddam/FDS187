// ListContext.js
import React, { createContext, useReducer } from "react";

const ListContext = createContext();

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const ListProvider = ({ children }) => {
  const [list, dispatch] = useReducer(listReducer, []);

  return (
    <ListContext.Provider value={{ list, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
