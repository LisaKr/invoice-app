import React from "react";
import { shallow, mount } from "enzyme";
import DoneButton from "../doneButton.js";

describe("doneButton.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders button with the right text", () => {
    const wrapper = mount(<DoneButton getClass={fakeFunc} />);
    expect(wrapper.find("button").text()).toEqual("Done");
  });

  it("renders button with the active class returned from the getClass function", () => {
    const wrapper = mount(<DoneButton getClass={fakeFunc} />);
    expect(wrapper.find("button").hasClass("active")).toEqual(true);
  });

  it("fires an event after clicking on the button", () => {
    const wrapper = mount(<DoneButton getClass={fakeFunc} />);
    const mockhideAddDialogue = jest.fn();
    wrapper.instance().handleBtnClick = mockhideAddDialogue;
    wrapper.instance().handleBtnClick();
    expect(mockhideAddDialogue).toHaveBeenCalled();
  });
});
