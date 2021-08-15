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
   // await signHttp.post(`/article/${id}/view_count`);
     fetch(signHttp,{
                method:'post',
                headers: {
                  "content-type": "application/text",
                },
                body:`/article/${id}/view_count`
     }).then((response)=>{ })

   
  }
}
 
export {useLoadTopic,useLoadViewCount};