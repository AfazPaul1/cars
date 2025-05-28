import { createSlice, nanoid  } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface Car {
  id: string;
  name: string;
  cost: number;
}

interface CarsState {
  searchTerm: string;
  carsList: Car[];
}

const initialState: CarsState = {
  searchTerm: '',
  carsList: [],
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        changeSearchTerm: (state, action: PayloadAction<string>) => {
          state.searchTerm = action.payload; 
        },
        addCar: (state, action: PayloadAction<{ name: string; cost: number }>) => {
            state.carsList.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })    
        },
        removeCar: (state, action: PayloadAction<string>) => {
            state.carsList = state.carsList.filter((car) => {
                return car.id !== action.payload 
            })
        }
    },
    
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer