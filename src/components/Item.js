import React, {useState} from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const appClass = isOn ? "in-cart" : ""
  const btnClass = isOn ? "remove" : "add"


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleClick}>{isOn ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
