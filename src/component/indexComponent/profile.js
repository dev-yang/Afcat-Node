/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Profile({title="个人信息"}) {
  const { user = {} } = useSelector((state) => state.guards);
  const { replace } = useHistory();
  return (
    <div>
      <Card type="inner" title={title}>
        <a href="javascript:;" onClick={()=>replace('/user')}>
          <Avatar src={user.avatar} icon={<UserOutlined />} />
        </a>
        <div>姓名：{user.username}</div>
      </Card>
    </div>
  );
}

export default Profile;
