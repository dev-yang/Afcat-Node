import {Affix, Col, Layout, Row} from "antd"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./nav";
import { loginNavs, navs } from "../routers/router.config";
import img from '../static/image/cnodejs_light.svg';
//import img from '../static/image/afcat.jpeg';
import imgLogo from '../static/image/afcatLogo.png';

function Header() {
    const { isLogin } = useSelector((state) => state.guards);
    return <Affix offsetTop={0} className="header">
        <Layout.Header style={{height:"48px"}}>
            <Row className="wrap">
                <Col span={10}>
                   <h1 id="logo">
                      <Link to="/">
                        <img src={imgLogo} alt="logo图片" style={{width:"36px",height:"36px",margin: "0 5px"}}/>
                        <span>亚联信息 AFCAT</span>
                        {/* <img src={img} alt="logo图片" className='logo'/> */}
                      </Link>
                      <input type="text" className="inputSearch"/>
                   </h1>
                </Col>
                <Col span={14}>
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