import { useDispatch } from "react-redux";
function getCokie(){
   /// const dispatch = useDispatch();
    const isLogin = document.cookie();

    console.log(document.cookie())
   alert(1)


    if( isLogin ){
        // dispatch({
        //     type: "GUARDS_LOGIN",
        //     user: '123'
        //   })
    }
    

   
}


export default getCokie;