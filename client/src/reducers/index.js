import { combineReducers } from "redux";
import authReducer from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/reducers/auth.js'
import currentUserReducer from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/reducers/currentUser.js'
import questionReducer from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/reducers/questions.js'
import usersReducer from "/Users/sujiths/vscodeprojects/Stack Overflow/client/src/reducers/users.js";


export default combineReducers({
    authReducer,currentUserReducer,questionReducer,usersReducer
})