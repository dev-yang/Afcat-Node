import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http,signHttp } from "./config";
// hooks 放在组件最外层，数据请求，要放在副作用中
function useGetReplys() { 
  const dispatch = useDispatch();
  return async (id)=>{ 
    const {data} = await signHttp.get(`/api/replies?articleId=${id}`);
    dispatch({
      type: "REPLIES_LOAD",
      data: data.results
    })
  }
}

export {useGetReplys};