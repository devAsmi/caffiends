import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItemSection({ name, items }) {
  return (
    <Box bgGradient="linear(to-r, teal.200, teal.400)" gap="8" padding="4">
      <Text fontSize="4xl" p="4">{name}</Text>
      <Flex gap="8" wrap="wrap">
        {items.map((items) => (
          <MenuItem key={items.name} item={items} />
        ))}
      </Flex>
    </Box>
  );
}
