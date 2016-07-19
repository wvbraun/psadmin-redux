"use strict";

import CourseApi from "../api/mockCourseApi";
import * as types from "./actionTypes";

/* createCourse action */
export function loadCoursesSucess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course: course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course: course };
}

export function loadCourses() {
    return (dispatch) => {
        CourseApi.getAllCourses()
          .then((courses) => {
            dispatch(loadCoursesSucess(courses));
          })
          .catch((error) => {
            throw(error);
          });
    };
}

export function saveCourse(course) {
  return (dispatch) => {
    return CourseApi.saveCourse(course)
      .then((savedCourse) => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                    dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw(error);
      });
  };
}
