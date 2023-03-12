import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItemSection({ name, items }) {
  return (
    <Box>
      <Text fontSize="4xl">{name}</Text>
      <Flex gap="8" wrap="wrap">
        {items.map((items) => (
          <MenuItem key={items.name} item={items} />
        ))}
      </Flex>
    </Box>
  );
}
