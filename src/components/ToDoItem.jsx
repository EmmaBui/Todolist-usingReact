import React, { useState } from "react";

function ToDoItem(props) {
  const [isClick, setClick] = useState(false);

  function handleClick() {
    setClick(prevState => {
      return !prevState;
    });
  }

  return (
    <li
      style={{ textDecoration: isClick && "line-through" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
