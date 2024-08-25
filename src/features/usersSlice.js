import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   data:  [],
   loading: false,
   error: null,
}


export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
fetchUsersRequest: (state, action)=>{
state.loading = true
},

fetchUsersSuccess: (state, action)=>{
state.loading = false
state.data = action.payload
},

fetchUsersFailure: (state, action)=>{
state.loading = false
state.error = action.payload
}
}
})


export const {fetchUsersFailure, fetchUsersSuccess, fetchUsersRequest} =
usersSlice.actions

export default usersSlice.reducer;

