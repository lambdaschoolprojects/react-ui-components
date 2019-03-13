import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.value = this.props.value ? this.props.value : this.props.display;
  }

  //console.log(onButtonClick);
  render() {
    const {
      value,
      action,
      width,
      bgColor,
      textColor,
      extrastyles,
      display,
      onButtonClick
    } = this.props;
    return (
      //console.log(onButtonClick);
      <button
        className={"button"}
        action={action}
        style={{
          flexGrow: width,
          backgroundColor: bgColor,
          color: textColor,
          ...extrastyles
        }}
        value={value != null ? value : display}
        onClick={() => onButtonClick(this.value)}
      >
        {display}
      </button>
    );
  }
}

export default Button;
