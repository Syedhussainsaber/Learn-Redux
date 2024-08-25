import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import usersSlice from "./usersSlice";

const rootReducers = combineReducers(
    {
        todos: todoSlice,
        users: usersSlice
    }
)


export default rootReducers;