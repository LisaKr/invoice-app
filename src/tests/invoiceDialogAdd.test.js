import React from "react";
import { shallow, mount } from "enzyme";
import InvoicedialogueAdd from "../invoicedialogueAdd.js";

describe("InvoiceDialogueAdd.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const wrapper = mount(<InvoicedialogueAdd getClass={fakeFunc} />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("invoiceDialogueAdd-container")).toBe(true);
  });

  it("returns correct class in the getClass function", () => {
    const wrapper = mount(<InvoicedialogueAdd getClass={fakeFunc} />);
    wrapper.setState({ checked: false });
    expect(wrapper.instance().getClass("information")).toEqual(
      "active information"
    );
  });

  //I would also test that handleChange sets state correctly
});
