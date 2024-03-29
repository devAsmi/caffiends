// import { Flex } from "@chakra-ui/react";
// import React from "react";

// export default function Footer() {
//   return <Flex height="100px">Footer</Flex>;
// }

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
    bgGradient='linear(to-r, teal.200, teal.400)'
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
        <Text>Take a sip leave a tip!</Text>
        </Stack>
        <Text>© 2023 Caffiends. All rights reserved</Text>
      </Container>
    </Box>
  );
}
