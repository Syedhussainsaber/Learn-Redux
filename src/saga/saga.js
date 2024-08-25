import { all } from "redux-saga/effects";
import userSaga from "./usersSaga";


export default function* rootSaga(){
    yield all([
        userSaga(), // Add more sagas here if needed
    ])
}