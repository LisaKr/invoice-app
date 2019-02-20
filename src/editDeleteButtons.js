import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <button
          onClick={() => {
            this.props.showDialogueEditButton(
              this.props.id,
              this.props.title,
              this.props.sum,
              this.props.iban
            );
          }}
        >
          Edit
        </button>
        <button> Delete </button>
      </div>
    );
  }
}

export default Buttons;
