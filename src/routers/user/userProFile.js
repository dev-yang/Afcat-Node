import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLoadUserProfile } from "../../store/action/user";

function UserProfile(props) {
    const userId = useLocation().pathname.split('/')[2];
    const { profile = {} } = useSelector((state) => state.user);
    const getUserProfile = useLoadUserProfile();
    useEffect(() => {
        getUserProfile(userId);

    }, [userId])
    let avatatHttp = 'http://39.99.151.246/';
    return <div>
        {profile.username ? <Card type="inner" title={<a href="/">主页/</a>}>
            <a href={'/user/'+profile.id}>
                <Avatar src={profile.avatar?profile.avatar.indexOf('https') !== -1?profile.avatar:avatatHttp+profile.avatar:''} icon={<UserOutlined />} />
            </a>
            <div>姓名：{profile.username}</div>
        </Card> : ''}

    </div>

}

export default UserProfile;
