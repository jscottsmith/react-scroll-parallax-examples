import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxExample } from "../";

export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <ParallaxExample />
      </ParallaxProvider>
    );
  }
}
