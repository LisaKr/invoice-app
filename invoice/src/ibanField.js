import React, { Component } from "react";

import DoneButton from "./doneButton";

let ibans = [
  {
    id: 1,
    date: "2018-01-04",
    title: "Rent April",
    sum: 500,
    iban: "DE123"
  },
  {
    id: 2,
    date: "2018-01-05",
    title: "Rent May",
    sum: 500,
    iban: "DE456"
  },
  {
    id: 3,
    date: "2018-01-01",
    title: "Rent June",
    sum: 500,
    iban: "DE123"
  }
];

class IbanField extends Component {
  constructor() {
    super();
    this.state = { searchResults: [], showDoneButton: false };
    this.getSearchResults = this.getSearchResults.bind(this);
    this.showDoneButton = this.showDoneButton.bind(this);
  }

  getSearchResults(e) {
    let matches;
    //if the field is empty
    if (e.target.value == "") {
      matches = [];
    } else {
      matches = ibans.filter(item => {
        return item.iban.indexOf(e.target.value) == 0;
      });
    }

    this.setState({ searchResults: matches });
  }

  showDoneButton(date, title, amount, iban) {
    this.setState({
      showDoneButton: true,
      date: date,
      title: title,
      amount: amount,
      iban: iban
    });
  }

  render() {
    return (
      <div>
        <p> Search IBANs</p>
        <input
          placeholder="search for IBAN"
          name="iban"
          onChange={e => {
            this.getSearchResults(e);
          }}
        />

        <div className="searchResults">
          {this.state.searchResults &&
            this.state.searchResults.map(r => {
              return (
                <div
                  key={r.id}
                  className={this.props.getClass("result", r.id)}
                  onClick={() => {
                    this.showDoneButton(r.date, r.title, r.sum, r.iban);
                    this.props.handleSelection(r);
                  }}
                >
                  {r.date} || {r.iban} || {r.sum} || {r.title}
                </div>
              );
            })}
        </div>

        {this.state.showDoneButton && (
          <DoneButton
            getClass={this.props.getClass}
            date={this.state.date}
            title={this.state.title}
            iban={this.state.iban}
            amount={this.state.amount}
            hideAddDialog={this.props.hideAddDialog}
          />
        )}
      </div>
    );
  }
}

export default IbanField;
