import React from "react";
import "./PersonalInformation.css";
import { Col, Row, message, Space, Modal, Form, Input, Button } from "antd";
import { getPersonalInfo, putPersonalPassword } from "../../../apis/company";

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isModalVisible: false,
    };
  }

  componentDidMount() {
    let cid = localStorage.getItem("cid");
    getPersonalInfo(cid).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            dataSource: res.data,
          });
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
  render() {
    const showModal = () => {
      this.setState({ isModalVisible: true });
    };
    const handleCancel = () => {
      this.setState({ isModalVisible: false });
    };
    const onFinish = (value) => {
      console.log(value);
      const param = {
        cid: localStorage.getItem("cid"),
        newPassword: value.newPassword,
      };
      putPersonalPassword(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("密码修改成功");
            this.setState({ isModalVisible: false });
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
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
    return (
      <div>
        <Space className="personalInfo-space" direction="vertical" size={30}>
          <Row>
            <Col span={3}>昵称：</Col>
            <Col span={10}>{this.state.dataSource.name}</Col>
            <Col style={{ marginLeft: "auto" }}>
              <a
                href="/#/admin/PersonalInformation/edit"
                style={{ color: "black", marginRight: "20px" }}
              >
                编辑
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "black", marginRight: "20px" }}
                onClick={showModal}
              >
                修改密码
              </a>
            </Col>
          </Row>
          <Row>
            <Col span={3}>账号：</Col>
            <Col>{this.state.dataSource.companyAccountNum}</Col>
          </Row>
          <Row>
            <Col span={3}>管理员类型：</Col>
            <Col>
              {
                window.adminType.filter(
                  (item) => item.level == this.state.dataSource.level
                )[0]?.value
              }
            </Col>
          </Row>
        </Space>
        <Modal
          title="修改密码"
          visible={this.state.isModalVisible}
          onCancel={handleCancel}
          destroyOnClose={true}
          footer={null}
        >
          <Form
            {...formItemLayout}
            name="editPassword"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row>
              <Form.Item
                name="newPassword"
                label="新密码"
                rules={[
                  {
                    required: true,
                    message: "请输入新密码!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="请输入新密码"
                  style={{ width: "200px" }}
                />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                {...tailFormItemLayout}
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: "请再次输入新密码!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
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
                  placeholder="请再次输入新密码"
                  style={{ width: "200px" }}
                />
              </Form.Item>
            </Row>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  确认修改
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default PersonalInformation;
