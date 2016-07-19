"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        course: { title: ""}
      };

      this.onClickSave = this.onClickSave.bind(this);
      this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  render() {
    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {
      state: state
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);



  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }
          <h2>Add Course</h2>
          <input type="text"
                 onChange={this.onTitleChange}
                 value={this.state.course.title} />
          <input type="submit"
                 onClick={this.onClickSave}
                 value="Save" />
