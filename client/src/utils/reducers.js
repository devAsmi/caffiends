import { useReducer } from "react";
import {
  ADD_ITEM,
  ADD_ITEM_CART,
  DELETE_ITEM,
  DELETE_ITEM_CART,
  POPULATE_CART,
  POPULATE_TO_CART,
  TOGGLE_CART_DRAWER,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case POPULATE_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.items],
      };

    case DELETE_ITEM:
      const itemToDelete = action.id;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== itemToDelete),
      };

    case ADD_ITEM_CART:
      const key = action.item._id;
      return {
        ...state,
        cart:
          // if the item is already in the cart, update the quantity for that specific item
          // else add new item with quantity of 1
          key in state.cart
            ? {
                ...state.cart,
                [key]: {
                  ...state.cart[key],
                  quantity: state.cart[key].quantity + 1,
                },
              }
            : { ...state.cart, [key]: { ...action.item, quantity: 1 } },
      };

    case POPULATE_TO_CART:
      return {
        ...state,
        cart: action.items.reduce((acc, item) => {
          acc[item._id] = item;
          return acc;
        }, {}),
      };

    case DELETE_ITEM_CART:
      delete state.cart[action.id];
      return {
        ...state,
        cart: { ...state.cart },
      };

    case TOGGLE_CART_DRAWER:
      return {
        ...state,
        showCartDrawer: !state.showCartDrawer,
      };
    default:
      return state;
  }
};

export function useItemReducer(initialState) {
  return useReducer(reducer, initialState);
}
