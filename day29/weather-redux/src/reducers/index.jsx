import { combineReducers } from "redux";
import PlaceReducer from "./PlaceReducer";
import PlaceDataReducer from "./PlaceDataReducer";

const rootReducer =combineReducers({
    place:PlaceReducer,
    placeData: PlaceDataReducer
})

export default rootReducer