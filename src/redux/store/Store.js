import rootReducers from "../configurreducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducers,
});

export default store;
