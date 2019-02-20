import React, { Component } from "react";
import Invoices from "./invoices.js";

//main page renders only the component showing all invoices. all further components will be incorporated further down the line
class App extends Component {
  render() {
    return (
      <div className="App">
        <Invoices />
      </div>
    );
  }
}

export default App;
