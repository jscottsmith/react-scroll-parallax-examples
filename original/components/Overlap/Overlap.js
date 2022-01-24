import React from "react";
import * as style from "./Overlap.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import circle from "bundle-text:./circle.svg";
import circleRings from "bundle-text:./circle-rings.svg";

const Overlap = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-50, 50]} translateX={[-40, 20]}>
        <Svg svg={circle} />
      </Parallax>
      <Parallax
        translateY={[-50, 50]}
        translateX={[40, -20]}
        className={style.circleRings}
      >
        <Svg svg={circleRings} />
      </Parallax>
    </div>
  </div>
);

export default Overlap;
