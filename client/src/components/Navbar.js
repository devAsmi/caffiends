import React, { useEffect } from "react";
import { POPULATE_TO_CART, TOGGLE_CART_DRAWER } from "../utils/actions";
import { useCartItemContext } from "../utils/GlobalState";
import { Link as ReactLink } from "react-router-dom";
import Auth from "../utils/Auth";
import {
  Box,
  Badge,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { idbPromise } from "../utils/helpers";
import Homepage from "../pages/Homepage";

function getTotalCartItems(cart) {
  let totalCartItems = 0;
  Object.values(cart).forEach((item) => {
    totalCartItems = totalCartItems + item.quantity;
  });
  return totalCartItems;
}

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [_, dispatch] = useCartItemContext();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  useEffect(() => {
    idbPromise("cart", "get").then((items) => {
      dispatch({
        type: POPULATE_TO_CART,
        items: items,
      });
    });
  }, []);

  return (
    <Box>
      <Flex
        bgGradient='white'
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        alignItems={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Heading
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            color={useColorModeValue("gray.800", "white")}
            size="xl"
          >
            <Link
              to="/"
              hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
              as={ReactLink}
            >
              Caffiends
            </Link>
          </Heading>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {Auth.loggedIn() ? (
            <>
          <Link>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#826e9b"}
              to="/logout"
              as={ReactLink}
              onClick={logout}
              _hover={{
                bg: "teal.300",
              }}
            >
              Logout
            </Button>
          </Link>
          </>
          ) : (
            <>
          <Link>
            <Button
              mt={3}
              fontSize={"sm"}
              fontWeight={500}
              variant={"link"}
              to="/login"
              as={ReactLink}
            >
              Sign In
            </Button>
          </Link>
          <Link>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#826e9b"}
              to="/registration"
              as={ReactLink}
              _hover={{
                bg: "teal.300",
              }}
            >
              Sign Up
            </Button>
          </Link>
          </>
          )}
        </Stack>
      </Flex>
      
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [state, dispatch] = useCartItemContext();
  const { cart } = state;

  function toggleDrawer() {
    dispatch({
      type: TOGGLE_CART_DRAWER,
    });
  }

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                as={ReactLink}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Link
        p={2}
        fontSize={"md"}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: linkHoverColor,
        }}
        as={ReactLink}
        onClick={toggleDrawer}
      >
        View cart{" "}
        <Badge fontSize="1em" colorScheme="teal" borderRadius={"50"}>
          {getTotalCartItems(cart)}
        </Badge>
      </Link>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      as={ReactLink}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "teal.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const [state] = useCartItemContext();
  const { cart } = state;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <HStack>
        <MobileNavItem key="Cart" label={"Cart"} href="cart" />
        <Badge fontSize="1em" colorScheme="teal" borderRadius={"50"}>
          {getTotalCartItems(cart)}
        </Badge>
      </HStack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={ReactLink}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} as={ReactLink} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Menu",
    href: "menu",
    children: [
      {
        label: "Hot Beverages",
        href: "hotbev",
      },
      {
        label: "Cold Beverages",
        href: "coldbev",
      },
      {
        label: "Food",
        href: "food",
      },
    ],
  },
  {
    label: "About Us",
    href: "about",
  },
  {
    label: "My Account",
    href: "user",
  },
];
