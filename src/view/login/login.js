import React from "react";
import "./login.css";
import { Layout, Input, Space, Button, Tabs, Row, Col, Form } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import CenterRow from "../../component/centerRow/centerRow";
import { useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

// 登录
function Login() {
  const navigate = useNavigate()
  
  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
    if(values.username=='admin'&&values.password=='admin'){
    navigate("/admin/ChongjunEmployment/ResumeDatabase");
    }
    else{
      console.log('用户名或密码错误');
    }
  };
  return (
    <Layout className="login-layout">
      <Header style={{ padding: 0 }}>
        <div className="login-header-background"></div>
      </Header>
      <Content>
        <Space className="login-space" direction="vertical" size={30}>
          <CenterRow>
            <div className="login-title">崇军行</div>
          </CenterRow>
          <CenterRow>
            <img
              className="login-logo"
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            ></img>
          </CenterRow>
          <CenterRow>
            <Tabs defaultActiveKey="1">
              <TabPane tab="账号密码登录" key="1">
                <Form
                  name="password_login"
                  className="login-form"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "请输入账号！",
                      },
                    ]}
                  >
                    <Input
                      className="login-input"
                      placeholder="账号"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请输入密码！" }]}
                  >
                    <Input.Password
                      className="login-input"
                      placeholder="密码"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>
                  <Form.Item>
                    <CenterRow>
                      <Button
                        className="login-button"
                        type="primary"
                        htmlType="submit"
                        size={"large"}
                      >
                        登录
                      </Button>
                    </CenterRow>
                  </Form.Item>
                  <CenterRow>
                    <Col>
                      <a href="/signup">注册新用户</a>
                    </Col>
                    <Col span={6}></Col>
                    <Col>
                      <a href="/forget">忘记密码</a>
                    </Col>
                  </CenterRow>{" "}
                </Form>
              </TabPane>
              <TabPane tab="手机验证码登录" key="2">
                <Form
                  name="phone_login"
                  className="login-form"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "请输入手机号码！",
                      },
                    ]}
                  >
                    <Input
                      className="login-input"
                      placeholder="手机号码"
                      prefix={<PhoneOutlined />}
                    />
                  </Form.Item>
                  <Form.Item
                    name="verification_code"
                    rules={[
                      {
                        required: true,
                        message: "请输入验证码！",
                      },
                    ]}
                  >
                    <Row>
                      <Col>
                        <Input
                          className="login-input-small"
                          placeholder="验证码"
                        />
                      </Col>
                      <Col>
                        <Button>获取验证码</Button>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <CenterRow>
                      <Button
                        className="login-button"
                        type="primary"
                        htmlType="submit"
                        size={"large"}
                      >
                        登录
                      </Button>
                    </CenterRow>
                  </Form.Item>
                  <CenterRow>
                    <Col>
                      <a href="/signup">注册新用户</a>
                    </Col>
                    <Col span={12}></Col>
                  </CenterRow>
                </Form>
              </TabPane>
            </Tabs>
          </CenterRow>
        </Space>
      </Content>
      <Footer>
        <div className="login-footer-background"></div>
      </Footer>
    </Layout>
  );
}

export default Login;
