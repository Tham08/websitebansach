
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:[],
    totalAmount:0,
    totalQuantity :0
}


const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
        const newItem = action.payload
        const existingItem = state.cartItem.find(
            (item)=>item.id === newItem.id
        )
        state.totalQuantity++
        if(!existingItem){
            state.cartItem.push({
                id:newItem.id,
                productName:newItem.productName,
                price:newItem.price,
                image:newItem.imgUrl,
                quantity:1,
                totalPrice: newItem.price
            })
        }
        else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        }
        state.totalAmount =state.cartItem.reduce((total,item)=>total + (Number(item.price)*Number(item.quantity)))
    },
    deleteItem:(state,action)=>{
    const id = action.payload
    const existingItem1 = state.cartItem.find(
        (item)=>item.id === id
    )
    state.totalQuantity++
    if(existingItem1){
        state.cartItem.filter(item=>item.id !== id);
        state.totalQuantity =state.totalQuantity-existingItem1.quantity
    }
    
    state.totalAmount =state.cartItem.reduce((total,item)=>total + Number(item.price)*Number(item.quantity))
    }
  }
});

export const cartActions = cartslice.actions

export default cartslice.reducer