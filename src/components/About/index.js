import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Hello World! I am about</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(About);
