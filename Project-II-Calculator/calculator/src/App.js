import React from "react";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import Button from "./components/ButtonComponents/Button";

const App = () => {
  return (
    <div style={{ margin: "50px" }}>
      <ButtonContainer>
        <div className={"buttonRow"}>
          <Button value={"Clear"} width={"3"} bgColor={"white"} />
          <Button value={"÷"} bgColor={"red"} textColor={"white"} />
        </div>
        <div className={"buttonRow"}>
          {renderButtons(7, 9)}
          <Button value={"X"} width={"1"} bgColor={"red"} textColor={"white"} />
        </div>
        <div className={"buttonRow"}>
          {renderButtons(4, 6)}
          <Button value={"-"} width={"1"} bgColor={"red"} textColor={"white"} />
        </div>
        <div className={"buttonRow"}>
          {renderButtons(1, 3)}
          <Button value={"+"} width={"1"} bgColor={"red"} textColor={"white"} />
        </div>
        <div className={"buttonRow"}>
          <Button value={"0"} width={"3"} bgColor={"white"} />
          <Button value={"="} bgColor={"red"} textColor={"white"} />
        </div>
      </ButtonContainer>
    </div>
  );
};

const renderButtons = (min, max) => {
  let buttons = [];

  for (
    let i = min;
    i <= max;
    i++, buttons.push(<Button value={i} width={"2"} bgColor={"white"} />)
  );

  return buttons;
};

export default App;
