import React, { Component } from "react";

import SideBarWithTabs from "./sideBarWithTabs";
import IbanField from "./ibanField";
import NoIbanField from "./noIbanField";

class BigScreen extends Component {
  render() {
    return (
      <div className="bigScreen">
        {/*sidebar is always shown, the active tab is signified by color (this is why we're passing the getClass)*/}
        <SideBarWithTabs getClass={this.props.getClass} />
        {/*if the next button is not clicked*/}
        {!this.props.ibanFieldShown && (
          <NoIbanField
            checked={this.props.checked}
            handleInputChange={this.props.handleInputChange}
            handleChange={this.props.handleChange}
            hideAddDialogue={this.props.hideAddDialogue}
            getClass={this.props.getClass}
            //gets passed after being set to state in parent
            //after the user puts stuff into input fields in this component, so that done button can use it
            date={this.props.date}
            title={this.props.title}
            amount={this.props.amount}
            showIbanField={this.props.showIbanField}
          />
        )}
        {/*if the toggle is on and the next button is clicked*/}
        {this.props.ibanFieldShown && (
          <IbanField
            getClass={this.props.getClass}
            handleSelection={this.props.handleSelection}
            hideAddDialogue={this.props.hideAddDialogue}
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
