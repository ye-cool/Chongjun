import React, { useState, useEffect } from "react";
import "./login.css";
import {
  message,
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
import { useNavigate } from "react-router-dom";
import { adminLogin, adminLoginByPhone, getAdminInfo } from "../../apis/admin";
import { companyLogin, companyLoginByPhone, getCompanyInfo } from "../../apis/company";
import { getLoginVerification } from "../../apis/verification";
import logo from "../../assets/logo.png"

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

// 登录
function Login(props) {
  const [time, setTime] = useState(60);
  const [over, setOver] = useState(false);
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // 通过账号密码登录
  const accLogin = (values) => {
    console.log("Received values of form: ", values);
    let localStorage = window.localStorage;
    localStorage.setItem("role", values.role);
    if (values.role == "admin") {
      adminLogin({
        adminAccount: values.username,
        password: values.password,
      }).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("aid", res.data.aid);
            getAdminInfo(res.data.aid).then(
              (res) => {
                console.log("get article response:", res);
                if (res.code == 600) {
                  props.setName(res.data.name)
                } else {
                  message.error(res.message);
                }
              },
              (error) => {
                console.log("get response failed!");
              }
            );
            navigate("/admin/ChongjunEmployment/ResumeDatabase");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else if (values.role == "company") {
      companyLogin({
        companyAccountNum: values.username,
        password: values.password,
      }).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("cid", res.data.cid);
            localStorage.setItem("id", res.data.companyId);
            getCompanyInfo(res.data.cid).then(
              (res) => {
                console.log("get article response:", res);
                if (res.code == 600) {
                  props.setName(res.data.name)
                } else {
                  message.error(res.message);
                }
              },
              (error) => {
                console.log("get response failed!");
              }
            );
            navigate("/admin/CorporateInformation");
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
  // 获取验证码60s倒计时
  useEffect(() => {
    if (time < 60 && time > 0) {
      let timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    } else {
      setTime(60);
    }
  });

  const tick = () => {
    // 暂停，或已结束
    if (over) return;
    if (time === 0) setOver(true);
    else {
      let Time = time;
      setTime(Time - 1);
    }
  };

  // 以下为获取手机验证码的函数
  const getPhone = (e) => {
    setPhone(e.target.value);
  };
  const isEnterpriseUser = (e) => {
    console.log(e.target.value);

    if (e.target.value == "company") {
      setRole("company");
    } else if (e.target.value == "admin") {
      setRole("admin");
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
    getLoginVerification(param).then(
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
  // 通过手机验证码登录
  const phoneLogin = (values) => {
    console.log("Received values of form: ", values);
    let localStorage = window.localStorage;
    localStorage.setItem("role", values.role);
    if (values.role == "admin") {
      adminLoginByPhone({
        phone: values.phone,
        verificationCode: values.verification_code,
      }).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("aid", res.data.aid);
            getAdminInfo(res.data.aid).then(
              (res) => {
                console.log("get article response:", res);
                if (res.code == 600) {
                  props.setName(res.data.name)
                } else {
                  message.error(res.message);
                }
              },
              (error) => {
                console.log("get response failed!");
              }
            );
            navigate("/admin/ChongjunEmployment/ResumeDatabase");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else if (values.role == "company") {
      companyLoginByPhone({
        phone: values.phone,
        verificationCode: values.verification_code,
      }).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("cid", res.data.cid);
            localStorage.setItem("id", res.data.companyId);
             getCompanyInfo(res.data.cid).then(
              (res) => {
                console.log("get article response:", res);
                if (res.code == 600) {
                  props.setName(res.data.name)
                } else {
                  message.error(res.message);
                }
              },
              (error) => {
                console.log("get response failed!");
              }
            );
            navigate("/admin/CorporateInformation");
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
              src={logo}
            ></img>
          </CenterRow>
          <CenterRow>
            <Tabs defaultActiveKey="1">
              <TabPane tab="账号密码登录" key="1">
                <Form
                  name="password_login"
                  className="login-form"
                  onFinish={accLogin}
                >
                  <Form.Item
                    name="username"
                    normalize={(value) => {
                      value = value && value.replace(/[^\d]+/g, "");
                      return value;
                    }}
                    rules={[
                      {
                        required: true,
                        message: "请输入账号！(不能以0开头)",
                        pattern: new RegExp(/^[1-9]\d*$/, "g"),
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
                  <Form.Item
                    name="role"
                    rules={[
                      {
                        required: true,
                        message: "请选择身份！",
                      },
                    ]}
                  >
                    <Radio.Group className="login-radio">
                      <Radio value={"company"}>企业用户</Radio>
                      <Radio value={"admin"}>管理端用户</Radio>
                    </Radio.Group>
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
                      <a href="/#/signup">注册新用户</a>
                    </Col>
                    <Col span={6}></Col>
                    <Col>
                      <a href="/#/forget">忘记密码</a>
                    </Col>
                  </CenterRow>{" "}
                </Form>
              </TabPane>
              <TabPane tab="手机验证码登录" key="2">
                <Form
                  name="phone_login"
                  className="login-form"
                  onFinish={phoneLogin}
                >
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                        message: "请输入正确的手机号码！",
                      },
                    ]}
                  >
                    <Input
                      className="login-input"
                      placeholder="手机号码"
                      onChange={getPhone}
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
                    rules={[
                      {
                        required: true,
                        message: "请选择身份！",
                      },
                    ]}
                  >
                    <Radio.Group
                      className="login-radio"
                      onChange={isEnterpriseUser}
                    >
                      <Radio value={"company"}>企业端用户</Radio>
                      <Radio value={"admin"}>管理端用员</Radio>
                    </Radio.Group>
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
                      <a href="/#/signup">注册新用户</a>
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
