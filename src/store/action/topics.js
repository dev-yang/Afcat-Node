import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http } from "./config";
// hooks 放在组件最外层，数据请求，要放在副作用中
function useLoadTopics() { 
  const dispatch = useDispatch();
  return async (page=1,categoryId="all",limit=20)=>{
    dispatch({
      type: "TOPICS_LOADING"
    })
    const {data} = await http.get(`/?page=${page}&categoryId=${categoryId}&limit=${limit}`);
    dispatch({
      type: "TOPICS_LOAD",
      data:data.results.articles
    })
  }
}
export {useLoadTopics};