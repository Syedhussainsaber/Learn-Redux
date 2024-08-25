import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/saga";
import rootReducers from "../features/reducers";


const sagaMiddleware = createSagaMiddleware()




export const store = configureStore({
reducer: rootReducers,
middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

// https://dummyjson.com/users