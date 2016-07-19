"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { browserHistory } from "react-router";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  redirectToAddCoursePage() {
    browserHistory.push("/course");
  }

  render() {
    const { courses } = this.props;
    return (
        <div>
          <h1>Courses</h1>
          <input type="submit"
                 value="Add Course"
                 className="btn btn-primary"
                 onClick={this.redirectToAddCoursePage} />
          <CourseList courses={courses} />
        </div>
    );
  }
}

/* We remove dispatch validation bc dispatch is no longer injected as
   a property bc we defined the mapDispatchToProps (ie, connect
   will no longer add a dispatch property on our component)
*/
CoursesPage.propTypes =  {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // defined in the rootReducer
  };
}

/* Determines what actions are available in the component
   -- dispatch is needed to wrap our actions to trigger our
   -- flow thru redux (bc the action is just an object)
*/
function mapDispatchToProps(dispatch) {
  return {
    /* createCourse: (course) => dispatch(courseActions.createCourse(course)) */
    // iterate thru all the actions and then wrap them in a dispatch()
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
