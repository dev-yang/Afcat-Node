import {Button} from 'antd';
import {Link} from 'react-router-dom';

export default function GitLogin(){
    return <div className="gitLogin">
        <h6>CNode：Node.js专业中文社区</h6>
        <p>您可以 登录 或 注册 , 也可以</p>
        <Button type="primary">
            <a href="https://github.com/login" replace="true">通过 GitHub 登录</a></Button>
    </div>
}