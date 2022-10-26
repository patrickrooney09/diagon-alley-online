import { createSlice } from "@reduxjs/toolkit";

//initial state
//if there are cartItems existing in localStorage, we get it by the key, which is 'cartItems' and JSON parse it.
// If it doesn't exist, we set it to empty array
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

//cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //we use findIndex to determine if we already have that item in the cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //if it exists, we increment the cart quantity
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++;
      } else {
        //if it doesn't exist, we add the temporary item to the cart with quantity of 1
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      //add our cartItems from state to our localStorage in stringified from
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
