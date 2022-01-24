import React from "react";

import * as style from "./Svg.module.scss";

export default function Svg(props) {
  const Element = props.el;
  const className =
    `svg-container ${style.root}` +
    (props.className ? ` ${props.className}` : "");

  return (
    <Element
      style={props.style}
      className={className}
      dangerouslySetInnerHTML={{ __html: props.svg }}
    />
  );
}

Svg.defaultProps = {
  el: "span",
};
