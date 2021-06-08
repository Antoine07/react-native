import { combineReducers } from "redux";
import vote from "./vote";
import memory from "./memory";

export default combineReducers({
    vote : vote, // un reducer 
    memory : memory
});