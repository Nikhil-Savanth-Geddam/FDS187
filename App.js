// App.js
import React from "react";
import { ListProvider } from "./components/ListContext";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import "./components/styles.css"; // Import the CSS file

const App = () => {
  return (
    <ListProvider>
      <div className="container">
        <h2>Item Management App</h2>
        <AddItem />
        <ItemList />
      </div>
    </ListProvider>
  );
};

export default App;
