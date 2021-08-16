import { useDispatch } from "react-redux";
import { signHttp } from "./config";
// hooks 放在组件最外层，数据请求，要放在副作用中
function useGetReplys() { 
  const dispatch = useDispatch();
  return async (id,page=1,limit=5)=>{ 
    const {data} = await signHttp.get(`/replies?articleId=${id}&page=${page}&limit=${limit}`);
    dispatch({
      type: "REPLIES_LOAD",
      data: data.results
    })
  }
}

export {useGetReplys};