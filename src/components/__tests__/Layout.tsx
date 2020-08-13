/**
 * Testing file for Layout component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";

import Layout from "../Layout";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
