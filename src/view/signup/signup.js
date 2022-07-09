import React, { useState, useEffect } from "react";
import "./signup.css";
import {
  Layout,
  Input,
  Space,
  Button,
  Row,
  Col,
  Form,
  Radio,
  message,
} from "antd";
import CenterRow from "../../component/centerRow/centerRow";
import { getRegisterVerification } from "../../apis/verification";
import { adminRegister } from "../../apis/admin";
import { companyRegister } from "../../apis/company";

const { Header, Footer, Content } = Layout;

// 注册
function Signup() {
  const [time, setTime] = useState(60);
  const [over, setOver] = useState(false);
  const [showElem, setShowElem] = useState("none");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
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
  useEffect(() => {
    if (time < 60 && time > 0) {
      let timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    } else {
      setTime(60);
    }
  });

  const isEnterpriseUser = (e) => {
    console.log(e.target.value);

    if (e.target.value == "company") {
      setRole("company");
      setShowElem("show");
    } else if (e.target.value == "commonAdmin") {
      setRole("admin");
      setLevel("commom");
      setShowElem("none");
    } else if (e.target.value == "superAdmin") {
      setRole("admin");
      setLevel("super");
      setShowElem("none");
    }
  };
  const getPhone = (e) => {
    setPhone(e.target.value);
  };
  const tick = () => {
    // 暂停，或已结束
    if (over) return;
    if (time === 0) setOver(true);
    else {
      let Time = time;
      setTime(Time - 1);
    }
  };
  const getVerification = () => {
    if (phone == "" || role == "") {
      message.warning("请输入手机号码并选择身份！");
      return;
    }
    tick();
    const param = {
      loginType: role,
      phone: phone,
    };
    getRegisterVerification(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("已发送验证码，请注意接收");
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (role == "admin") {
      const param = {
        adminAccount: values.username,
        level: level,
        password: values.password,
        phone: values.phone,
        verificationCode: values.verification_code,
      };
      adminRegister(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("注册成功,请等待管理员审核");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else {
      const param = {
        companyAccountNum: values.username,
        companyName: values.EnterpriseName,
        password: values.password,
        phone: values.phone,
        verificationCode: values.verification_code,
      };
      companyRegister(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("注册成功,请等待管理员审核");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    }
  };
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
                    pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                    message: "请输入正确的手机号码！",
                  },
                ]}
              >
                <Input
                  className="signup-input"
                  placeholder="手机号码"
                  onChange={getPhone}
                />
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
                    {time == 60 || time == 0 ? (  
                      <Button ghost onClick={getVerification}>
                        获取验证码
                      </Button>
                    ) : (
                      <div>{time + " s"}</div>
                    )}
                  </Col>
                </Row>
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
                <Radio.Group
                  className="signup-radio"
                  onChange={isEnterpriseUser}
                >
                  <Radio value={"company"}>企业用户</Radio>
                  <Radio value={"commonAdmin"}>普通管理员</Radio>
                  <Radio value={"superAdmin"}>超级管理员</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="username"
                normalize={(value) => {
                  value = value && value.replace(/[^\d]+/g, "");
                  return value;
                }}
                label="账号"
                rules={[
                  {
                    required: true,
                    message: "请输入账号！(不能以0开头)",
                    pattern: new RegExp(/^[1-9]\d*$/, "g"),
                  },
                ]}
              >
                <Input className="signup-input" placeholder="请输入账号" />
              </Form.Item>

              {showElem == "show" ? (
                <Form.Item
                  name="EnterpriseName"
                  label="企业名称"
                  rules={[
                    {
                      required: true,
                      message: "请输入企业名称！",
                    },
                  ]}
                >
                  <Input className="signup-input" placeholder="名称" />
                </Form.Item>
              ) : null}

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

export default Signup;
