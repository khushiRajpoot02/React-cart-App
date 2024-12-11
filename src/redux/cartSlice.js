import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Cart items
  totalQuantity: 0, // Total number of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
        state.totalQuantity++;
      } else if (existingItem.quantity < 10) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity < 10) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
