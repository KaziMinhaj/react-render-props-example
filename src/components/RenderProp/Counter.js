import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return this.props.children(this.state.count, this.incrementCount);
  }
}
