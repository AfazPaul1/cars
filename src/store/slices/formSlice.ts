import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    name: string,
    cost: number
}
const initialState: FormState = {
    name: "",
    cost:0
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        addCost: (state, action: PayloadAction<number>) => {
            state.cost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCar, (state) => {
            state.name = ''
            state.cost=0
        })
    }

})

export const {addName, addCost} = formSlice.actions
export const formReducer  = formSlice.reducer 