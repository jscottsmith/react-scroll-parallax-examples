import React from 'react';
import style from './TriangleGrid.scss';
import { Svg } from 'components';
import { Parallax } from 'react-scroll-parallax';
import gridPurple from '!!raw-loader!./grid-purple.svg';
import gridWhite from '!!raw-loader!./grid-white.svg';
import angleTop from '!!raw-loader!../shared/angle-dark-top.svg';

const TriangleGrid = () => (
    <div className={style.root}>
        <Svg svg={angleTop} className={style.angleTop} />
        <article className={style.copy}>
            <p>
                Provides a React component and single passive scroll listener to
                add vertical scrolling based offsets to elements based on their
                position in the viewport. Works with universal (server-side
                rendered) React apps.
            </p>
            <p className="small">
                <code>npm i react-scroll-parallax --save</code>
                <br />
                <code>yarn add react-scroll-parallax</code>
            </p>
            <p>
                <a
                    className="btn"
                    href="https://github.com/jscottsmith/react-scroll-parallax"
                >
                    View on GitHub
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
            <Parallax offsetYMax={25} offsetYMin={-25}>
                <Svg svg={gridPurple} className={style.trianglesPurple} />
            </Parallax>
            <Parallax
                offsetYMax={50}
                offsetYMin={-50}
                offsetXMax={13}
                offsetXMin={-13}
            >
                <Svg svg={gridWhite} className={style.trianglesWhite} />
            </Parallax>
        </div>
    </div>
);

export default TriangleGrid;
