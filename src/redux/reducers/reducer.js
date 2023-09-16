import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import numberReducer from "./numberReducer";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    numberReducer

})   