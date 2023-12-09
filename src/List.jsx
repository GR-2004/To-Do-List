import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) => {

    const [line, setLine] = useState(false);

    const deleteEvent = () => {
        setLine(true);
    }

    return (
        <div className="todo_style">
            <span onClick={deleteEvent}> <DeleteIcon className="deleteIcon"/> </span>
            <li style={{textDecoration : line ? 'line-through' : 'none'}}> {props.text} </li>
        </div>
    )
}

export default List