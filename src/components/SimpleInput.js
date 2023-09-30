
import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    ValueChangeHandler: nameChangedHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim()!=='');

  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
    ValueChangeHandler: emailChangedHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  } = useInput(value=>value.trim().includes("@"));


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && enteredEmailIsValid) {
      return;
    }
    console.log("entered name " + enteredName);
    console.log("entered Email " + enteredEmail);
    resetNameInput()
    resetEmailInput()
  };

  const nameInputClasese = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasese = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasese}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError && <p className="error-text">Name is not valid</p>}

      <div className={emailInputClasese}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError && <p className="error-text">Email is Not valid</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
