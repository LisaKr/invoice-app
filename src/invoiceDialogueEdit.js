import React, { Component } from "react";
import Title from "./title.js";
import Input from "./input.js";

class InvoiceDialogueEdit extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="invoiceDialogueEdit-container">
        <Title text={"Edit this invoice"} />
        <Input
          placeholder={"amount"}
          name={"amount"}
          value={this.props.invoice.amount}
          handleChange={this.handleChange}
        />
        <Input
          placeholder={"iban"}
          name={"iban"}
          value={this.props.invoice.iban}
          handleChange={this.handleChange}
        />
        <button
          onClick={() => {
            //passing back the update values of iban and amiunt and the existing id
            this.props.updateInvoice(
              this.props.invoice.id,
              this.state.iban,
              this.state.amount
            );
          }}
        >
          Done
        </button>
      </div>
    );
  }
}

export default InvoiceDialogueEdit;
