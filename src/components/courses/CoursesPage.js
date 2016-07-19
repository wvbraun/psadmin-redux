"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render() {
    return (
        <div>
          <h1>Courses</h1>
          {this.props.courses.map(this.courseRow)}
          <h2>Add Course</h2>
          <input type="text"
                 onChange={this.onTitleChange}
                 value={this.state.course.title} />
          <input type="submit"
                 onClick={this.onClickSave}
                 value="Save" />
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
