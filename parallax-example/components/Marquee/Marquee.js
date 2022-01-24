import React from "react";
import * as style from "./Marquee.module.scss";
import { Svg } from "../";
import { Parallax } from "react-scroll-parallax";
import boxBg from "bundle-text:./box-bg.svg";
import boxOutline from "bundle-text:./box-outline.svg";
import divider from "bundle-text:../shared/divider.svg";

const Marquee = () => (
  <div className={style.root}>
    <Svg svg={divider} className={style.divider} />
    <div className={style.container}>
      <Svg svg={boxBg} className={style.boxBg} />
      <Parallax
        className={style.text}
        translateY={[-70, 70]}
        translateX={[30, -30]}
      >
        <span className="h1">Horizontal</span>
      </Parallax>
      <Parallax className={style.boxOutline} translateY={[-35, 35]}>
        <Svg svg={boxOutline} />
      </Parallax>
    </div>
  </div>
);

export default Marquee;
