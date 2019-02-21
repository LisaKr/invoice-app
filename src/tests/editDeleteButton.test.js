import React from "react";
import { shallow, mount } from "enzyme";
import EditDeleteButtons from "./editDeleteButtons.js";

describe("editDeleteButtons.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders two buttons in total", () => {
    const wrapper = mount(<EditDeleteButtons getClass={fakeFunc} />);
    expect(wrapper.find("button").length).toBe(2);
  });

  it("fires an event after clicking on the edit button", () => {
    const wrapper = mount(<EditDeleteButtons getClass={fakeFunc} />);
    const showDialogueEditButton = jest.fn();
    wrapper.instance().handleBtnClick = showDialogueEditButton;
    wrapper.instance().handleBtnClick();
    expect(showDialogueEditButton).toHaveBeenCalled();
  });
});
