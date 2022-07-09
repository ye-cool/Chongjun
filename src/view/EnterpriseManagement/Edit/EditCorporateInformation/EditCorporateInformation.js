import React from "react";
import "./EditCorporateInformation.css";
import {
  Col,
  Row,
  Button,
  Image,
  Space,
  Tag,
  message,
  Form,
  Input,
  Select,
} from "antd";
import {
  getCompanyDetail,
  putCompanyName,
  putCompanyInfo,
  putCompanyPhoto,
} from "../../../../apis/company";
const { Option } = Select;
class EditCorporateInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {}, newFeature: "" };
    this.formRef = React.createRef();
  }
  componentDidMount() {
    const param = {
      cid: localStorage.getItem("cid"),
      companyId: localStorage.getItem("id"),
    };
    getCompanyDetail(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            dataSource: res.data,
          });
          this.formRef.current.setFieldsValue({
            companyName: this.state.dataSource.companyName,
            address: this.state.dataSource.address,
            type: this.state.dataSource.type,
            companyInfo: this.state.dataSource.companyInfo,
            detailAddress: this.state.dataSource.detailAddress,
            website: this.state.dataSource.website,
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
  inputFeature(e) {
    this.setState({
      newFeature: e.target.value,
    });
  }
  addFeature() {
    const newData = { ...this.state.dataSource };
    newData.feature = [...newData.feature, this.state.newFeature];
    this.setState({
      dataSource: newData,
    });
  }
  deleteFeature(item) {
    console.log(item);
    const newData = { ...this.state.dataSource };
    newData.feature.forEach((val, index) => {
      if (val == item) {
        newData.feature.splice(index, 1);
        this.setState({ dataSource: newData });
        return;
      }
    });
    console.log(this.state.features);
  }
  onSubmit = (values) => {
    console.log("Success:", values);
    console.log(this.state.dataSource);
    const param = {
      companyName: values.companyName,
      id: localStorage.getItem("id"),
    };
    const Info = {
      address: values.address,
      companyInfo: values.companyInfo,
      companyName: values.companyName,
      feature: this.state.dataSource.feature,
      id: this.state.dataSource.id,
      type: values.type,
      // detailAddress: values.detailAddress,
      website: values.website,
    };
    if (values.companyName == localStorage.getItem("companyName")) {
      putCompanyInfo(Info).then(
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
    } else if (values.companyName !== localStorage.getItem("companyName")) {
      putCompanyName(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            localStorage.setItem("companyName", values.companyName);
            putCompanyInfo(Info).then(
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
          <Space className="detail-space" direction="vertical" size={30}>
            <Row>
              <Col span={4}>
                <Image
                  width={150}
                  src={`data:image/png;base64,${this.state.dataSource.photo}`}
                ></Image>
              </Col>
              <Col span={20}>
                <Space className="detail-space" direction="vertical" size={10}>
                  <Row>
                    <Col>
                      <Form.Item
                        name="companyName"
                        rules={[
                          {
                            required: true,
                            message: "请输入公司名称!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Item
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "请选择地区!",
                          },
                        ]}
                      >
                        <Select style={{ width: 120 }} allowClear>
                          {window.area?.map((item, index) => (
                            <Option key={index} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={1}></Col>
                    <Col>
                      <Form.Item
                        name="type"
                        rules={[
                          {
                            required: true,
                            message: "请选择企业类型!",
                          },
                        ]}
                      >
                        <Select style={{ width: 120 }} allowClear>
                          {window.companyType.map((item, index) => (
                            <Option key={index} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Space>
              </Col>
            </Row>
            {/* 分割线 */}
            <Row>
              <Col span={22} style={{ color: "gray" }}>
                —————————————————————————————————————————————————
              </Col>
            </Row>
            <Row>
              <Col span={2}>企业特色：</Col>
              <Col span={3}>
                <Input onChange={this.inputFeature.bind(this)}></Input>
              </Col>
              <Col span={1}></Col>
              <Col span={2}>
                <Button onClick={this.addFeature.bind(this)}>添加</Button>
              </Col>
            </Row>
            <Row>
              <Col span={2}></Col>
              <Col span={22}>
                <Row>
                  {this.state.dataSource.feature?.map((item) => {
                    return (
                      <Col key={item}>
                        <Tag closable onClose={() => this.deleteFeature(item)}>
                          {item}
                        </Tag>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={2}>公司信息：</Col>

              <Col span={22}>
                <Form.Item
                  name="companyInfo"
                  rules={[
                    {
                      required: true,
                      message: "请输入公司信息!",
                    },
                  ]}
                >
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={2}>公司地址：</Col>
              <Col span={22}>
                <Form.Item
                  name="detailAddress"
                  rules={[
                    {
                      required: true,
                      message: "请输入公司地址!",
                    },
                  ]}
                >
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={2}>公司网址：</Col>
              <Col span={22}>
                <Form.Item
                  name="website"
                  rules={[
                    {
                      required: true,
                      message: "请输入公司网址!",
                    },
                  ]}
                >
                  <Input></Input>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit" size={"large"}>
                  发布
                </Button>
              </Form.Item>
            </Row>
          </Space>
        </Form>
      </div>
    );
  }
}

export default EditCorporateInformation;
