import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class Home extends Component {
  state = {};
  render() {
    return <p>Hello World!</p>;
  }
}

export default connect(
  null,
  actions
)(Home);
