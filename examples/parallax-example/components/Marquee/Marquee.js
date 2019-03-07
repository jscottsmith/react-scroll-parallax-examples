import React from "react";
import style from "./Marquee.scss";
import { Svg } from "components";
import { Parallax } from "react-scroll-parallax";
import boxBg from "!!raw-loader!./box-bg.svg";
import boxOutline from "!!raw-loader!./box-outline.svg";
import divider from "!!raw-loader!../shared/divider.svg";

const Marquee = () => (
    <div className={style.root}>
        <Svg svg={divider} className={style.divider} />
        <div className={style.container}>
            <Svg svg={boxBg} className={style.boxBg} />
            <Parallax className={style.text} y={[-70, 70]} x={[30, -30]}>
                <span className="h1">Horizontal</span>
            </Parallax>
            <Parallax className={style.boxOutline} y={[-35, 35]}>
                <Svg svg={boxOutline} />
            </Parallax>
        </div>
    </div>
);

export default Marquee;
