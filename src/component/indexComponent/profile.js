/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SettingPage from "../../routers/setting";

function Profile({title="个人信息"}) {
  const { user = {} } = useSelector((state) => state.guards);
  const { avatar } = useSelector(state=>state.userInfo)
  let avatatHttp = 'http://39.99.151.246/';

 // const { replace } = useHistory();
  return (
    <div>
      <Card type="inner" title={title}>
        {/* <a href={/user/+user.userId} onClick={()=>replace('/user')}> */}
        {/* <a href={/user/+user.id}>
          <Avatar src={avatar} icon={<UserOutlined />} />
        </a> */}
        <Link to={'/user/'+user.id}><Avatar src={(avatar?
                (avatar.indexOf('http') !== -1?avatar:avatatHttp+avatar):
                (user.avatarStr.indexOf('http') !== -1?user.avatarStr:avatatHttp+user.avatarStr))} icon={<UserOutlined />} /></Link>
        <div>姓名：{user.username}</div>
        <SettingPage />
      
      </Card>
    </div>
  );
}

export default Profile;
