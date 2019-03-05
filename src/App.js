import React, { Component } from "react";

import InvoiceDialogueEdit from "./invoiceDialogueEdit.js";
import InvoiceDialogueAdd from "./invoiceDialogueAdd.js";
import Title from "./title.js";
import Invoices from "./invoices.js";
import Footer from "./footer.js";

//mocking data coming from the server. normally we would ask the server to get us some data from a database
let invoices = [
  {
    id: 1,
    date: "2018-01-01",
    title: "Rent January",
    amount: 500,
    iban: "DE878787878787878"
  },
  {
    id: 2,
    date: "2018-02-01",
    title: "Rent February",
    amount: 500,
    iban: "DE878787878787878"
  },
  {
    id: 3,
    date: "2018-03-01",
    title: "Rent March",
    amount: 500,
    iban: "DE878787878787878"
  }
];

class App extends Component {
  constructor() {
    super();
    //invoice Dialogues are initially hidden
    this.state = {
      editDialogueShown: false,
      addDialogueShown: false,
      currentInvoice: {}
    };
    //we need to bind here to bind the methods/functions to the context of the whole component,
    //otherwise this would be bound to just the small context of the method itself.
    //instead we could also use arrow functions in render because they dont bind this
    //however: The problem with this syntax is that a different callback is created each time component renders. In most cases, this is fine.
    //However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
    //Generally, if you refer to a method without () after it, such as onClick={this.handleClick},
    //you should bind that method.
    this.showDialogueEditButton = this.showDialogueEditButton.bind(this);
    this.showDialogueAddButton = this.showDialogueAddButton.bind(this);
    this.hideAddDialogue = this.hideAddDialogue.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateInvoice = this.updateInvoice.bind(this);
    this.deleteInvoice = this.deleteInvoice.bind(this);
  }

  componentDidMount() {
    //normally this data will come from a database in the back. for mock purposes its coming from a local array
    this.setState({
      invoices: invoices
    });
  }

  //this function is passed to invoices component which in turn passes it to the editAndDeleteButtons. the edit button triggers this
  //function and passes back the details of the invoice this button belongs to. this data gets put in state in order to be
  //passed to the Edit Dialogue to pre-populate the fields. it is also used later on in updating the edited invoice. also
  //the edit dialogue itself gets shown
  showDialogueEditButton(id, title, amount, iban) {
    let currentInvoice = Object.assign({}, this.state.currentInvoice); //creating copy of object
    currentInvoice.id = id;
    currentInvoice.title = title;
    currentInvoice.amount = amount;
    currentInvoice.iban = iban; //updating value

    this.setState({
      editDialogueShown: true,
      currentInvoice: currentInvoice
    });
  }

  //showing add dialogue. is only being used in this component
  showDialogueAddButton() {
    this.setState({
      addDialogueShown: true
    });
  }

  //function that hides adding dialogue after a new invoice was added. also updates the state with the new invoice
  //which causes the component to re-render and show the complete list including the new one.
  //the data of the new invoice is being passed from the doneButton component which receives the data about
  //which component is being added from invoiceDialogueAdd which in turn gets it
  //from IbanField/NoIbanField (it's what the user puts in the input field)
  hideAddDialogue(date, title, amount, iban) {
    // let temp = this.state.invoices.slice();
    let tempObj = {};

    tempObj.id = this.state.invoices.length + 1;
    tempObj.date = date;
    tempObj.title = title;
    tempObj.amount = amount;
    tempObj.iban = iban || "no iban";

    this.setState({
      invoices: [...this.state.invoices, tempObj],
      addDialogueShown: false
    });
  }

  //the function that is passed to the IbanField. Runs when the user selects some of presented search results.
  //puts it in state and passes it down to InvoiceDialogueAdd in order to use it in the getCLass function there
  //to determine which class to assign to the search results
  handleSelection(result) {
    this.setState({
      selectedResult: result
    });
  }
  //runs after the done button in the edit dialogue is clicked. the data is coming from the input fileds in the
  //edit dialogue. updates the current state with the updated invoice
  updateInvoice(id, iban, amount) {
    //normally there will be a request to the server to update the database
    let invoicesCopy = this.state.invoices.slice(); //creating copy of object

    invoicesCopy.map(i => {
      if (i.id === id) {
        //if both are provided, then update
        if (iban !== undefined && amount !== undefined) {
          i.iban = iban;
          i.amount = amount;
          //if only amount was updated
        } else if (iban === undefined && amount !== undefined) {
          i.amount = amount;
          i.iban = this.state.currentInvoice.iban;
          //if only iban was updated
        } else if (amount === undefined && iban !== undefined) {
          i.iban = iban;
          i.amount = this.state.currentInvoice.amount;
        }
      }
    });

    this.setState({
      invoices: invoicesCopy,
      editDialogueShown: false
    });
  }

  //runs after clicking on the delete button in editAndDeleteButtons. provided with the id of the invoice it belonged to
  //updates state with the new invoices
  deleteInvoice(id) {
    this.setState({
      invoices: this.state.invoices.filter(inv => inv.id != id)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Title text={"Your invoices"} />
          {/*did not extract this button into extra component as it only appears one time ever in the whole app*/}
          <img
            onClick={() => {
              this.showDialogueAddButton();
            }}
            src="/add1.png"
          />
          {/*as soon as we retrive the invoices and put them into state they appear
        on screen. providing invoices to render on screen, function to show the edit dialogue and to delete the
        invoice (for both buttons it has inside)*/}
          {this.state.invoices && (
            <Invoices
              invoices={this.state.invoices}
              showDialogueEditButton={this.showDialogueEditButton}
              deleteInvoice={this.deleteInvoice}
            />
          )}
          {/*when the button/image click sets editDialogueShown to true in the state.
        passing current invoice to populate the input fields and update invoice function to be
        triggered on click on the done button*/}
          {this.state.editDialogueShown && (
            <InvoiceDialogueEdit
              invoice={this.state.currentInvoice}
              updateInvoice={this.updateInvoice}
            />
          )}
          {/*when the button/image click sets addDialogueShown to true in the state */}
          {this.state.addDialogueShown && (
            <InvoiceDialogueAdd
              hideAddDialogue={this.hideAddDialogue}
              handleSelection={this.handleSelection}
              selectedResult={this.state.selectedResult}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
