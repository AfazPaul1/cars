import { configureStore } from "@reduxjs/toolkit";
import { formReducer, addName, addCost } from "./slices/formSlice";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/CarsSlice";

const store = configureStore({
   reducer: {
    form: formReducer,
    cars: carsReducer
   }
})

export {store, addName, addCost, changeSearchTerm, addCar, removeCar}
