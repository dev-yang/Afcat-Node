import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http,signHttp } from "./config";
function useLoadTopic() { 
  const dispatch = useDispatch();
  //return async (id = '6100f54de3e67140e158fe63')=>{
    return async (id)=>{ 
    const {data} = await signHttp.get(`/api/article/${id}`);
    //console.log(data);
    dispatch({
      type: "TOPIC_LOAD",
      data: data.results
    })
  }
}

export {useLoadTopic};