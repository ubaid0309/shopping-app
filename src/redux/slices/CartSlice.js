import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice(({
    name: 'cart',
    initialState:{
        items: [],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter((item)=> {
                return item.id !== action.payload
            })               
        },
        clearCart:()=>{
    
        }
    }
}))

export const {addItem, removeItem,clearCart} = CartSlice.actions;
export default CartSlice.reducer;