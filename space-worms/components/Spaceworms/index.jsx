import React from "react";
import { useParallax } from "react-scroll-parallax";
import * as styles from "./index.module.scss";

export const Spaceworms = (props) => {
  const text = useParallax({
    translateX: [10, -50],
  });
  return (
    <div
      className={styles.text}
      style={{
        zIndex: props.zIndex,
      }}
    >
      <div ref={text.ref}>SPACEWORMS</div>
    </div>
  );
};
