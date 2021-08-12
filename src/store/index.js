import {combineReducers, createStore} from "redux";
import topics from "./reducer/topics"; 
import guards from "./reducer/guards";
import topic from "./reducer/topic"; 
import replies from "./reducer/replies"; 
export default createStore(combineReducers({
    topics,
    guards,
    topic,
    replies
}));
