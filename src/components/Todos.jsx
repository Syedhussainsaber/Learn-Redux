import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodos } from '../features/todoSlice'


const Todos = () => {
    const todos = useSelector(state => state?.todos?.todos)
    const dispatch = useDispatch()

const removeTodosHandle = (id)=>{
dispatch(
    removeTodos(id)
)
}

console.log(todos, "Todos")

  return (
    <div>
        <h4>Todos</h4>
    <ul>
        {
            todos?.map((todo)=>(<li key={todo?.id}>{todo?.text} <button onClick={() => removeTodosHandle(todo?.id)}>remove</button></li>))
        }
    </ul>

    </div>
  )
}

export default Todos
