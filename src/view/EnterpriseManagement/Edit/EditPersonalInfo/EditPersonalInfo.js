import React from "react";
import "./EditPersonalInfo.css";
import { Col, Row, message, Space, Form, Input, Button } from "antd";
import { getPersonalInfo, putPersonalName } from "../../../../apis/company";

class EditPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {} };
    this.formRef = React.createRef();
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
          this.formRef.current.setFieldsValue({
            name: this.state.dataSource.name,
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
  onSubmit = (values) => {
    console.log("Success:", values);
    const param = {
      name: values.name,
      cid: localStorage.getItem("cid"),
    };
    putPersonalName(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("发布成功");
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  render() {
    return (
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          ref={this.formRef}
          onFinish={this.onSubmit}
          autoComplete="off"
        >
          <Space className="personalInfo-space" direction="vertical" size={30}>
            <Row>
              <Col span={3}>昵称：</Col>
              <Col span={10}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "请输入昵称!",
                    },
                  ]}
                >
                  <Input style={{ width: "200px" }}></Input>
                </Form.Item>
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
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" size={"large"}>
                  保存
                </Button>
              </Form.Item>
            </Row>
          </Space>
        </Form>
      </div>
    );
  }
}

export default EditPersonalInfo;
