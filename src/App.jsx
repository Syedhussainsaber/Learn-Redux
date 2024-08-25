import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Users from './components/Users'


function App() {

  return (
    <>
<h1>Todo App</h1>
<AddTodo/>
<Todos/>
<Users/>
    </>
  )
}

export default App
