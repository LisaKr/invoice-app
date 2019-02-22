import React, { Component } from "react";

class DoneButton extends Component {
  render() {
    return (
      //is disabled unless we have selected the amount. in the iban case it only appears after the user has selected the entry anyway so it doesn't matter much
      <button
        disabled={!this.props.amount}
        className={this.props.getClass("button")}
        onClick={() => {
          this.props.hideAddDialogue(
            this.props.date,
            this.props.title,
            this.props.amount,
            this.props.iban
          );
        }}
      >
        Done
      </button>
    );
  }
}
export default DoneButton;
