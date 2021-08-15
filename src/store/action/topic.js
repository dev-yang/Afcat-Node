import { useDispatch } from "react-redux";
import { signHttp } from "./config";
function useLoadTopic() { 
  const dispatch = useDispatch();
    return async (id)=>{ 
    const {data} = await signHttp.get(`/article/${id}`);
    dispatch({
      type: "TOPIC_LOAD",
      data: data.results
    })
  }
}
function useLoadViewCount() { 
    return async (id)=>{ 
    await signHttp.patch(`/article/${id}/view_count`);
    }
}
 
export {useLoadTopic,useLoadViewCount};