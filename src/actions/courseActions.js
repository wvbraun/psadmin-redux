"use strict";

import * as types from "./actionTypes";

/* createCourse action */
export function createCourse(course) {
  return { type: types.CREATE_COURSE , course: course };
}
