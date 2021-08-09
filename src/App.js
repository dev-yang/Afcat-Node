import RootRoutes from "./routers/index";
import { Layout,Row,Col} from "antd";
import "antd/dist/antd.css";
import "./static/css/style.css";
import Header from "./component/header";
/*
  入场动画
*/
function App() {
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
  </Layout>;
}

export default App;
