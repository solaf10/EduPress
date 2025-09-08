"use client";
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../slices";
import authReducer from "../slices/Auth";

const store = configureStore({
  reducer: { courses: coursesReducer, auth: authReducer },
});
export default store;
