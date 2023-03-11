import React from "react";
import MenuItem from "../components/MenuItem";

const mockMenu = [
  {
    name: "Ice coffee",
    description: "This is a cold fantastic ice coffee",
    price: 2.99,
    points: 240,
    image:
      "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    itemType: "ColdBev",
  },
  {
    name: "Ice macchicato",
    description: "This is a cold fantastic iced macchiato",
    price: 3.99,
    points: 340,
    image: "https://unsplash.com/photos/QxfXv6v22lA",
    itemType: "ColdBev",
  },
  
  {
    name: "Ice coffee",
    description: "This is a cold fantastic ice coffee",
    price: 2.99,
    points: 240,
    image:
      "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    itemType: "ColdBev",
  },
  
  {
    name: "Ice coffee",
    description: "This is a cold fantastic ice coffee",
    price: 2.99,
    points: 240,
    image:
      "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    itemType: "ColdBev",
  },
  {
    name: "Hot coffee",
    description: "This is a hot fantastic coffee",
    price: 2.99,
    points: 240,
    image:
      "https://images.unsplash.com/photo-1547583881-58685cb3210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    itemType: "HotBev",
  },
  {
    name: "Sandwich",
    description: "Sandwich with turkey and cheese",
    price: 8.99,
    points: 700,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
    itemType: "Food",
  },
];

export default function MenuPage() {
  const coldBeverages = mockMenu.filter((item) => item.itemType === "ColdBev");
  const hotBeverages = mockMenu.filter((item) => item.itemType === "HotBev");
  const foodItems = mockMenu.filter((item) => item.itemType === "Food");

  return (
    <div>
      <h2>Menu</h2>
      <div>
        <h3>Cold Beverages</h3>
        <div className="menu-item-container">
          {coldBeverages.map((coldBeverage) => (
            <MenuItem key={coldBeverage.name} item={coldBeverage} />
          ))}
        </div>
      </div>
      <div>
        <h3>Hot Beverages</h3>
        <div className="menu-item-container">
          {hotBeverages.map((hotBeverage) => (
            <MenuItem key={hotBeverage.name} item={hotBeverage} />
          ))}
        </div>
      </div>
      <div>
        <h3>Food</h3>
        <div className="menu-item-container">
          {foodItems.map((food) => (
            <MenuItem key={food.name} item={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
