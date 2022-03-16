import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";

import "../../index.css";

export default function App() {
  return (
    <main>
      <ParallaxProvider>
        <header>
          <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1,
                translateY: [0, 50],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2,
                translateY: [5, 45],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg3,
                translateY: [10, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg4,
                translateY: [15, 25],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg5,
                translateY: [20, 20],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}
