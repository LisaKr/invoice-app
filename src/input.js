import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        name={this.props.name}
        defaultValue={this.props.value}
        onChange={e => {
          this.props.handleChange(e);
        }}
      />
    );
  }
}

export default Input;
