import React, { Component } from "react";

import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import Button from "./components/ButtonComponents/Button";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import "./App.css";

class App extends Component {
  renderButtons = (min, max) => {
    let buttons = [];

    for (
      let i = min;
      i <= max;
      i++, buttons.push(<Button value={i} width={"2"} bgColor={"white"} />)
    );

    return buttons;
  };
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <CalculatorDisplay />
        <ButtonContainer>
          <div className={"buttonRow"}>
            <Button
              value={"Clear"}
              width={"3"}
              bgColor={"white"}
              extrastyles={{ fontWeight: "normal" }}
            />
            <Button value={"÷"} bgColor={"#A80025"} textColor={"white"} />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(7, 9)}
            <Button
              value={"X"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(4, 6)}
            <Button
              value={"-"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(1, 3)}
            <Button
              value={"+"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            <Button value={"0"} width={"3"} bgColor={"white"} />
            <Button value={"="} bgColor={"#A80025"} textColor={"white"} />
          </div>
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
