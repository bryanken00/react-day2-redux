import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    operator: "",
    sum: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1
        },
        dencrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
            state.sum = 0
        },
        incrementByAmount: (state, action) => {
            if(state.count == 0){
                state.count = action.payload
            }else{
                state.count += action.payload
            }
        },
        storeOperator: (state, action) => {
            state.operator = action.payload
        },
        computeValue: (state, action) => {
            state.sum = action.payload
        }
    }
})

export const { increment, dencrement, reset, incrementByAmount, storeOperator, computeValue } = counterSlice.actions;

export default counterSlice.reducer;