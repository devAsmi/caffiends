import { useReducer } from "react";
import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_CART_DRAWER,
  UPDATE_QUANTITY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case DELETE_ITEM:
      const itemToDelete = action.id;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== itemToDelete),
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
