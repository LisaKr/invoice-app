import React from "react";
import { shallow, mount } from "enzyme";
import NoIbanField from "./noIbanField.js";

describe("noIbanField.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const anotherFakeFunc = jest.fn();
    const wrapper = mount(
      <NoIbanField
        getClass={fakeFunc}
        checked={false}
        handleChange={anotherFakeFunc}
      />
    );
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("inputs")).toBe(true);
  });

  //I would check that given the specific checked props value the correct number of inputs is rendered

  //I would check whether onChange event works properly

  //I would check whether onClick event works properly
});
