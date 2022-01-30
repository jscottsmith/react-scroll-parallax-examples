import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxExample } from "../";

export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <main
          style={{
            overflow: "hidden",
            background: "#1f1f1f",
          }}
        >
          <ParallaxExample />
          <ParallaxExample />
          <ParallaxExample />
          <ParallaxExample />
        </main>
      </ParallaxProvider>
    );
  }
}
