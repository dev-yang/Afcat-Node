import { useEffect } from "react";
import RootRoutes from "./routers/index";
import { Layout} from "antd";
import "antd/dist/antd.css";
import "./static/css/style.css";
import Header from "./component/header";
import { useDispatch } from "react-redux";
import user from './component/indexComponent/getCookie';
 
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(user.isLogin){
      dispatch({
        type: "GUARDS_LOGIN",
        user: user
      })
    }
  })
 

  return <Layout>
    <Header/>
    <Layout.Content className="main">
        <RootRoutes />
    </Layout.Content >
    {
    /*
      <Layout.Footer className="footer"> </Layout.Footer>
    */
    }
  </Layout>
}

export default App;
