import React from "react";
import { shallow, mount } from "enzyme";
import InvoiceDialogAdd from "../invoiceDialogAdd.js";

describe("IbanField.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const wrapper = mount(<InvoiceDialogAdd getClass={fakeFunc} />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("invoiceDialogAdd-container")).toBe(true);
  });

  it("returns correct class in the getClass function", () => {
    const wrapper = mount(<InvoiceDialogAdd getClass={fakeFunc} />);
    wrapper.setState({ checked: false });
    expect(wrapper.instance().getClass("information")).toEqual("active");
  });

  //I would also test that handleChange sets state correctly
});
