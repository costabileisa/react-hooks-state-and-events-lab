import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(true);
  const className = inCart ? "" : "in-cart";

  function handleClick() {
    setInCart(() => inCart = !inCart)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "add" : "remove"}>{ inCart ? "Add to Cart" : "Remove from Cart" }</button>
    </li>
  );
}

export default Item;
