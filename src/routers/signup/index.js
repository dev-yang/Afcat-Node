import { Button, Form, Input } from "antd";

function SignUpPage() {
    const onFinish = (values) => {

    };

    const onFinishFailed = (errorInfo) => {

    };

    return <div className="view">
        <div className="wrap">
            <Form
                name="signup"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
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
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Button type="primary">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default SignUpPage;