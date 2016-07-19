"use strict";

import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

/* createCourse action */
export function loadCoursesSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS , courses: courses };
}

export function loadCourses() {
    // this dispatch wrapper will be in every thunk
    return function(dispatch) {
        CourseApi.getAllCourses()
          .then((courses) => {
            dispatch(loadCoursesSucess(courses));
          })
          .catch((error) => {
            throw(error);
          });
    };
}
