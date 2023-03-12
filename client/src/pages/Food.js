import { useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import MenuItemSection from "../components/MenuItemSection";

import { QUERY_ITEMS_FOR_TYPE } from "../utils/queries";

export default function Food() {
  const { data, loading } = useQuery(QUERY_ITEMS_FOR_TYPE, {
    variables: {
      itemType: "Food",
    },
  });
  let foodItems;

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
    foodItems = [...data.itemsForType];
  }
  return <MenuItemSection name="Food Menu" items={foodItems} />;
}
