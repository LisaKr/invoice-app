import React from "react";
import { shallow, mount } from "enzyme";
import Input from "../input.js";

describe("input.js", () => {
  it("renders one input field", () => {
    const wrapper = mount(<Input />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  //I would also test whether an action is triggered onChange
});
