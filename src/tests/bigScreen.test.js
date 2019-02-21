import React from "react";
import { shallow, mount } from "enzyme";
import BigScreen from "../bigScreen.js";

describe("bigScreen.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const wrapper = mount(<BigScreen getClass={fakeFunc} />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("bigScreen")).toBe(true);
  });
});

//I would also test that the components renders the expected component based on the
//passed props (this.props.ibanFieldShown)
