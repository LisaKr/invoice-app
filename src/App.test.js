import React from "react";
import { shallow, mount } from "enzyme";
import Invoices from "./invoices.js";

describe("invoices.js", () => {
  it("renders main div with the right class", () => {
    const wrapper = mount(<Invoices />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("invoices-container")).toBe(true);
  });

  //I would check that h1 renders the correct test

  //I would check whether hideAddDialog, handleSelection and updateInvoice perform and set the state correctly

  //I would check whether onCLick event on the Add button works properly
});
