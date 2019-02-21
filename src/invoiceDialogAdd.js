import React, { Component } from "react";
import { MatchMediaHOC } from "react-match-media";

import SmallScreen from "./smallScreen";
import BigScreen from "./bigScreen";

const ComponentForBigScreen = MatchMediaHOC(BigScreen, "(min-width: 600px)");
const ComponentForSmallScreen = MatchMediaHOC(
  SmallScreen,
  "(max-width: 599px)"
);

class InvoiceDialogAdd extends Component {
  constructor() {
    super();
    this.state = { checked: false, amount: null, ibanFieldShown: false };
    this.handleChange = this.handleChange.bind(this);
    this.getClass = this.getClass.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showIbanField = this.showIbanField.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked: checked });
  }

  //the look of the tabs is decided based on whether the user toggled the option
  getClass(value, id) {
    if (this.state.checked === false && value === "information") {
      return "active";
    } else if (this.state.checked === false && value === "payment") {
      return "non-active";
    } else if (this.state.checked === true && value === "information") {
      return "non-active";
    } else if (this.state.checked === true && value === "payment") {
      return "active";
    } else if (this.state.amount && !this.state.checked && value === "button") {
      return "active";
    } else if (
      !this.state.amount &&
      !this.state.checked &&
      value === "button"
    ) {
      return "non-active";
    } else if (
      this.props.selectedResult &&
      this.state.checked &&
      value === "button"
    ) {
      return "active";
    } else if (
      !this.props.selectedResult &&
      this.state.checked &&
      value === "button"
    ) {
      return "non-active";
    } else if (
      this.props.selectedResult &&
      value === "result" &&
      id === this.props.selectedResult.id
    ) {
      return "active";
    } else if (
      this.props.selectedResult &&
      value === "result" &&
      id !== this.props.selectedResult.id
    ) {
      return "non-active";
    } else if (value === "result") {
      return "non-active";
    }
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showIbanField() {
    this.setState({ ibanFieldShown: true });
  }

  render() {
    return (
      <div className="invoiceDialogAdd-container">
        <ComponentForBigScreen
          getClass={this.getClass}
          checked={this.state.checked}
          handleChange={this.handleChange}
          handleInputChange={this.handleInputChange}
          hideAddDialog={this.props.hideAddDialog}
          date={this.state.date}
          title={this.state.title}
          amount={this.state.amount}
          showIbanField={this.showIbanField}
          handleSelection={this.props.handleSelection}
          ibanFieldShown={this.state.ibanFieldShown}
        />
        <ComponentForSmallScreen />
      </div>
    );
  }
}

export default InvoiceDialogAdd;
