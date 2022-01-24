import React, { Component } from "react";
import {
  Intro,
  IntroCopy,
  Marquee,
  TriangleGrid,
  Overlap,
  Svg,
  ShapeField,
} from "../";

import * as style from "./ParallaExample.module.scss";

import noisePattern from "bundle-text:../shared/noise-pattern.svg";
import dotPattern from "bundle-text:../shared/dot-pattern.svg";

export default class ParallaxExample extends Component {
  render() {
    return (
      <div className={style.root}>
        <Intro />
        <IntroCopy />
        <ShapeField />
        <Marquee />
        <Overlap />
        <TriangleGrid />

        {/** Shared SVG patterns */}
        <div className="visually-hidden">
          <Svg svg={noisePattern} />
          <Svg svg={dotPattern} />
        </div>
      </div>
    );
  }
}
