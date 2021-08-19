import {combineReducers, createStore} from "redux";
import topics from "./reducer/topics"; 
import guards from "./reducer/guards";
import topic from "./reducer/topic"; 
import replies from "./reducer/replies"; 
import user from "./reducer/user";
import category from "./reducer/category";
import userArticles from "./reducer/userArticles"; 
import userReplies from "./reducer/userReplies"; 
import userInfo from "./reducer/userInfo";
export default createStore(combineReducers({
    topics,
    guards,
    topic,
    replies,
    user,
    category,
    userArticles,
    userReplies,
    userInfo,
}));



