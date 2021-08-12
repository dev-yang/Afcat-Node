import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { http,signHttp } from "./config";
function useCategory() { 
  const dispatch = useDispatch();
    return async ()=>{ 
    const {data} = await signHttp.get(`/categories`);
    dispatch({
      type: "CATEGORY_LOAD",
      data: data.results
    })
  }
}
 
export {useCategory};