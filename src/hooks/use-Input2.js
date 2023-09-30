import { useState } from "react";

const useInput2 = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const InputIsValid = validation(enteredValue);
  const hasError = !InputIsValid && isTouched;
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetValue = ()=>{
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    hasError,
    isValid:InputIsValid,
    inputChangeHandler,
    inputBlurHandler,
    resetValue
  };
};


export default useInput2