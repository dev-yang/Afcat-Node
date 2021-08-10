import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import "../../static/css/signup.css"
import {signHttp} from "../../store/action/config"
function SignUpPage() {
    const onFinish = (values) => {
        
        if (values.password !== values.repassword) {
            // 弹出提示：两次输入的密码不一致
            Modal.error({
                title: '密码不一致',
                content: '请保持密码输入一致！',
              });
            return;
        }

        signHttp.post('/api/auth/register', {...values})
          .then(function (response) {
            const reply = response.data;
            const code = reply.code;
            if (code === 0) {
                Modal.success({
                    content: '恭喜您，注册成功~',
                });
                let userid = reply.results.id;
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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="用户名："
                name="username"
                rules={[{ required: true, message: '请输入您的用户名！' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码："
                name="password"
                rules={[{ required: true, message: '请输入您的密码！' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="重复密码："
                name="repassword"
                rules={[{ required: true, message: '请再次输入您的密码！' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 9, span: 16 }}
            >
                <Button type="primary" htmlType="submit" className="signup-button">
                    注册
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default SignUpPage;