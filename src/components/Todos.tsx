import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css';
import TodoContext from "../store/todo-contex";
const Todos:React.FC= () => {
  const todoCtx = useContext(TodoContext)

  return (
    <ul className={classes.todo}>
    {todoCtx.Items.map(item=>(
       <TodoItem key={item.id} text={item.text} onclick={todoCtx.removeItem.bind(null, item.id)}/>
    ))}
    </ul>
  )
}

export default Todos
