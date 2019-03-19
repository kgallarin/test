import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Hello World! hook</p>
        <Link to="/second-page">About</Link>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Home);
