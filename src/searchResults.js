import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    return (
      <div className="searchResults">
        {this.props.searchResults.map(r => {
          return (
            <div
              key={r.id}
              className={this.props.getClass("result", r.id)}
              onClick={() => {
                this.props.showDoneButton(r.date, r.title, r.sum, r.iban);
                this.props.handleSelection(r);
              }}
            >
              {r.date} || {r.iban} || {r.sum} || {r.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
