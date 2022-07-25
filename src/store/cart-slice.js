import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQauntity: 0,
  },
  reducers: {
    addItem(state, action) {
      state.totalQauntity++;
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      console.log(state);
      state.totalQauntity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      if (existingItem.quantity === 1) {
        console.log("if");
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        console.log("else");
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
