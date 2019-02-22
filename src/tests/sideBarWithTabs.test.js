import React from "react";
import { shallow, mount } from "enzyme";
import SideBarWithTabs from "../sideBarWithTabs.js";

describe("sideBarWithTabs.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders main div with the right class", () => {
    const wrapper = mount(<SideBarWithTabs getClass={fakeFunc} />);
    const div = wrapper.find("div").at(0);
    expect(div.hasClass("choosingTabs")).toBe(true);
  });

  //I would check that two divs are rendered and that they contain the right content
});
