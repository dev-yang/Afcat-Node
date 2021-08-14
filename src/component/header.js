import {Affix, Col, Layout, Row} from "antd"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./nav";
import { loginNavs, navs } from "../routers/router.config";
//import img from '../static/image/cnodejs_light.svg';
import img from '../static/image/afcat.jpeg';

function Header() {
    const { isLogin } = useSelector((state) => state.guards);
    console.log()

    return <Affix offsetTop={0} className="header">
        <Layout.Header style={{height:"40px"}}>
            <Row className="wrap">
                <Col span={8}>
                   <h1 id="logo">
                      <Link to="/">
                        <img src={img} alt="logo图片" className='logo'/>
                      </Link>
                      <input type="text" className="inputSearch"/>
                   </h1>
                </Col>
                <Col span={16}>
                    <Nav 
                      data={isLogin?loginNavs:navs}
                      style={{
                        float:"right"
                      }}
                      getSelectedKey={({pathname})=>{
                        return navs.findIndex(item=>item.to === pathname)
                      }}
                      theme="dark"
                    />
                </Col>
            </Row>
        </Layout.Header>
    </Affix>
}

export default Header;