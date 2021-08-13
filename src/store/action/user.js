import { useDispatch, useSelector } from "react-redux";
import { signHttp } from "./config";

function useLoadUserProfile() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  
  return async () => {
    const { data } = await signHttp.get(`/user/profile?type=0&value=${user.id}`);
    dispatch({
      type: "USER_PROFILE",
      data: data.results
    });
  };
}

function useLoadUserArticles() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  return async () => {
    const { data } = await signHttp.get(`/user/articles?userId=${user.id}`);
    //console.log("个人发布的文章：" + data);
    dispatch({
      type: "USER_ARTICLES",
      data: data.results
    });
  };
}

function useLoadUserReplies() {
  const { user = {} } = useSelector((state) => state.guards);
  const dispatch = useDispatch();
  return async () => {
    const { data } = await signHttp.get(`/user/replies?userId=${user.id}`);
    console.log("个人回复：" + data);
    dispatch({
      type: "USER_REPLIES",
      data: data.results
    });
  };
}

export { useLoadUserProfile, useLoadUserArticles, useLoadUserReplies };
