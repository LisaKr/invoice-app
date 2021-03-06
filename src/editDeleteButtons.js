import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <img
          src="/edit1.png"
          onClick={() => {
            this.props.showDialogueEditButton(
              this.props.id,
              this.props.title,
              this.props.amount,
              this.props.iban
            );
          }}
        />
        <img
          src="delete1.png"
          onClick={() => {
            this.props.deleteInvoice(this.props.id);
          }}
        />
      </div>
    );
  }
}

export default Buttons;
