import { Button, Form, Input, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../static/css/signup.css"
import {signHttp} from "../../store/action/config";
//import {history} from 'history/history';
import { useHistory } from "react-router-dom";

function SignUpPage() {
    const { replace } = useHistory();
    const onFinish = (values) => {
        
        if (values.password !== values.repassword) {
            // 弹出提示：两次输入的密码不一致
            Modal.error({
                title: '密码不一致',
                content: '请保持密码输入一致！',
              });
            return;
        }

        // signHttp.post('/api/auth/register', {...values})
        signHttp.post('/auth/register', {...values})
          .then(function (response) {
            const reply = response.data;
            const code = reply.code;
            if (code === 0) {
                Modal.success({
                    content: '<a>恭喜您，注册成功,快去登录吧~</a>',
                });

                //let userid = reply.results.id;
                setTimeout(replace('/login'),2000)
                //replace('/login');
                //此处分发状态，header显示设置以及首页右侧显示用户信息  
            }
          })
          .catch(function (error) {
                Modal.error({
                    title: '出错啦~',
                    content: error,
                });
          });
    };

    const onFinishFailed = (errorInfo) => {

    };

    return <div className="wrap-signup">
        <Form
            name="signup"
            className="login-form"
            //labelCol={{ span: 8 }}
            //wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item>
                <div  className = "fromHeader">用户注册</div>
            </Form.Item>
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入您的用户名！' }]}
            >
                <Input  placeholder="用户名"
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入您的密码！' }]}
            >
                <Input.Password  placeholder="密码"
                prefix={<LockOutlined className="site-form-item-icon" />}
                />
            </Form.Item>

            <Form.Item
                name="repassword"
                rules={[{ required: true, message: '请再次输入您的密码！' }]}
            >
                <Input.Password placeholder="确认密码"
               prefix={<LockOutlined className="site-form-item-icon" />}
                />
            </Form.Item>

            <Form.Item
                // wrapperCol={{ offset: 9, span: 16 }}
            >
                <Button type="primary" htmlType="submit" className="signup-button">
                    注册
                </Button>
            </Form.Item>
           
        </Form>
    </div>
}

export default SignUpPage;