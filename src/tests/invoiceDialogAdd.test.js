import React from "react";
import { shallow, mount } from "enzyme";
import InvoiceDialogAdd from "./invoiceDialogAdd.js";
import NoIbanField from "./noIbanField.js";

describe("IbanField.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const wrapper = mount(<InvoiceDialogAdd getClass={fakeFunc} />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("invoiceDialogAdd-container")).toBe(true);
  });

  //THIS IS NOW IN A DIFFERENT FILE
  //I would also test that the components renders the expected component based on state
  //I would also change that the switch button changes the state correctly

  it("returns correct class in the getClass function", () => {
    const wrapper = mount(<InvoiceDialogAdd getClass={fakeFunc} />);
    wrapper.setState({ checked: false });
    expect(wrapper.instance().getClass("information")).toEqual("active");
  });
});
