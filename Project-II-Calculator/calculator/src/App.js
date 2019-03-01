import React from "react";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <div>
      <ButtonContainer>
        <NumberButton value={"1"} />
        <ActionButton value={"x"} />
      </ButtonContainer>
    </div>
  );
};

export default App;
