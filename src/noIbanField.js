import React, { Component } from "react";
import Switch from "react-switch";

import DoneButton from "./doneButton";
import Title from "./title.js";
import Input from "./input.js";

class NoIbanField extends Component {
  render() {
    return (
      <div className="inputs">
        <Title text={"Add an invoice!"} />
        {/*I decided to only show input fields if the toggle is off, as we are getting date, title and amount from
            the bank transfer anyway if we're selcting the iban option*/}
        {!this.props.checked && (
          <Input
            placeholder={"date"}
            name={"date"}
            handleChange={this.props.handleInputChange}
          />
        )}

        {!this.props.checked && (
          <Input
            placeholder={"title"}
            name={"title"}
            handleChange={this.props.handleInputChange}
          />
        )}

        <div className="switch">
          <p> Retrieve amount from bank account </p>

          <Switch
            onChange={this.props.handleChange}
            checked={this.props.checked}
          />
        </div>

        {!this.props.checked && (
          <Input
            placeholder={"amount"}
            name={"amount"}
            handleChange={this.props.handleInputChange}
          />
        )}
        {/*This button only appears once, so that I donnt extract it in a separate component*/}
        {this.props.checked && (
          <button onClick={this.props.showIbanField}>Next</button>
        )}

        {!this.props.checked && (
          <DoneButton
            hideAddDialogue={this.props.hideAddDialogue}
            date={this.props.date}
            title={this.props.title}
            amount={this.props.amount}
            getClass={this.props.getClass}
          />
        )}
      </div>
    );
  }
}

export default NoIbanField;
