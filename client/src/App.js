import "./App.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import AboutUs from "../src/pages/AboutUs";
import Checkout from "../src/pages/Checkout";
import ColdBevs from "../src/pages/ColdBevs";
import Food from "../src/pages/Food";
import HotBevs from "../src/pages/HotBevs";
import MenuPage from "../src/pages/MenuPage";
import Registration from "./pages/Registration ";
import UserInfo from "../src/pages/UserInfo";
import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import { Flex } from "@chakra-ui/react";
import { CartProvider } from "./utils/GlobalState";
import CartDrawer from "./components/CartDrawer";
import Cart from "./components/Cart";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <CartProvider>
          <Flex direction="column" height="100%">
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/coldbev" element={<ColdBevs />} />
              <Route path="/food" element={<Food />} />
              <Route path="/hotbev" element={<HotBevs />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/user" element={<UserInfo />} />
            </Routes>
            <Footer />
            <CartDrawer />
          </Flex>
        </CartProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
