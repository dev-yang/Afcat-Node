import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../static/css/login.css";
import { signHttp } from "../../store/action/config";

function LoginPage() {
  const dispatch = useDispatch();
  const { isLogin, prevPath } = useSelector(state => state.guards);
  const { replace } = useHistory();
  useEffect(() => {
    if (isLogin) {
      replace(prevPath ? prevPath : "/");
    }
  }, [isLogin])

  const onFinish = (values) => {
    signHttp.post('/api/auth/login', { ...values })
      .then(function (response) {
        const reply = response.data;
        const code = reply.code;
        if (code === 0) {
          message.info('登录成功~');
          console.log(response.data);
          let userid = reply.results.id;
          let avatar = reply.results.avatar;
          dispatch({
            type: "GUARDS_LOGIN"
          })
          // let userid = reply.results.id;
        } else {
          message.error('用户名或密码错误！');
        }
      })
      .catch(function (error) {
        message.error('用户名或密码错误！');
      });
  }
  return <div className="wrap-login">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的账号！',
          }
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码！'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        {/* Or
        <a href="">立即注册</a> */}
      </Form.Item>
    </Form >
  </div>
}
export default LoginPage;