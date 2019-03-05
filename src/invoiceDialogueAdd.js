import React, { Component } from "react";
import { MatchMediaHOC } from "react-match-media";
//components for different screen sizes
import SmallScreen from "./smallScreen";
import BigScreen from "./bigScreen";
//setting rules for when show what
const ComponentForBigScreen = MatchMediaHOC(BigScreen, "(min-width: 600px)");
const ComponentForSmallScreen = MatchMediaHOC(
  SmallScreen,
  "(max-width: 599px)"
);

class InvoiceDialogueAdd extends Component {
  constructor() {
    super();
    //starrting out with toggle off, no amoint set and only no Iban shown
    this.state = { checked: false, amount: null, ibanFieldShown: false };
    this.handleChange = this.handleChange.bind(this);
    this.getClass = this.getClass.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showIbanField = this.showIbanField.bind(this);
  }
  //toggle component being on and off
  handleChange(checked) {
    this.setState({ checked: checked });
  }

  //the look of the tabs is decided based on whether the user toggled the option
  //the look of done button in the NoIbanField is decided on whether the amount is selected
  //the look of done button in the IbanField is decided on whether a result is selected from a list
  //the look of selected result is based on whether the result is selected
  //this function is passed down to big component which in turns passes it to both iban and noniban fields.
  //in the future it should also be passed to the small component
  getClass(value, id) {
    if (this.state.checked === false && value === "manual") {
      return "active information";
    } else if (this.state.checked === false && value === "iban") {
      return "non-active payment";
    } else if (this.state.checked === true && value === "manual") {
      return "non-active information";
    } else if (this.state.checked === true && value === "iban") {
      return "active payment";
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
      return "result";
    }
  }
  //handling input field change. is passed to both iban and noniban field components through the bigScreen component
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //changes value when then "Next button" in the noIbanField is shown. responsible for deciding whether to show
  //iban or non iban field
  showIbanField() {
    this.setState({ ibanFieldShown: true });
  }

  render() {
    return (
      <div className="invoiceDialogueAdd-container">
        <ComponentForBigScreen
          getClass={this.getClass}
          checked={this.state.checked}
          handleChange={this.handleChange}
          handleInputChange={this.handleInputChange}
          hideAddDialogue={this.props.hideAddDialogue}
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

export default InvoiceDialogueAdd;
