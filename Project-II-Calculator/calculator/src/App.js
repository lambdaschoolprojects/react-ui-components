import React, { Component } from "react";

import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import Button from "./components/ButtonComponents/Button";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import "./App.css";

class App extends Component {
  state = {
    output: 0
  };
  renderButtons = (min, max) => {
    let buttons = [];

    for (
      let i = min;
      i <= max;
      buttons.push(
        <Button
          onButtonClick={this.onButtonClick}
          display={i}
          width={"2"}
          key={i}
          bgColor={"white"}
        />
      ),
        i++
    );

    return buttons;
  };

  onButtonClick = value => {
    let newState;
    let operators = "/*+-";

    switch (value) {
      case "Clear":
        newState = 0;
        break;
      case "=":
        newState = eval(this.state.output) + "";
        if (newState === "0") newState = 0;
        break;
      case "0":
        if (this.state.output === 0) {
          newState = 0;
          break;
        }
      case "/":
      case "*":
      case "-":
      case "+":
        if (
          this.state.output == "0" ||
          operators.includes(this.state.output[this.state.output.length - 1])
        ) {
          newState = this.state.output;
          break;
        }
      default:
        newState = this.state.output + value;
    }
    this.setState({
      output: newState
    });
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <CalculatorDisplay display={this.state.output} />
        <ButtonContainer>
          <div className={"buttonRow"}>
            <Button
              onButtonClick={this.onButtonClick}
              display={"Clear"}
              width={"3"}
              bgColor={"white"}
              extrastyles={{ fontWeight: "normal" }}
            />
            <Button
              onButtonClick={this.onButtonClick}
              display={"÷"}
              value={"/"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(7, 9)}
            <Button
              onButtonClick={this.onButtonClick}
              display={"X"}
              value={"*"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(4, 6)}
            <Button
              onButtonClick={this.onButtonClick}
              display={"-"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            {this.renderButtons(1, 3)}
            <Button
              onButtonClick={this.onButtonClick}
              display={"+"}
              width={"1"}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
          <div className={"buttonRow"}>
            <Button
              onButtonClick={this.onButtonClick}
              display={"0"}
              width={"3"}
              bgColor={"white"}
            />
            <Button
              onButtonClick={this.onButtonClick}
              display={"="}
              bgColor={"#A80025"}
              textColor={"white"}
            />
          </div>
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
