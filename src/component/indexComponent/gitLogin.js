import { Button, Card } from 'antd';
import { useSelector } from 'react-redux';
import Profile from './profile';

export default function GitLogin(){
    const { isLogin } = useSelector(state=>state.guards);
    if (isLogin) {
        return (
        <div>
            <Profile />
            <Card style={{marginTop:10}} size="small">
                <Button type="primary">发布话题</Button>
            </Card>
        </div>
        )
    }
    return <div className="gitLogin">
        <h6>CNode：Node.js专业中文社区</h6>
        <p>您可以 登录 或 注册 , 也可以</p>
        <Button type="primary">
            <a href="https://github.com/login" replace="true">通过 GitHub 登录</a></Button>
    </div>
}