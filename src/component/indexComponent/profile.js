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
  return (
    <div>
      <Card type="inner" title={title}>
        <Link to={'/user/'+user.id}>
          <Avatar src={avatar?avatar:user.avatarStr} icon={<UserOutlined />} />
        </Link>
        <div>姓名：{user.username}</div>
        <SettingPage />
      
      </Card>
    </div>
  );
}

export default Profile;
