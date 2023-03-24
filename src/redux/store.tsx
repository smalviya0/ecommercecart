import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInSlice from "./logInSlice";
import signUpSlice from "./signUpSlice";
import DemoSlice from "./DemoSlice";
import cartReducer from './cartSlice';
const rootReducer = combineReducers({
  signup: signUpSlice,
  signin: logInSlice,
  posts: DemoSlice,
  cart: cartReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;





















