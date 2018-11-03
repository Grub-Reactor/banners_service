import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "../../client/src/components/app.jsx";
import Name from "../../client/src/components/name.jsx";
import Address from "../../client/src/components/address.jsx";
import Contact from "../../client/src/components/contact.jsx";
import Rating from "../../client/src/components/rating.jsx";
import Reviews from "../../client/src/components/reviews.jsx";

describe("<Name />", () => {
  it("renders a `.nameview`", () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.find(".nameview").length).toEqual(1);
    expect(wrapper.find(Name).length).toEqual(0);
  });
  it("should render a span element", () => {
    const mounted = mount(<span className="nameview" />);
    expect(mounted.exists(".nameview")).toEqual(true);
  });
});

describe("<Address />", () => {
  it("renders a `.addressview`", () => {
    const wrapper = shallow(<Address />);
    expect(wrapper.find(".addressview").length).toEqual(1);
    expect(wrapper.find(Address).length).toEqual(0);
  });
  it("should render a span element", () => {
    const mounted = mount(<span className="addressview" />);
    expect(mounted.exists(".addressview")).toEqual(true);
  });
});

describe("<Contact />", () => {
  it("renders a `.contactview`", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(".contactview").length).toEqual(1);
    expect(wrapper.find(Contact).length).toEqual(0);
  });
  it("should render a span element", () => {
    const mounted = mount(<span className="contactview" />);
    expect(mounted.exists(".contactview")).toEqual(true);
  });
});

describe("<Rating />", () => {
  it("renders a `.ratingview`", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find(".ratingview").length).toEqual(1);
    expect(wrapper.find(Rating).length).toEqual(0);
  });
  it("should render `.stars`, `.fas fa-star`, `.push popover__content`, `popimage`", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find(".stars").length).toEqual(1);
    expect(wrapper.find(".fas fa-star").length).toEqual(0);
    expect(wrapper.find(".push popover__content").length).toEqual(0);
    expect(wrapper.find(".popimage").length).toEqual(1);
  });
  it("should render a div element", () => {
    const mounted = mount(<div className="ratingview" />);
    expect(mounted.exists(".ratingview")).toEqual(true);
  });
});

describe("<Reviews />", () => {
  it("renders a `.reviews`", () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find(".reviews").length).toEqual(1);
    expect(wrapper.find(Reviews).length).toEqual(0);
  });
  it("should render a span element", () => {
    const mounted = mount(<span className="reviews" />);
    expect(mounted.exists(".reviews")).toEqual(true);
  });
});

describe("<App />", () => {
  it("renders the setState method", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ restaurant: null });
    expect(wrapper.find("data").length).toEqual(0);
  });
});



