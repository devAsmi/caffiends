import React from "react";

export default function MenuItem({ item }) {
  return (
    <div className="item-container">
      <div className="item-image">
        <img
          src={item.image}
          alt={`${item.name}-image`}
          height="200px"
          width={"200"}
        />
      </div>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div className="item-price-container">
        <span>{item.price}</span>
        <span>{item.points}</span>
      </div>
      <button>Add Item</button>
    </div>
  );
}
