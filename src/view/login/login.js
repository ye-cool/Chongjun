import React from "react";
import "./login.css";
import { Layout, Input, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Header, Footer, Content } = Layout;
// 登录
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout className="LoginLayout">
        <Header>Header</Header>
        <Content>
          <Space direction="vertical">
            <Input placeholder="账号" prefix={<UserOutlined />} />
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Space>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Login;
