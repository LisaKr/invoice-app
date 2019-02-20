import React, { Component } from "react";

import Switch from "react-switch";
import DoneButton from "./doneButton";

class NoIbanField extends Component {
  render() {
    return (
      <div className="inputs">
        <h1> Add an invoice! </h1>
        {!this.props.checked && (
          <input
            placeholder="date"
            name="date"
            onChange={e => {
              this.props.handleInputChange(e);
            }}
          />
        )}
        {!this.props.checked && (
          <input
            placeholder="title"
            name="title"
            onChange={e => {
              this.props.handleInputChange(e);
            }}
          />
        )}
        <div className="switch">
          <p> Retrieve amount from bank account </p>

          <Switch
            onChange={this.props.handleChange}
            checked={this.props.checked}
          />
        </div>
        {/*only if toggle is on "off" and it is the payment without iban*/}
        {!this.props.checked && (
          <input
            placeholder="amount"
            name="amount"
            onChange={e => {
              this.props.handleInputChange(e);
            }}
          />
        )}

        {this.props.checked && (
          <button onClick={this.props.showIbanField}>Next</button>
        )}

        {!this.props.checked && (
          <DoneButton
            hideAddDialog={this.props.hideAddDialog}
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
