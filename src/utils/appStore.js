import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"; // Assuming you have a movieSlice.js for movie-related state management

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the reducer from userSlice.js
    movies: movieReducer, // Assuming you have a movieReducer in movieSlice.js
  },
});

export default appStore;
