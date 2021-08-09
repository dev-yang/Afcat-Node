import { Button, Form, Input } from "antd";
import "../../static/css/signup.css"
function SignUpPage() {
    const onFinish = (values) => {

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
                <Button type="primary" className="signup-button">
                    注册
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default SignUpPage;