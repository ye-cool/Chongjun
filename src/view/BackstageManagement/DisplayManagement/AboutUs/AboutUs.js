import React from "react";
import "./AboutUs.css";
import { Row, Col, Input, Button, Space, Image, message, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  getAboutUs,
  putAboutUs,
  getCooperativeUnit,
  postCooperativeUnit,
} from "../../../../apis/admin";

const { TextArea } = Input;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: "",
      CooperativeUnits: [],
      newCooperativeUnits: [],
      imagePreviewUrl: "",
      file: "",
      companyName: "",
      companyDescription: "",
    };
    this.formRef = React.createRef();
  }
  componentDidMount() {
    getAboutUs().then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            aboutData: res.data,
          });
          this.formRef.current.setFieldsValue({
            aboutUs: res.data,
          });
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
    getCooperativeUnit().then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            CooperativeUnits: res.data,
          });

          this.formRef.current.setFieldsValue({
            description: res.data.description,
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

  saveAbout = () => {
    const values = this.formRef.current.getFieldValue();
    console.log(values);
    putAboutUs({
      text: values.aboutUs,
    }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("保存成功");
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  addCooperativeUnit = () => {
    this.setState({
      newCooperativeUnits: [
        {
          description: "",
          name: "",
          photo: "",
        },
      ],
    });
  };
  inputCompanyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }
  inputCompanyDescription(e) {
    this.setState({
      companyDescription: e.target.value,
    });
  }
  handleImageChange(e) {
    e.preventDefault();

    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      console.log("文件名为—", file);
      console.log("文件结果为—", reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  saveCooperativeUnit = () => {
    if (this.state.file.size / 1024 / 1024 >= 1) {
      message.error("图片大小超过1M");
      return;
    }
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("name", this.state.companyName);
    formData.append("description", this.state.companyDescription);

    postCooperativeUnit(formData).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("保存成功");
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
    var { imagePreviewUrl } = this.state;
    var imagePreview = (
      <label htmlFor="avatarFor">
        <img
          style={{ width: "100px", height: "100px" }}
          src={imagePreviewUrl}
        />
      </label>
    );
    return (
      <div>
        <Form ref={this.formRef} autoComplete="off">
          <Space className="aboutus-space" direction="vertical" size={20}>
            <Row>
              <Col span={1}></Col>
              <Col span={21}>
                <span>关于崇军：</span>
                <Form.Item
                  name={"aboutUs"}
                  noStyle
                  rules={[
                    { required: true, message: "请输入关于崇军的相关内容" },
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
                    className="AboutUs-button"
                    type="primary"
                    htmlType="submit"
                    size={"large"}
                    onClick={this.saveAbout}
                  >
                    保存
                  </Button>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>
            <Row>
              <Col span={1}></Col>
              <Col span={21}>
                <span>合作单位：</span>
                <Space className="aboutus-space" direction="vertical" size={20}>
                  {this.state.CooperativeUnits.map((item, index) => {
                    return (
                      <Space
                        className="aboutus-space"
                        direction="vertical"
                        size={20}
                        key={index}
                      >
                        <Row>
                          <Col span={3}>企业名称：</Col>
                          <Col>{item.name}</Col>
                        </Row>
                        <Row>
                          <Col span={3} style={{ position: "relative" }}>
                            <img
                              width={100}
                              height={100}
                              src={`data:image/png;base64,${item.photo}`}
                            ></img>
                          </Col>
                          <Col span={15}>{item.description}</Col>
                        </Row>
                      </Space>
                    );
                  })}
                  {this.state.newCooperativeUnits.map((item, index) => {
                    return (
                      <Space
                        className="aboutus-space"
                        direction="vertical"
                        size={20}
                        key={index}
                      >
                        <Row>
                          <Col span={3}>企业名称：</Col>
                          <Col>
                            <Input
                              onChange={this.inputCompanyName.bind(this)}
                              style={{ width: "100px" }}
                            ></Input>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3} style={{ position: "relative" }}>
                            {imagePreview}
                            <input
                              onChange={(e) => this.handleImageChange(e)}
                              style={{
                                position: "absolute",
                                width: "100px",
                                height: "100px",
                                top: "0px",
                                opacity: "0",
                              }}
                              type="file"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              multiple
                            />
                          </Col>
                          <Col span={15}>
                            <TextArea
                              onChange={this.inputCompanyDescription.bind(this)}
                              placeholder="多行输入"
                              rows={5}
                            />
                          </Col>
                        </Row>
                      </Space>
                    );
                  })}
                  <Row>
                    <Button onClick={this.addCooperativeUnit}>
                      <PlusCircleOutlined />
                      添加
                    </Button>
                  </Row>
                </Space>
              </Col>
            </Row>
            <Row justify="end">
              <Col span={1}>
                <Button onClick={this.saveCooperativeUnit}>保存</Button>
              </Col>
              <Col span={2}></Col>
            </Row>
          </Space>
        </Form>
      </div>
    );
  }
}

export default AboutUs;
