import React from "react";
import { shallow, mount } from "enzyme";
import InvoiceDialogEdit from "../invoiceDialogEdit.js";

describe("invoiceDialogEdit.js", () => {
  // const fakeFunc = jest.fn();
  // fakeFunc.mockReturnValue("active");

  it("renders two inputs", () => {
    const wrapper = mount(
      <InvoiceDialogEdit invoice={{ sum: 500, title: "rent", id: "444" }} />
    );
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("renders one button", () => {
    const wrapper = mount(
      <InvoiceDialogEdit invoice={{ sum: 500, title: "rent", id: "444" }} />
    );
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("fires an event after clicking on the button", () => {
    const wrapper = mount(
      <InvoiceDialogEdit invoice={{ sum: 500, title: "rent", id: "444" }} />
    );
    const mockUpdateInvoice = jest.fn();
    wrapper.instance().handleBtnClick = mockUpdateInvoice;
    wrapper.instance().handleBtnClick();
    expect(mockUpdateInvoice).toHaveBeenCalled();
  });

  //I would also check whether the change event triggers the appropriate action
});
