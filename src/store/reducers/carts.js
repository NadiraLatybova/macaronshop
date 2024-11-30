import { createSlice } from "@reduxjs/toolkit";

const carts = createSlice({
    name: 'carts',
    initialState: {
        data: []
    },
    reducers: {
        addCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.data.find(item => item.id === itemId);
            if (existingItem) {
                existingItem.count += 1; // Increment count if the item is already in the cart
            } else {
                state.data.push({ id: itemId, count: 1 }); // Add new item to the cart
            }
        },
        removeCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.data.find(item => item.id === itemId);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1; // Decrement count if more than 1
                } else {
                    state.data = state.data.filter(item => item.id !== itemId); // Remove item if count is 1
                }
            }
        }
    }
});

export const { addCart, removeCart } = carts.actions;
export default carts.reducer;