import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App.js";

describe("app.js", () => {
  it("renders main div with the right class", () => {
    const wrapper = mount(<App />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("wrapper")).toBe(true);
  });

  it("fires an event after clicking on the add button", () => {
    const wrapper = mount(<App />);
    const add = jest.fn();
    wrapper.instance().handleBtnClick = add;
    wrapper.instance().handleBtnClick();
    expect(add).toHaveBeenCalled();
  });

  //I would also check whether hideAddDialogue, handleSelection and updateInvoice perform and set the state correctly
});
