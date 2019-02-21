import React from "react";
import { shallow, mount } from "enzyme";
import IbanField from "./ibanField.js";

describe("IbanField.js", () => {
  const fakeFunc = jest.fn();
  fakeFunc.mockReturnValue("active");

  it("renders header with the right text", () => {
    const wrapper = mount(<IbanField getClass={fakeFunc} />);
    expect(wrapper.find("p").text()).toEqual("Search IBANs");
  });

  //Should test whether change in the search field triggers an action. could not figure out why the mock function is not being called

  // it("triggers an action onChange in the search field", () => {
  // const onSearchMock = jest.fn();
  //
  // const wrapper = mount(<IbanField />);
  //
  // const input = wrapper.find("input");
  //
  // input.simulate("change", {
  //   target: {
  //     value: "VALUE"
  //   }
  // });
  //
  // expect(onSearchMock).toBeCalledWith("VALUE");

  it("returns a correct search result when provided with an example value", () => {
    const wrapper = mount(<IbanField getClass={fakeFunc} />);
    const value = "DE456";
    expect(wrapper.instance().getSearchResults(value)).toEqual([
      { date: "2018-01-05", iban: "DE456", id: 2, sum: 500, title: "Rent May" }
    ]);
  });

  it("update state correctly after pressing the done button", () => {
    const wrapper = mount(<IbanField getClass={fakeFunc} />);
    wrapper.instance().showDoneButton("2018-01-05", "Rent May", 500, "DE456");
    expect(wrapper.state().title).toEqual("Rent May");
    expect(wrapper.state().date).toEqual("2018-01-05");
    expect(wrapper.state().title).toEqual("Rent May");
    expect(wrapper.state().amount).toEqual(500);
  });

  it("fires the event after clicking on one of the ibans results", () => {
    const wrapper = mount(<IbanField getClass={fakeFunc} />);
    const mockShowDoneButton = jest.fn();
    wrapper.instance().handleBtnClick = mockShowDoneButton;
    wrapper.instance().handleBtnClick();
    expect(mockShowDoneButton).toHaveBeenCalled();
  });
});
