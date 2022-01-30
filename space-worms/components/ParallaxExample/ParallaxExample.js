import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import cx from "classnames";
import { Spaceworms } from "../Spaceworms";

import worm1 from "../../image/worm-1.png";
import worm2 from "../../image/worm-2.png";
import worm3 from "../../image/worm-3.png";
import worm4 from "../../image/worm-4.png";
import worm5 from "../../image/worm-5.png";
import worm6 from "../../image/worm-6.png";

import * as styles from "./ParallaExample.module.scss";

export default function ParallaxExample() {
  const target = useRef();

  const parallax1 = useParallax({
    speed: -40,
    rotate: [-30, 30],
  });
  const parallax2 = useParallax({
    speed: -20,
    rotate: [-30, 50],
  });
  const parallax3 = useParallax({
    speed: 10,
    rotate: [-60, 0],
  });
  const parallax4 = useParallax({
    speed: 20,
    rotate: [-30, 50],
  });
  const parallax5 = useParallax({
    speed: 40,
    rotate: [-30, 30],
  });
  const parallax6 = useParallax({
    speed: 60,
    rotate: [-30, 50],
  });

  return (
    <div>
      <p className={styles.artist}>
        Art adapted from{" "}
        <a
          href="https://www.figma.com/community/file/1066061995156177203"
          target="_blank"
          rel="noreferrer noopener"
        >
          Spaceworms
        </a>{" "}
        by{" "}
        <a
          href="http://www.fonsmans.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Fons Mans
        </a>
      </p>
      <div className={styles.root} ref={target}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-around",
            position: "absolute",
            textAlign: "center",
            inset: 0,
          }}
        >
          <Spaceworms zIndex="1" />
          <Spaceworms zIndex="2" />
          <Spaceworms zIndex="4" />
          <Spaceworms zIndex="3" />
          <Spaceworms zIndex="5" />
        </div>
        <img
          src={worm1}
          className={cx(styles.layer, styles.layer1)}
          ref={parallax1.ref}
          onLoad={() => parallax1.controller.update()}
          draggable={false}
        />
        <img
          src={worm2}
          className={cx(styles.layer, styles.layer2)}
          ref={parallax2.ref}
          onLoad={() => parallax2.controller.update()}
          draggable={false}
        />
        <img
          src={worm3}
          className={cx(styles.layer, styles.layer3)}
          ref={parallax3.ref}
          onLoad={() => parallax3.controller.update()}
          draggable={false}
        />
        <img
          src={worm4}
          className={cx(styles.layer, styles.layer4)}
          ref={parallax4.ref}
          onLoad={() => parallax4.controller.update()}
          draggable={false}
        />
        <img
          src={worm5}
          className={cx(styles.layer, styles.layer5)}
          ref={parallax5.ref}
          onLoad={() => parallax5.controller.update()}
          draggable={false}
        />
        <img
          src={worm6}
          className={cx(styles.layer, styles.layer6)}
          ref={parallax6.ref}
          onLoad={() => parallax6.controller.update()}
          draggable={false}
        />
      </div>
    </div>
  );
}
