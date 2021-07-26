import CounterReducer from "./CounterReducer"

import { combineReducers } from "redux"

const rootReducer =combineReducers(
    {
        Counter:CounterReducer,
    }
)
export default  rootReducer