import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
function Nav(props) {
  const {theme="light",getSelectedKey=(()=>{}),data,...restProps} = props;
  const location = useLocation();
  const selectedKey = getSelectedKey(location);
  console.log(data);

  return <Menu
    mode="horizontal"
    theme={theme}
    selectedKeys = {[selectedKey+""]}
    {...restProps}
  >
    {
      data.map((item,index)=>{
          return <Menu.Item key={index}>
              <Link to={item.to}>{item.title}</Link>
          </Menu.Item>
      })
    }
  </Menu> 
}
export default Nav;