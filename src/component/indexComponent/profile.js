/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Profile({title="个人信息"}) {
  const { user = {} } = useSelector((state) => state.guards);
  const { avatar } = useSelector(state=>state.userInfo) 

 // const { replace } = useHistory();
  return (
    <div>
      <Card type="inner" title={title}>
        {/* <a href={/user/+user.userId} onClick={()=>replace('/user')}> */}
        {/* <a href={/user/+user.id}>
          <Avatar src={avatar} icon={<UserOutlined />} />
        </a> */}
        <Link to={'/user/'+user.id}><Avatar src={user.avatarStr||avatar} icon={<UserOutlined />} /></Link>
        <div>姓名：{user.username}</div>
      </Card>
    </div>
  );
}

export default Profile;
