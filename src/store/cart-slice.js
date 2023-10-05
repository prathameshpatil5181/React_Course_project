import { createSlice } from "@reduxjs/toolkit";





createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0,
    },
    reducers:{
        addItem(item){
            state.items.push(item);
            state.totalQuantity++;
            state.totalAmount =+ state.totalAmount
        }
    }

})