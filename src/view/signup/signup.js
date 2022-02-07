import React from "react";
import "./signup.css";
import {
  Layout,
  Input,
  Space,
  Button,
  Tabs,
  Row,
  Col,
  Form,
  Radio,
} from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import CenterRow from "../../component/centerRow/centerRow";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
// 注册
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout className="signup-layout">
        <Header style={{ padding: 0 }}>
          <div className="signup-header-background"></div>
        </Header>
        <Content>
          <Space className="signup-space" direction="vertical" size={30}>
            <CenterRow>
              <div className="signup-title">崇军行</div>
            </CenterRow>
            <CenterRow>
                <Form
                  {...formItemLayout}
                  name="register"
                  onFinish={onFinish}
                  scrollToFirstError
                >
                  <Form.Item
                    name="phone"
                    label="手机号码验证"
                    rules={[
                      {
                        required: true,
                        message: "请输入手机号码！",
                      },
                    ]}
                  >
                    <Input className="signup-input" placeholder="手机号码" />
                  </Form.Item>
                  <Form.Item
                    {...tailFormItemLayout}
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
                          className="signup-input-small"
                          placeholder="验证码"
                        />
                      </Col>
                      <Col>
                        <Button>获取验证码</Button>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item
                    name="username"
                    label="账号"
                    rules={[
                      {
                        required: true,
                        message: "请输入账号！",
                      },
                    ]}
                  >
                    <Input className="signup-input" placeholder="请输入账号" />
                  </Form.Item>
                  <Form.Item
                    name="role"
                    label="身份"
                    rules={[
                      {
                        required: true,
                        message: "请选择身份！",
                      },
                    ]}
                  >
                    <Radio.Group className="signup-radio">
                      <Radio value={1}>企业用户</Radio>
                      <Radio value={2}>普通管理员</Radio>
                      <Radio value={3}>超级管理员</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="signup-input"
                      placeholder="请输入密码"
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "请确认密码!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error("两次输入的密码必须一致!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className="signup-input"
                      placeholder="请输入密码"
                    />
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                      <Button
                        className="signup-button"
                        type="primary"
                        htmlType="submit"
                        size={"large"}
                      >
                        注册
                      </Button>
                  </Form.Item>
                </Form>
            </CenterRow>
          </Space>
        </Content>
        <Footer>
          <div className="signup-footer-background"></div>
        </Footer>
      </Layout>
    );
  }
}

export default Signup;
