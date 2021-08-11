import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http1 } from "./config";
// hooks 放在组件最外层，数据请求，要放在副作用中
function useLoadTopic() { 
  const dispatch = useDispatch();
  //return async (id = '6100f54de3e67140e158fe63')=>{
    return async (id)=>{ 
    const {data} = await http1.get(`/${id}`);
    console.log(data);
    dispatch({
      type: "TOPIC_LOAD",
      data: data.data
    })
  }
}

export {useLoadTopic};