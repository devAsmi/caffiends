import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

import MenuItem from "../components/MenuItem";
import { QUERY_ITEMS } from "../utils/queries";
import MenuItemSection from "../components/MenuItemSection";

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
    <Flex direction="column" gap="8" padding="4">
      <Text fontSize="6xl">Menu</Text>
      <MenuItemSection name="Cold Beverages" items={coldBeverages} />
      <MenuItemSection name="Hot Beverages" items={hotBeverages} />
      <MenuItemSection name="Food" items={foodItems} />
    </Flex>
  );
}
