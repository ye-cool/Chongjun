import React from "react";
import "./PrivacyAgreement.css";
import { Row, Col, Input, Button, Space, Form, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getPrivacyPolicy, putPrivacyPolicy } from "../../../../apis/admin";

const { TextArea } = Input;

class PrivacyAgreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: "" };
    this.formRef = React.createRef();
  }
  componentDidMount() {
    getPrivacyPolicy().then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            dataSource: res.data,
          });
          this.formRef.current.setFieldsValue({
            PrivacyPolicy: res.data,
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
  savePrivacyPolicy = () => {
    const values = this.formRef.current.getFieldValue();
    console.log(values);
    putPrivacyPolicy({
      text: values.PrivacyPolicy,
    }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("已成功保存");
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
        <Form ref={this.formRef} autoComplete="off">
          {" "}
          <Space
            className="privacyAgreement-space"
            direction="vertical"
            size={20}
          >
            <Row>
              <Col span={1}></Col>
              <Col span={21}>
                <span>用户隐私协议：</span>
                <Form.Item
                  name={"PrivacyPolicy"}
                  noStyle
                  rules={[
                    { required: true, message: "请输入隐私协议的相关内容" },
                  ]}
                >
                  <TextArea placeholder="多行输入" rows={10}></TextArea>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end">
              <Col span={1}>
                <Form.Item>
                  <Button
                    className="EditPosition-button"
                    type="primary"
                    htmlType="submit"
                    size={"large"}
                    onClick={this.savePrivacyPolicy}
                  >
                    保存
                  </Button>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>
          </Space>
        </Form>
      </div>
    );
  }
}

export default PrivacyAgreement;
