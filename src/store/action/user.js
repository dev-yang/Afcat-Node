import { useDispatch, useSelector } from "react-redux";
import { signHttp } from "./config";

function useLoadUserProfile() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  
  return async (userId) => {
    const { data } = await signHttp.get(`/user/profile?type=0&value=${userId}`);
    dispatch({
      type: "USER_PROFILE",
      profile: data.results
    });
  };
}

function useLoadUserArticles() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  return async (userId) => {
    const { data } = await signHttp.get(`/user/articles?userId=${userId}`);
    dispatch({
      type: "USER_ARTICLES",
      articles: data.results
    });
  };
}

function useLoadUserReplies() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  return async (userId) => {
    const { data } = await signHttp.get(`/user/replies?userId=${userId}`);
    console.log(data);
    dispatch({
      type: "USER_REPLIES",
      replies: data.results
    });
  };
}

export { useLoadUserProfile, useLoadUserArticles, useLoadUserReplies };
