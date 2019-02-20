import React, { Component } from "react";

class InvoiceDialogEdit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="invoiceDialogEdit-container">
        <h1> Edit this invoice </h1>
        <input
          placeholder="amount"
          name="amount"
          defaultValue={this.props.invoice.sum}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <input
          placeholder="iban"
          name="iban"
          defaultValue={this.props.invoice.iban}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <button
          onClick={() => {
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

export default InvoiceDialogEdit;
