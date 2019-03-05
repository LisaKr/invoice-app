import React, { Component } from "react";

class sideBarWithTabs extends Component {
  render() {
    return (
      <div className="choosingTabs">
        <div className={this.props.getClass("manual")}>Manual input</div>
        <div className={this.props.getClass("iban")}>IBAN information</div>
      </div>
    );
  }
}

export default sideBarWithTabs;
