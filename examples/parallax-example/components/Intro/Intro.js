import React from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./Intro.module.scss";
import { Svg } from "../";
import ring from "bundle-text:./ring-of-dots.svg";
import hemispheres from "bundle-text:./hemispheres.svg";

const Intro = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[100, -100]} className={style.ring}>
        <Svg svg={ring} />
      </Parallax>
      <Parallax translateY={[50, -50]} className={style.circle}>
        <div className={style.parallaxInner}>
          <div className={style.circleInner} />
        </div>
      </Parallax>
      <Svg className={style.hemispheres} svg={hemispheres} />
    </div>
    <p className={style.scroll}>Scroll</p>
  </div>
);

export default Intro;
