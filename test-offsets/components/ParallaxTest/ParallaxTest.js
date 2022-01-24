import React from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./ParallaxTest.module.scss";

const INC_AMOUNT = 10;
const START_NUM_ELEMENTS = 10;

export class ParallaxTest extends React.Component {
  state = {
    elements: new Array(START_NUM_ELEMENTS).fill(null).map((x, i) => i),
    offsetY: INC_AMOUNT,
    slowerScrollRate: false,
    unitPercent: false,
    disabled: false,
  };

  handleAdd = () => {
    const elements = [...this.state.elements, this.state.elements.length];
    this.setState({
      elements,
    });
  };

  handleRemove = () => {
    const elements = this.state.elements.slice(
      0,
      this.state.elements.length - 1
    );
    this.setState({
      elements,
    });
  };

  increaseOffsetY = () => {
    const offsetY = this.state.offsetY + INC_AMOUNT;
    this.setState({
      offsetY,
    });
  };

  decreaseOffsetY = () => {
    const offsetY =
      this.state.offsetY - INC_AMOUNT < 0 ? 0 : this.state.offsetY - INC_AMOUNT;
    this.setState({
      offsetY,
    });
  };

  toggleSpeed = () => {
    const slowerScrollRate = !this.state.slowerScrollRate;
    this.setState({
      slowerScrollRate,
    });
  };

  toggleValue = () => {
    const unitPercent = !this.state.unitPercent;
    this.setState({
      unitPercent,
    });
  };

  toggleDisabled = () => {
    const disabled = !this.state.disabled;
    this.setState({
      disabled,
    });
  };

  mapToParallax() {
    const offsetY = this.state.offsetY;
    const slowerScrollRate = this.state.slowerScrollRate;

    return this.state.elements.map((number, i) => {
      const unit = this.state.unitPercent ? "%" : "px";

      const a = offsetY * -1 * i + unit;
      const b = offsetY * i + unit;

      const translateY = slowerScrollRate ? [a, b] : [b, a];

      return (
        <span className={`${style.item} parallax-outer`}>
          <Parallax
            key={i}
            disabled={this.state.disabled}
            translateY={translateY}
            className="parallax-inner"
          >
            {number}
          </Parallax>
        </span>
      );
    });
  }

  render() {
    return (
      <div className={style.parallaxTest}>
        <h1 className={style.h1}>{this.mapToParallax()}</h1>
        <div className={style.buttons}>
          <div className={style.currentState}>
            <h4>
              Parallax Elements:
              <span className={style.value}>{this.state.elements.length}</span>
            </h4>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleRemove}>Remove</button>
          </div>
          <div className={style.currentState}>
            <h4>
              Y Offsets:
              <span className={style.value}>
                {this.state.offsetY}
                {this.state.unitPercent ? "%" : "px"}
              </span>
            </h4>
            <button onClick={this.increaseOffsetY}>Increase</button>
            <button onClick={this.decreaseOffsetY}>Decrease</button>
          </div>
          <div className={style.currentState}>
            <h4>
              translatY:
              <span className={style.value}>
                {this.state.slowerScrollRate
                  ? `[-${this.state.offsetY}${
                      this.state.unitPercent ? "%" : "px"
                    }, ${this.state.offsetY}${
                      this.state.unitPercent ? "%" : "px"
                    }]`
                  : `[${this.state.offsetY}${
                      this.state.unitPercent ? "%" : "px"
                    }, -${this.state.offsetY}${
                      this.state.unitPercent ? "%" : "px"
                    }]`}
                {/* {this.state.slowerScrollRate ? "Slower" : "Faster"} */}
              </span>
            </h4>
            <button onClick={this.toggleSpeed}>
              {this.state.slowerScrollRate ? "Faster" : "Slower"}
            </button>
          </div>
          <div className={style.currentState}>
            <h4>
              Unit:
              <span className={style.value}>
                {this.state.unitPercent ? "Percent" : "Pixels"}
              </span>
            </h4>
            <button onClick={this.toggleValue}>
              {this.state.unitPercent ? "Pixels" : "Percent"}
            </button>
          </div>
          <div className={style.currentState}>
            <h4>
              Disabled:
              <span className={style.value}>
                {this.state.disabled ? "True" : "False"}
              </span>
            </h4>
            <button onClick={this.toggleDisabled}>
              {this.state.disabled ? "Enable" : "Disable"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
