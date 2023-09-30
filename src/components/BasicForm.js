import useInput2 from "../hooks/use-Input2";

const Isempty = (value) => {
  return value.trim() !== "";
};

const BasicForm = (props) => {
  const {
    value: fristName,
    isValid: fristNameIsValid,
    hasError:fristhasError,
    inputChangeHandler:firstNameChangeHandler,
    inputBlurHandler : firstNameBlurHandler ,
    resetValue:resetFirstName ,
  } = useInput2(Isempty);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError:lasthasError,
    inputChangeHandler:lastNameChangeHandler,
    inputBlurHandler : lastNameBlurHandler ,
    resetValue:resetLastName ,
  } = useInput2(Isempty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError:emailhasError,
    inputChangeHandler:emailChangeHandler,
    inputBlurHandler : emailBlurHandler ,
    resetValue:resetEmail ,
  } = useInput2((value)=>value.trim().includes('@'));

  let isFormvalid = false;

  if(emailIsValid && lastNameIsValid &fristNameIsValid){
    isFormvalid = true;
  }
  
  const submitFormHandler = (event) =>{
    event.preventDefault();
    if(!isFormvalid){
      console.log('wrong')
      return;
    }
    console.log(emailValue+' '+fristName+' '+lastName)
    resetEmail();
    resetFirstName();
    resetLastName();
  }

  const firstInputClasses = !fristhasError
  ? "form-control"
  : "form-control invalid";
  const lastInputClasses = !lasthasError
  ? "form-control"
  : "form-control invalid";

  const emailClasses = !emailhasError
  ? "form-control"
  : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fristName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {fristhasError && <p className="error-text">First Name is not valid</p>}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
            {lasthasError && <p className="error-text">Last Name is not valid</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
            {emailhasError && <p className="error-text">Email is not valid</p>}
        </div>
      <div className="form-actions">
        <button disabled={!isFormvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
