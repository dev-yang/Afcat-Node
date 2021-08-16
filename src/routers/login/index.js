import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../static/css/login.css";
import { signHttp, publicUrl } from "../../store/action/config";

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
    // signHttp.post('/api/auth/login', { ...values })
    signHttp.post('/auth/login', { ...values })
      .then(function (response) {
        const reply = response.data;
        const code = reply.code;
        if (code === 0) {
          message.info('登录成功~');
          let authorization = response.headers.authorization
          // let userid = reply.results.id;
          // let avatar = reply.results.avatar;
          reply.results.authorization = authorization;

          dispatch({
            type: "GUARDS_LOGIN",
            user: reply.results
          })
          reply.results.isLogin = true;

          const avatarStr = publicUrl+reply.results.avatar;
            dispatch({
              type: "USERINFO_UPDATE",
              avatar: avatarStr,
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
      <Form.Item>
         <div  className = "fromHeader">用户登录</div>
      </Form.Item>
      
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
        <a className="signupAdom" href="/signup">还没有账号?去注册</a>
      </Form.Item>
    </Form >
  </div>
}
export default LoginPage;