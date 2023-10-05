import { createSlice } from "@reduxjs/toolkit";





createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItem(state,action){
            const id = action.payload;

            const existingItem = state.items.find(item=>item.id===id);

            if(existingItem.quantity!=1){
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice+existingItem.price;
                state.totalQuantity++;
            }
            else{
                existingItem.quantity-1;
            }

    }
,
    removeItem(state,action){
        const newItem = action.payload;

        const existingItem = state.items.find(item=>item.id===newItem.id);

        if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice+existingItem.price;
            state.totalQuantity++;
        }
        else{
            state.items.push({
                id :newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name
            });
        }

}

}})