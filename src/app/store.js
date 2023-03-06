import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "../features/Signin";
import InfoReducer from "../features/InfoSlice";
import SalesReducer from "../features/SalesSlice";

export const store = configureStore({
  reducer: {
    Signin: SigninReducer,
    Info: InfoReducer,
    Sales: SalesReducer,
  },
});
