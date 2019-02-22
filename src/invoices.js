import React, { Component } from "react";

import Buttons from "./editDeleteButtons.js";

class Invoices extends Component {
  render() {
    return (
      <div className="invoices">
        {this.props.invoices.map(i => {
          return (
            <div key={i.id} className="invoice">
              {/*passing the id of the current invoice so that the button knows which invoice to edit or delete in the database */}
              <div className="invoice-details">
                {i.date} || {i.title} || {i.amount} Euro || {i.iban}
              </div>
              <Buttons
                id={i.id}
                title={i.title}
                amount={i.amount}
                iban={i.iban}
                showDialogueEditButton={this.props.showDialogueEditButton}
                deleteInvoice={this.props.deleteInvoice}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Invoices;
