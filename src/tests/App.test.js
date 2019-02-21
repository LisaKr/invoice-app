import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App.js";

describe("app.js", () => {
  it("renders main div with the right class", () => {
    const wrapper = mount(<App />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("container")).toBe(true);
  });

  //I would check whether hideAddDialog, handleSelection and updateInvoice perform and set the state correctly

  //I would check whether onCLick event on the Add button is triggered properly
});
