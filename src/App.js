import React, { Component } from "react";

import Buttons from "./editDeleteButtons.js";
import InvoiceDialogEdit from "./invoiceDialogEdit.js";
import InvoiceDialogAdd from "./invoiceDialogAdd.js";
import Title from "./title.js";
import Invoices from "./invoices.js";

//mocking data coming from the server
let invoices = [
  {
    id: 1,
    date: "2018-01-01",
    title: "Rent January",
    sum: 500,
    iban: "DE878787878787878"
  },
  {
    id: 2,
    date: "2018-02-01",
    title: "Rent February",
    sum: 500,
    iban: "DE878787878787878"
  },
  {
    id: 3,
    date: "2018-03-01",
    title: "Rent March",
    sum: 500,
    iban: "DE878787878787878"
  }
];

class App extends Component {
  constructor() {
    super();
    //invoice dialogue is initially hidden
    this.state = { editDialogueShown: false, addDialogueShown: false };
    this.showDialogueEditButton = this.showDialogueEditButton.bind(this);
    this.showDialogueAddButton = this.showDialogueAddButton.bind(this);
    this.hideAddDialog = this.hideAddDialog.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateInvoice = this.updateInvoice.bind(this);
  }

  async componentDidMount() {
    //normally this data will come from a database in the back. for mock purposes its coming from a local array
    // let invoices = await axios.get("./invoices.json");
    this.setState({
      invoices: invoices,
      currentInvoice: {}
    });
  }

  showDialogueEditButton(id, title, sum, iban) {
    let currentInvoice = Object.assign({}, this.state.currentInvoice); //creating copy of object
    currentInvoice.id = id;
    currentInvoice.title = title;
    currentInvoice.sum = sum;
    currentInvoice.iban = iban; //updating value

    this.setState({ currentInvoice });
    this.setState({
      editDialogueShown: true
    });
  }

  showDialogueAddButton() {
    this.setState({
      addDialogueShown: true
    });
  }

  hideAddDialog(date, title, amount, iban) {
    invoices.push({
      id: invoices.length + 1,
      date: date,
      title: title,
      sum: amount,
      iban: iban || "no iban"
    });

    this.setState({
      invoices: invoices,
      addDialogueShown: false
    });
  }

  handleSelection(result) {
    this.setState({
      selectedResult: result
    });
  }

  updateInvoice(id, iban, amount) {
    console.log(id, iban, amount);
    //request to the server to update the database
    let invoicesCopy = this.state.invoices.slice(); //creating copy of object

    invoicesCopy.map(i => {
      if (i.id === id) {
        //if both are provided, then update
        if (iban !== undefined && amount !== undefined) {
          i.iban = iban;
          i.sum = amount;
          //
        } else if (iban === undefined && amount !== undefined) {
          i.sum = amount;
          i.iban = this.state.currentInvoice.iban;
        } else if (amount === undefined && iban !== undefined) {
          i.iban = iban;
          i.sum = this.state.currentInvoice.sum;
        } else {
          i.sum = this.state.currentInvoice.sum;
          i.iban = this.state.currentInvoice.iban;
        }
      }
    });

    this.setState({
      invoices: invoicesCopy,
      editDialogueShown: false
    });
  }

  render() {
    return (
      <div className="invoices-container">
        <Title text={"Your invoices"} />

        {/*did not extract this button into extra component as it only appears one time ever in the whole app*/}
        <button
          onClick={() => {
            this.showDialogueAddButton();
          }}
        >
          Add invoice
        </button>

        {this.state.invoices && (
          <Invoices
            invoices={this.state.invoices}
            showDialogueEditButton={this.showDialogueEditButton}
          />
        )}

        {this.state.editDialogueShown && (
          <InvoiceDialogEdit
            invoice={this.state.currentInvoice}
            updateInvoice={this.updateInvoice}
          />
        )}

        {this.state.addDialogueShown && (
          <InvoiceDialogAdd
            hideAddDialog={this.hideAddDialog}
            handleSelection={this.handleSelection}
            selectedResult={this.state.selectedResult}
          />
        )}
      </div>
    );
  }
}

export default App;
