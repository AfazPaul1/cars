import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        },
        addCost: (state, action) => {
            state.cost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCar, (state, action) => {
            state.name = ''
            state.cost=0
        })
    }

})

export const {addName, addCost} = formSlice.actions
export const formReducer  = formSlice.reducer 