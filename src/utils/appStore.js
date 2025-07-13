import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the reducer from userSlice.js
  },
});

export default appStore;
