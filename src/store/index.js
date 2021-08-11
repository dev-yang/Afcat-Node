import {combineReducers, createStore} from "redux";
import topics from "./reducer/topics"; 
import guards from "./reducer/guards";
import topic from "./reducer/topic";
import user from "./reducer/user";
export default createStore(combineReducers({
    topics,
    guards,
    topic,
    user
}));
