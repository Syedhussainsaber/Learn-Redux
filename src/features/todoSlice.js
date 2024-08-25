import { createSlice, nanoid } from "@reduxjs/toolkit";
// import createSlice from reduxjs/toolkit;
// import nanoId for unique id generation

// initial State

const initialState = {
    todos: [{
        id:1,
        text:"Hello World"
    }]
}


export const todoSlice = createSlice({
    name:'todos',
    initialState
,
    reducers:{
        addTodos:(state, action)=>{
const todo = {
      id: nanoid(),
        text: action.payload
}
state.todos.push(todo)
        },
        removeTodos: (state, action)=>{
state.todos = state.todos.filter((todo)=>
todo.id !== action.payload
)
        }
    }
})
export const {addTodos, removeTodos} = todoSlice.actions

export default todoSlice.reducer
