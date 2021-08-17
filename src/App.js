import { useEffect } from "react";
import RootRoutes from "./routers/index";
import { Layout,Row,Col} from "antd";
import "antd/dist/antd.css";
import "./static/css/style.css";
import Header from "./component/header";
import { useDispatch } from "react-redux";
import getCokie from './store/action/guards';
/*
  入场动画
*/


function App() {
  const dispatch = useDispatch();
 useEffect(() => {
   if(document.cookie &&document.cookie !=''){
     const getCookies = document.cookie.slice(5).split(',');
     const user = {};
     getCookies.map((item,index)=>{
          user[item.split('=')[0]] = item.split('=')[1];
     })
     if(user.isLogin){
        dispatch({
          type: "GUARDS_LOGIN",
          user: user
        })
     }
   } 
 })
 

  return <Layout>
    <Header/>
    <Layout.Content className="main">
        <RootRoutes />
    </Layout.Content >
    {
      /*
        <Layout.Footer className="footer">
      6454654
    </Layout.Footer>
      
      */

    }
  </Layout>
}

export default App;
