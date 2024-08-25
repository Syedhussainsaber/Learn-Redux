import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../features/usersSlice";



function* fetchUsersSaga() {
try{
const response = yield call(axios.get, 'https://dummyjson.com/users')
console.log(response, "response")
yield put(fetchUsersSuccess(response?.data?.users))
}
catch(err){
yield put(fetchUsersFailure(err.message))
}
}


export default function* userSaga(){
yield takeEvery(fetchUsersRequest.type, fetchUsersSaga)
}