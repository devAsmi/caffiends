import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Flex, Link, Spinner, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

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
    coldBeverages = menuItems
      .filter((item) => item.itemType.name === "Cold Beverages")
      .slice(0, 3);
    hotBeverages = menuItems
      .filter((item) => item.itemType.name === "Hot Beverages")
      .slice(0, 3);
    foodItems = menuItems
      .filter((item) => item.itemType.name === "Food")
      .slice(0, 3);
  }

  return (
    <Flex direction="column" gap="8" padding="4" bgGradient='linear(to-r, teal.200, teal.400)'>
      <Text fontSize="6xl">Menu</Text>
      <Flex alignItems="center" gap="8">
        <MenuItemSection name="Cold Beverages" items={coldBeverages} />
        <Link as={ReactLink} to="/coldbev">
          View more..
        </Link>
      </Flex>
      <Flex alignItems="center" gap="8">
        <MenuItemSection name="Hot Beverages" items={hotBeverages} />
        <Link as={ReactLink} to="/hotbev">
          View more..
        </Link>
      </Flex>
      <Flex alignItems="center" gap="8">
        <MenuItemSection name="Food" items={foodItems} />
        <Link as={ReactLink} to="/food">
          View more..
        </Link>
      </Flex>
    </Flex>
  );
}
