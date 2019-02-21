import React, { Component } from "react";

class DoneButton extends Component {
  render() {
    return (
      <button
        disabled={!this.props.amount}
        className={this.props.getClass("button")}
        onClick={() => {
          this.props.hideAddDialog(
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
