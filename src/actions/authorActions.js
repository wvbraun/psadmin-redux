"use strict";

import AuthorApi from "../api/mockAuthorApi";
import * as types from "./actionTypes";

/* createCourse action */
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS , authors: authors };
}

export function loadAuthors() {
    // this dispatch wrapper will be in every thunk
    return (dispatch) => {
      return AuthorApi.getAllAuthors()
        .then((authors) => {
            dispatch(loadAuthorsSuccess(authors));
        })
        .catch((error) => {
          throw(error);
        });
    };
}
