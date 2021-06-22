/**
 * Testing Header component for the Gatsby project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";
import renderer from "react-test-renderer";

import Header from "../Header";


describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
