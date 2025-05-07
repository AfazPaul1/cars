import { configureStore } from "@reduxjs/toolkit";
import { formReducer, addName, addCost } from "./slices/formSlice";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/CarsSlice";

const store = configureStore({
   reducer: {
    form: formReducer,
    cars: carsReducer
   }
})
const startingState = store.getState()
console.log(JSON.stringify(startingState))
store.dispatch({
    type:'form/addName',
    payload:'Subaru'
})

store.dispatch({
    type:'form/addCost',
    payload:10000
})

store.dispatch({
    type:'cars/addCar',
    payload:{
        name: 'nissan',
        cost:7000
    }
})
store.dispatch({
    type:'cars/changeSearchTerm',
    payload: 'subaru'
})

//idk how to test remove

 console.log(store)

const finalState = store.getState()
 console.log(JSON.stringify(finalState))

export {store, addName, addCost, changeSearchTerm, addCar, removeCar}
