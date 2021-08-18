import {combineReducers, createStore,applyMiddleware} from "redux";
import topics from "./reducer/topics"; 
import guards from "./reducer/guards";
import topic from "./reducer/topic"; 
import replies from "./reducer/replies"; 
import user from "./reducer/user";
import category from "./reducer/category";
import userArticles from "./reducer/userArticles"; 
import userReplies from "./reducer/userReplies"; 
import userInfo from "./reducer/userInfo";

// import thunk from "redux-thunk";
// import {persistStore,persistReducer} from  'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session'


// const persistConfig = {
//     key: 'root',
//     storage:storageSession
// }

//const myPersistReducer = persistReducer(persistConfig, guards)
//const store = createStore(myPersistReducer, applyMiddleware(thunk))
//const persistor = persistStore(store);


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



