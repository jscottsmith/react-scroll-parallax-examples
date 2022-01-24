import React from "react";
import * as style from "./TriangleGrid.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import gridPurple from "bundle-text:./grid-purple.svg";
import gridWhite from "bundle-text:./grid-white.svg";
import angleTop from "bundle-text:../shared/angle-dark-top.svg";

const TriangleGrid = () => (
  <main className={style.root}>
    <Svg svg={angleTop} className={style.angleTop} />
    <article className={style.copy}>
      <h1 className={style.headline}>React Scroll Parallax</h1>
      <p>
        React hooks and components to create parallax scroll effects for
        banners, images or any other DOM elements.
      </p>
      <p>
        Utilizes{" "}
        <a href="https://parallax-controller.damnthat.tv/">
          Parallax Controller
        </a>{" "}
        to add vertical or horizontal scrolling based effects to elements.{" "}
      </p>
      <p>
        <a href="https://parallax-controller.damnthat.tv/docs/performance">
          Optimized
        </a>{" "}
        to reduce jank on scroll and works with SSR and SSG rendered React apps.
      </p>
      <p>
        <code>yarn add react-scroll-parallax</code>
        <code>npm i react-scroll-parallax</code>
      </p>
      <p>
        <a className="btn" href="https://react-scroll-parallax.damnthat.tv/">
          Documentation
        </a>
        <a
          className="btn"
          href="https://github.com/jscottsmith/react-scroll-parallax"
        >
          GitHub
        </a>
        <a
          className="btn"
          href="https://www.npmjs.com/package/react-scroll-parallax"
        >
          View on NPM
        </a>
      </p>
    </article>
    <div className={style.container}>
      <Parallax translateY={[-25, 25]}>
        <Svg svg={gridPurple} className={style.trianglesPurple} />
      </Parallax>
      <Parallax translateX={[-13, 13]} translateY={[-50, 50]}>
        <Svg svg={gridWhite} />
      </Parallax>
    </div>
  </main>
);

export default TriangleGrid;
