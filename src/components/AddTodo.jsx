import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../features/todoSlice'



const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()


    const addTodoHandle = (e)=>{
        e.preventDefault()
dispatch(
            addTodos(input)
        )
        setInput("")
    }

  return (
    <div>
<form onSubmit={addTodoHandle}>
    <label htmlFor="todo-text">Enter the todo!</label>
<input type="text" name='todo' value={input} onChange={(e) => setInput(e.target.value)} id='todo-text' />
<button type="submit">Submit</button>
</form>
    </div>
  )
}



export default AddTodo
