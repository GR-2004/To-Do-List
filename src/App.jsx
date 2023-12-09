import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";

const App = () => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);

  const inputEvent = (e) => {
    setInput(e.target.value);
  };

  const addEvent = () => {
    setItemList((prevVal) => {
      return [...prevVal, input];
    });
    setInput("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={inputEvent}
            value={input}
          />
          <Button className="newBtn" onClick={addEvent}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {itemList.map((currVal, index) => {
              return <List key={index} id={index} text={currVal}/>;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
