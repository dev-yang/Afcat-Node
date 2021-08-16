import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLoadUserProfile } from "../../store/action/user";

function UserProfile(props) {
    const userId = useLocation().pathname.split('/')[2];
    const { replace } = useHistory();
    const { profile = {} } = useSelector((state) => state.user);
    const { avatar } = useSelector(state=>state.userInfo);
    const getUserProfile = useLoadUserProfile();
    useEffect(() => {
        getUserProfile(userId);

    }, [])

    return <div>
        {profile.username ? <Card type="inner" title={<a href="/">主页/</a>}>
            <a href={'/user/'+profile.userId} onClick={() => replace('/user')}>
                <Avatar src={avatar} icon={<UserOutlined />} />
            </a>
            <div>姓名：{profile.username}</div>
        </Card> : ''}

    </div>

}

export default UserProfile;
