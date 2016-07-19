"use strict";

import * as types from "../actions/actionTypes";

// takes current state and returns new state
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
          return action.courses;

        default:
          return state;
    }
}
