import React from "react";
import "./AddSpecialRecruit.css";
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
  DatePicker,
} from "antd";
import { postBSpecial } from "../../../../apis/admin";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
class AddSpecialRecruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {
        audienceList: [],
        companySignEndTimeLong: 0,
        companySignStartTimeLong: 0,
        introduction: "",
        organizationList: [],
        recruitEndTimeLong: 0,
        recruitName: "",
        recruitStartTimeLong: 0,
      },
      audience: "",
      newAudienceList: [""],
      organization: "",
      newOrganizationList: [""],
      file: "",
      imagePreviewUrl: "",
    };
    this.formRef = React.createRef();
  }
  componentDidMount() {
    // const param = {
    //   positionId: localStorage.getItem("pid"),
    //   companyId: localStorage.getItem("id"),
    // };
    // getPositionDetail(param.positionId, param.companyId).then(
    //   (res) => {
    //     console.log("get article response:", res);
    //     if (res.code == 600) {
    //       this.setState({
    //         dataSource: res.data,
    //       });
    //       this.formRef.current.setFieldsValue({
    //         positionName: this.state.dataSource.positionName,
    //         salary: this.state.dataSource.salary,
    //         basicRequest: this.state.dataSource.positionRequest,
    //         address: this.state.dataSource.positionRequest.address,
    //         appointmentRequest:
    //           this.state.dataSource.appointmentRequest.join("\n"),
    //         duty: this.state.dataSource.duty.join("\n"),
    //         workTime: this.state.dataSource.workTime.join("\n"),
    //         companyInfo: this.state.dataSource.companyInfo,
    //       });
    //     } else {
    //       message.error(res.message);
    //     }
    //   },
    //   (error) => {
    //     console.log("get response failed!");
    //   }
    // );
  }
  handleImageChange(e) {
    e.preventDefault();

    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      console.log("???????????????", file);
      console.log("??????????????????", reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  addCompanyTime = (data, dataString) => {
    console.log(dataString);
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        companySignStartTimeLong: dataString[0],
        companySignEndTimeLong: dataString[1],
      },
    });
  };
  addRecruitTime = (data, dataString) => {
    console.log(dataString);
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        recruitStartTimeLong: dataString[0],
        recruitEndTimeLong: dataString[1],
      },
    });
  };

  addAudience = (e) => {
    this.setState({
      audience: e.target.value,
    });
  };
  addNewAudience = () => {
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        audienceList: [
          ...this.state.dataSource?.audienceList,
          this.state.audience,
        ],
      },
      newAudienceList: [...this.state.newAudienceList, ""],
    });
  };
  addOrganization = (e) => {
    this.setState({
      organization: e.target.value,
    });
  };
  addNewOrganization = () => {
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        organizationList: [
          ...this.state.dataSource?.organizationList,
          this.state.organization,
        ],
      },
      newOrganizationList: [...this.state.newOrganizationList, ""],
    });
  };
  onSubmit = (values) => {
    console.log("Success:", values);
    console.log(this.state.dataSource);
    if (this.state.file.size / 1024 / 1024 >= 1) {
      message.error("??????????????????1M");
      return;
    }
    const Info = {
      recruitName: values.recruitName,
      companySignStartTimeLong: this.state.dataSource.companySignStartTimeLong,
      companySignEndTimeLong: this.state.dataSource.companySignEndTimeLong,
      recruitStartTimeLong: this.state.dataSource.recruitStartTimeLong,
      recruitEndTimeLong: this.state.dataSource.recruitEndTimeLong,
      introduction: values.introduction,
      organizationList: [
        ...this.state.dataSource.organizationList,
        this.state.organization,
      ],
      audienceList: [
        ...this.state.dataSource.audienceList,
        this.state.audience,
      ],
    };
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("specialRecruitAddParam", JSON.stringify(Info));
    console.log(formData.get("file"));
    console.log(formData.get("specialRecruitAddParam"));
    postBSpecial(formData).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("????????????");
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
    var imagePreview =
      imagePreviewUrl == "" ? (
        <label htmlFor="avatarFor">
          <Button style={{ width: "100px", height: "100px" }}>????????????</Button>
        </label>
      ) : (
        <label htmlFor="avatarFor">
          <img
            style={{ width: "100px", height: "100px" }}
            src={imagePreviewUrl}
          />
        </label>
      );

    return (
      <div>
        <Form ref={this.formRef} onFinish={this.onSubmit} autoComplete="off">
          <Row>
            <Col span={9}>
              <Form.Item
                name="recruitName"
                label="????????????????????????"
                rules={[
                  {
                    required: true,
                    message: "?????????????????????????????????!",
                  },
                ]}
              >
                <Input style={{ width: "220px" }}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <Form.Item
                name="recruitPhoto"
                label="??????????????????"
                rules={[
                  {
                    required: true,
                    message: "?????????????????????!",
                  },
                ]}
              >
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
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>???????????????</Col>
            <Col>
              <Row>
                <Form.Item
                  name="companySignTime"
                  label="??????????????????"
                  rules={[
                    {
                      required: true,
                      message: "???????????????????????????!",
                    },
                  ]}
                >
                  <RangePicker onChange={this.addCompanyTime} />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="recruitTime"
                  label="??????????????????"
                  rules={[
                    {
                      required: true,
                      message: "???????????????????????????!",
                    },
                  ]}
                >
                  <RangePicker onChange={this.addRecruitTime} />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="introduction"
                  label="????????????"
                  rules={[
                    {
                      required: true,
                      message: "?????????????????????!",
                    },
                  ]}
                >
                  <TextArea rows={5} style={{ width: "500px" }}></TextArea>
                </Form.Item>
              </Row>
              <Row>
                <Col>
                  <Form.Item
                    name="audience"
                    label="????????????"
                    rules={[
                      {
                        required: true,
                        message: "?????????????????????!",
                      },
                    ]}
                  >
                    <Space
                      className="aboutus-space"
                      direction="vertical"
                      size={10}
                    >
                      {this.state.newAudienceList.map((item, index) => {
                        return (
                          <Row key={index}>
                            <Input onChange={this.addAudience}></Input>
                          </Row>
                        );
                      })}
                      <Row>
                        <Button onClick={this.addNewAudience}>
                          <PlusCircleOutlined />
                          ??????
                        </Button>
                      </Row>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item
                    name="organization"
                    label="????????????"
                    rules={[
                      {
                        required: true,
                        message: "?????????????????????!",
                      },
                    ]}
                  >
                    <Space
                      className="aboutus-space"
                      direction="vertical"
                      size={10}
                    >
                      {this.state.newOrganizationList.map((item, index) => {
                        return (
                          <Row key={index}>
                            <Input onChange={this.addOrganization}></Input>
                          </Row>
                        );
                      })}
                      <Row>
                        <Button onClick={this.addNewOrganization}>
                          <PlusCircleOutlined />
                          ??????
                        </Button>
                      </Row>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
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
                ??????
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddSpecialRecruit;
