import React, { createContext, useContext } from "react";
import { useItemReducer } from "./reducers";

const ItemContext = createContext();
const { Provider } = ItemContext;

const CartProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useItemReducer({
    cartItems: [],
    cart: {},
    showCartDrawer: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCartItemContext = () => {
  return useContext(ItemContext);
};

export { CartProvider, useCartItemContext };
