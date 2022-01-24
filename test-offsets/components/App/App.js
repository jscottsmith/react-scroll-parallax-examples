import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxTest } from "../";

export class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <ParallaxTest />
      </ParallaxProvider>
    );
  }
}
