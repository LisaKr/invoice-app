import React, { Component } from "react";

import SideBarWithTabs from "./sideBarWithTabs";
import IbanField from "./ibanField";
import NoIbanField from "./noIbanField";

class BigScreen extends Component {
  componentDidMount() {
    console.log("big mounted");
  }
  render() {
    return (
      <div className="bigScreenAdd">
        <SideBarWithTabs getClass={this.props.getClass} />

        {!this.props.ibanFieldShown && (
          <NoIbanField
            checked={this.props.checked}
            handleInputChange={this.props.handleInputChange}
            handleChange={this.props.handleChange}
            hideAddDialog={this.props.hideAddDialog}
            getClass={this.props.getClass}
            date={this.props.date}
            title={this.props.title}
            amount={this.props.amount}
            showIbanField={this.props.showIbanField}
          />
        )}

        {this.props.ibanFieldShown && (
          <IbanField
            getClass={this.props.getClass}
            handleSelection={this.props.handleSelection}
            hideAddDialog={this.props.hideAddDialog}
            date={this.props.date}
            title={this.props.title}
            amount={this.props.amount}
          />
        )}

        <br />
      </div>
    );
  }
}

export default BigScreen;
