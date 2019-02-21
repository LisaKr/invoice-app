import React, { Component } from "react";

import DoneButton from "./doneButton";
import Title from "./title";
import SearchResults from "./searchResults";

//mocking database data
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

  getSearchResults(value) {
    let matches;
    //if the field is empty
    if (value === "") {
      matches = [];
    } else {
      matches = ibans.filter(item => {
        return item.iban.indexOf(value) === 0;
      });
    }

    this.setState({ searchResults: matches });
    return matches;
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
        <Title text="Search IBANs" />

        <input
          placeholder="search for IBAN"
          name="iban"
          onChange={e => {
            this.getSearchResults(e.target.value);
          }}
        />

        {this.state.searchResults && (
          <SearchResults
            searchResults={this.state.searchResults}
            getClass={this.props.getClass}
            showDoneButton={this.showDoneButton}
            handleSelection={this.props.handleSelection}
          />
        )}

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
