import React from "react";
import "./AddSpecialPosition.css";
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
  Popover,
} from "antd";
import { postSpecialPosition } from "../../../../apis/company";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const { TextArea } = Input;
class AddSpecialPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { features: [], newFeature: "" };
  }
  componentDidMount() {}
  inputFeature(e) {
    this.setState({
      newFeature: e.target.value,
    });
  }
  addFeature() {
    const newData = this.state.features;
    newData.push(this.state.newFeature);
    this.setState({
      features: newData,
    });
  }
  deleteFeature(item) {
    console.log(item);
    const newData = this.state.features;
    newData.forEach((val, index) => {
      if (val == item) {
        newData.splice(index, 1);
        this.setState({ features: newData });
        return;
      }
    });
    console.log(this.state.features);
  }

  onSubmit = (values) => {
    console.log("Success:", values);
    let appointmentRequestArray =
      values.appointmentRequest.split(/[(\r\n)\r\n]+/);
    let dutyArray = values.duty.split(/[(\r\n)\r\n]+/);
    let workTimeArray = values.workTime.split(/[(\r\n)\r\n]+/);
    appointmentRequestArray.forEach((item, index) => {
      if (!item) {
        appointmentRequestArray.splice(index, 1);
      }
    });
    dutyArray.forEach((item, index) => {
      if (!item) {
        dutyArray.splice(index, 1);
      }
    });
    workTimeArray.forEach((item, index) => {
      if (!item) {
        workTimeArray.splice(index, 1);
      }
    });
    const Info = {
      positionName: values.positionName,
      maxSal: values.salary.maxSal,
      minSal: values.salary.minSal,
      positionRequest: {
        address: values.address,
        eduDegree: values.basicRequest.eduDegree,
        workExp: values.basicRequest.workExp,
      },
      address: values.address,
      feature: this.state.features,
      appointmentRequest: appointmentRequestArray,
      duty: dutyArray,
      workTime: workTimeArray,
      companyInfo: values.companyInfo,
      companyId: localStorage.getItem("id"),
      specialRecruitId: localStorage.getItem("recruitId"),
      positionType: values.positionType,
    };
    postSpecialPosition(Info).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("新增成功");
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
    const content = <div>职业特色字数上限为8</div>;
    return (
      <div>
        <Form ref={this.formRef} onFinish={this.onSubmit} autoComplete="off">
          <Row>
            <Col span={9}>
              <Form.Item
                name="positionName"
                label="职位名称"
                rules={[
                  {
                    required: true,
                    message: "请输入职位名称!",
                  },
                ]}
              >
                <Input style={{ width: "220px" }}></Input>
              </Form.Item>
              <Form.Item
                name="salary"
                label="薪酬范围"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Group compact>
                  <Col span={6}>
                    <Form.Item
                      name={["salary", "minSal"]}
                      noStyle
                      rules={[{ required: true, message: "请输入最小薪酬" }]}
                    >
                      <Input style={{ width: "50px" }} />
                    </Form.Item>
                  </Col>
                  <Col span={2}>-</Col>
                  <Col span={6}>
                    <Form.Item
                      name={["salary", "maxSal"]}
                      noStyle
                      rules={[{ required: true, message: "请输入最大薪酬" }]}
                    >
                      <Input style={{ width: "50px" }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>千元/月</Col>
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={17}>
              <Form.Item
                name="basicRequest"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Group compact>
                  <Col>
                    <Form.Item
                      name={["basicRequest", "workExp"]}
                      label="工作经历要求"
                      rules={[{ required: true, message: "请选择经历要求" }]}
                    >
                      <Select style={{ width: "220px" }}>
                        {window.expRequire.map((item, index) => {
                          return (
                            <Option key={index} value={item}>
                              {item}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={1}></Col>
                  <Col>
                    <Form.Item
                      name={["basicRequest", "eduDegree"]}
                      label="学历要求"
                      rules={[{ required: true, message: "请选择学历要求" }]}
                    >
                      <Select style={{ width: "220px" }}>
                        {window.educationRequire.map((item, index) => {
                          return (
                            <Option key={index} value={item}>
                              {item}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                name="address"
                label="工作地点"
                rules={[
                  {
                    required: true,
                    message: "请选择所在地!",
                  },
                ]}
              >
                <Select style={{ width: "110px" }}>
                  {window.area.map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                name="positionType"
                label="职位类别"
                rules={[
                  {
                    required: true,
                    message: "请选择职位类别!",
                  },
                ]}
              >
                <Select style={{ width: "110px" }}>
                  {window.jobType.map((item, index) => {
                    return (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Space size={10}>
              <Popover content={content} title="Tip">
                <InfoCircleOutlined />
              </Popover>
              <Col>职位特色：</Col>
              <Col>
                <Input
                  onChange={this.inputFeature.bind(this)}
                  style={{ width: "220px" }}
                ></Input>
              </Col>
              <Col>
                <Button onClick={this.addFeature.bind(this)}>添加</Button>
              </Col>
            </Space>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={2}></Col>
            <Col span={22}>
              <Row style={{ marginTop: "10px" }}>
                {this.state.features?.map((item) => {
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
            <Col span={16}>
              <Form.Item
                name="appointmentRequest"
                label="任职要求"
                rules={[
                  {
                    required: true,
                    message: "请输入任职要求!",
                  },
                ]}
              >
                <TextArea rows={5}></TextArea>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Form.Item
                name="duty"
                label="岗位职责"
                rules={[
                  {
                    required: true,
                    message: "请输入岗位职责!",
                  },
                ]}
              >
                <TextArea rows={5}></TextArea>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Form.Item
                name="workTime"
                label="工作时间"
                rules={[
                  {
                    required: true,
                    message: "请输入岗位职责!",
                  },
                ]}
              >
                <TextArea rows={5}></TextArea>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Form.Item
                name="companyInfo"
                label="公司信息"
                rules={[
                  {
                    required: true,
                    message: "请输入公司信息!",
                  },
                ]}
              >
                <TextArea rows={5}></TextArea>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Form.Item>
              <Button
                className="EditPosition-button"
                type="primary"
                htmlType="submit"
                size={"large"}
              >
                保存
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddSpecialPosition;
