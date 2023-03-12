import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";

import MenuItem from "../components/MenuItem";
import { QUERY_ITEMS } from "../utils/queries";

export default function MenuPage() {
  const { data, loading } = useQuery(QUERY_ITEMS);
  let menuItems = [];
  let coldBeverages = [];
  let hotBeverages = [];
  let foodItems = [];

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (data) {
    menuItems = [...data.items];
    coldBeverages = menuItems.filter(
      (item) => item.itemType.name === "Cold Beverages"
    );
    hotBeverages = menuItems.filter(
      (item) => item.itemType.name === "Hot Beverages"
    );
    foodItems = menuItems.filter((item) => item.itemType.name === "Food");
    console.log(menuItems);
    console.log(coldBeverages);
  }

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
