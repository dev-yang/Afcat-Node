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
  dispatch({
        type: "GUARDS_LOGIN",
        user: document.cookie.split(',')[1].split('=')[1]
      })
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
