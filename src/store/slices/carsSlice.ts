import { createSlice, nanoid  } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        carsList:[]
    },
    reducers: {
        changeSearchTerm: (state, action) => {
          state.searchTerm = action.payload;  
        },
        addCar: (state, action) => {
            state.carsList.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })    
        },
        removeCar: (state, action) => {
            state.carsList = state.carsList.filter((car) => {
                return car.id !== action.payload 
            })
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer