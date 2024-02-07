import React, { Component } from "react";

class ResetBtn extends Component {
  render() {
    return <button onClick={this.props.onResetClick}>Reset</button>;
  }
}

export default ResetBtn;
