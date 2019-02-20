import React, { Component } from "react";

class sideBarWithTabs extends Component {
  render() {
    return (
      <div className="choosingTabs">
        <div className={this.props.getClass("information")}>
          Invoice information
        </div>
        <div className={this.props.getClass("payment")}>Payment</div>
      </div>
    );
  }
}

export default sideBarWithTabs;
