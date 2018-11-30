import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Router from "components/Router";

configure({ adapter: new Adapter() });

describe("Router component", () => {
  it("renders the router", () => {
    const tree = shallow(<Router />);
    expect(tree).toMatchSnapshot();
  });
});
