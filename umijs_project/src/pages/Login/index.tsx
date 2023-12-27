import { Link } from '@umijs/max';
import { Button, Card, Form, Input, Typography } from 'antd';
import style from './index.less';

const Login = () => {
  return (
    <div className={style.login}>
      <Card
        title={<Typography.Title level={3}>欢迎登录</Typography.Title>}
        style={{ minWidth: 400 }}
        hoverable
      >
        <Form>
          <Form.Item>
            <Input placeholder="请输入用户名" size="large"></Input>
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              placeholder="请输入密码"
              size="large"
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ width: '100%' }} size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
        <div className={style.login_bottom}>
          <Link to={'/forget'}>忘记密码</Link>
          <Link to={'/register'}>没有账号？立即注册</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
