"use client";
import { SingleCourse } from "@/app/interfaces";
import { courses } from "@/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: courses,
  COURSE_PER_PAGE: 6,
  currentPage: 0,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    moveToNextPage: (state) => {
      const pagesNum = Math.ceil(state.courses.length / state.COURSE_PER_PAGE);
      if (state.currentPage < pagesNum - 1) state.currentPage++;
    },
    moveToPrevPage: (state) => {
      if (state.currentPage > 0) state.currentPage--;
    },
    moveToSpecificPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectCourseById = (state: any, id: number) =>
  state.courses.courses.find((course: SingleCourse) => course.id === id);

export const { moveToNextPage, moveToPrevPage, moveToSpecificPage } =
  coursesSlice.actions;
export default coursesSlice.reducer;
