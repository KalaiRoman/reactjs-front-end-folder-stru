import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../configureActions/ConfigureActions";

const Store=configureStore({
    reducer:rootReducer
})

export default Store;