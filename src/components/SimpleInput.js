import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsvalid,setFormIsValid]= useState(false);





const enteredNameIsValid = enteredName.trim()!=='';

let formIsvalid = false;

  if(enteredNameIsValid){
    formIsvalid(true);
  }
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };


  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(!enteredNameIsValid){
      return
    }
    console.log("entered name " + enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
    };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasese = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasese}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
