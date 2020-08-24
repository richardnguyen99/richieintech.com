/**
 * Testing file for Header component
 *
 * @author Richard Nguyen <Richard.ng0616@gmail.com>
 */
import React from "react";
import renderer from "react-test-renderer";

import Header from "../Header";

describe("Header", () => {
  it("rendered correctly", () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
