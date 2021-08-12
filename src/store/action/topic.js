import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http,signHttp } from "./config";
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
 
export {useLoadTopic};