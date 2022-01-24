import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import { Svg } from "../";

import * as style from "./ShapeField.module.scss";

import cluster01HemiLeft from "bundle-text:./cluster-01-hemi-left.svg";
import cluster01HemiRight from "bundle-text:./cluster-01-hemi-right.svg";
import cluster01Rect from "bundle-text:./cluster-01-rect.svg";

import cluster02Hemi from "bundle-text:./cluster-02-hemi.svg";
import cluster02TriangleBig from "bundle-text:./cluster-02-triangle-big.svg";
import cluster02TriangleSmall from "bundle-text:./cluster-02-triangle-small.svg";

import cluster03TriangleTop from "bundle-text:./cluster-03-triangle-top.svg";
import cluster03TriangleBottom from "bundle-text:./cluster-03-triangle-bottom.svg";
import cluster03TriangleBig from "bundle-text:./cluster-03-triangle-big.svg";

import cluster04Triangle from "bundle-text:./cluster-04-triangle.svg";
import cluster04Square from "bundle-text:./cluster-04-square.svg";
import cluster04HemiRight from "bundle-text:./cluster-04-hemi-right.svg";

export default class ShapeField extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.shapeCluster01}>
          <Parallax
            translateY={[100, -100]}
            className={style.hemiLeft}
            slowerScrollRate
          >
            <Svg svg={cluster01HemiLeft} />
          </Parallax>
          <Svg svg={cluster01Rect} />
          <Parallax translateY={[-100, 100]} className={style.hemiRight}>
            <Svg svg={cluster01HemiRight} />
          </Parallax>
        </div>

        <div className={style.shapeCluster02}>
          <Svg svg={cluster02Hemi} className={style.hemi} />
          <Parallax translateY={[-30, 30]} className={style.triangleBig}>
            <Svg svg={cluster02TriangleBig} />
          </Parallax>
          <Parallax translateY={[30, -30]} className={style.triangleSmall}>
            <Svg svg={cluster02TriangleSmall} />
          </Parallax>
        </div>

        <div className={style.shapeCluster03}>
          <Parallax translateY={[60, -20]} className={style.triangleTop}>
            <Svg svg={cluster03TriangleTop} />
          </Parallax>

          <Svg svg={cluster03TriangleBottom} className={style.triangleTop} />
          <Parallax translateY={[-60, 60]} className={style.triangleBig}>
            <Svg svg={cluster03TriangleBig} />
          </Parallax>
        </div>

        <div className={style.shapeCluster04}>
          <Svg svg={cluster04Square} className={style.square} />
          <Parallax translateY={[-60, 60]} className={style.triangle}>
            <Svg svg={cluster04Triangle} />
          </Parallax>
          <Parallax translateY={[-30, 30]} className={style.hemiRight}>
            <Svg svg={cluster04HemiRight} />
          </Parallax>
        </div>
      </div>
    );
  }
}
