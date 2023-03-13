import React from "react";

export default function CartItem({ item }) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.quantity}</p>
    </div>
  );
}
