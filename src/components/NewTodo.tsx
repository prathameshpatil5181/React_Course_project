import React, {useContext, useRef} from "react";
import classes from './NewTodo.module.css'
import TodoContext from "../store/todo-contex";
const NewTodo:React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const todoCtx = useContext(TodoContext)


    const submitFormHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        let enteredText = inputRef.current!.value;

            if(enteredText.trim().length === 0){
                return;
            }

            todoCtx.addItem(enteredText);
           inputRef.current!.value='';
    }
  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputRef} type="text" id='text'/>
      <button>ADD Todo</button>
    </form>
  );
};

export default NewTodo;
