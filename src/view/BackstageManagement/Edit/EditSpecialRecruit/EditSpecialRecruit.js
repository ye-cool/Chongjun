import React from "react";
import "./EditSpecialRecruit.css";
import moment from "moment";
import "moment/locale/zh-cn";
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
import { getBSpecialDetail, putBSpecial } from "../../../../apis/admin";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
class EditSpecialRecruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
      audience: null,
      newAudienceList: [],
      organization: null,
      newOrganizationList: [],
      file: "",
      imagePreviewUrl: "",
    };
    this.formRef = React.createRef();
  }
  componentDidMount() {
    const rid = localStorage.getItem("recruitId");
    getBSpecialDetail(rid).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          let array = [];
          let blob = null;
          if (res.data.photo != null) {
            let bstr = atob(res.data.photo);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }
            blob = new File([u8arr], "file.jpg", { type: "image/png" });
            console.log("blob" + blob.size);
          }
          this.setState({
            dataSource: res.data,
            file: blob,
            imagePreviewUrl: `data:image/png;base64,${res.data.photo}`,
            newAudienceList: [...res.data.audienceList],
            newOrganizationList: [...res.data.organizationList],
          });
          this.formRef.current.setFieldsValue({
            recruitName: this.state.dataSource.recruitName,
            introduction: this.state.dataSource.introduction,
            companySignTime: [
              moment(this.state.dataSource.registerStartTime, "YYYY-MM-DD"),
              moment(this.state.dataSource.registerEndTime, "YYYY-MM-DD"),
            ],
            recruitTime: [
              moment(this.state.dataSource.recruitStartTime, "YYYY-MM-DD"),
              moment(this.state.dataSource.recruitStartTime, "YYYY-MM-DD"),
            ],
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

  addAudience = (event, index) => {
    console.log(event.target.value);
    let array = [];
    this.state.newAudienceList.map((item, ind) => {
      if (ind == index) {
        array[ind] = event.target.value;
      } else {
        array[ind] = item;
      }
    });
    console.log(array);
    this.setState({
      newAudienceList: array,
    });
  };
  addNewAudience = () => {
    this.setState({
      newAudienceList: [...this.state.newAudienceList, ""],
    });
  };
  addOrganization = (event, index) => {
    let array = [];
    this.state.newOrganizationList.map((item, ind) => {
      if (ind == index) {
        array[ind] = event.target.value;
      } else {
        array[ind] = item;
      }
    });
    console.log(array);
    this.setState({
      newOrganizationList: array,
    });
  };
  addNewOrganization = () => {
    this.setState({
      newOrganizationList: [...this.state.newOrganizationList, ""],
    });
  };
  onSubmit = (values) => {
    const rid = localStorage.getItem("recruitId");
    console.log("Success:", values);
    console.log(this.state.dataSource);
    if (this.state.file != null && this.state.file.size / 1024 / 1024 >= 1) {
      message.error("图片大小超过1M");
      return;
    }
    const Info = {
      id: rid,
      recruitName: values.recruitName,
      companySignStartTimeLong: this.state.dataSource.companySignStartTimeLong,
      companySignEndTimeLong: this.state.dataSource.companySignEndTimeLong,
      recruitStartTimeLong: this.state.dataSource.recruitStartTimeLong,
      recruitEndTimeLong: this.state.dataSource.recruitEndTimeLong,
      introduction: values.introduction,
      organizationList: [...this.state.newOrganizationList],
      audienceList: [...this.state.newAudienceList],
    };
    console.log(Info);
    const blob = new Blob([JSON.stringify(Info)], {
      type: "application/json",
    });
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("specialRecruitUpdateParam", blob);
    console.log(formData.get("file"));
    console.log(formData.get("specialRecruitUpdateParam"));
    putBSpecial(formData).then(
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
    var { imagePreviewUrl } = this.state;
    var imagePreview =
      imagePreviewUrl == "" ? (
        <label htmlFor="avatarFor">
          <Button style={{ width: "100px", height: "100px" }}>添加图片</Button>
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
                label="专场招聘活动名称"
                rules={[
                  {
                    required: true,
                    message: "请输入专场招聘活动名称!",
                  },
                ]}
              >
                <Input style={{ width: "220px" }}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={9}>
              <Form.Item name="recruitPhoto" label="活动图片展示">
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
            <Col> 活动情况：</Col>
            <Col>
              <Row>
                <Form.Item
                  name="companySignTime"
                  label="企业报名时间"
                  rules={[
                    {
                      required: true,
                      message: "请选择企业报名时间!",
                    },
                  ]}
                >
                  <RangePicker onChange={this.addCompanyTime} />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="recruitTime"
                  label="活动进行时间"
                  rules={[
                    {
                      required: true,
                      message: "请选择活动进行时间!",
                    },
                  ]}
                >
                  <RangePicker onChange={this.addRecruitTime} />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="introduction"
                  label="活动介绍"
                  rules={[
                    {
                      required: true,
                      message: "请输入活动介绍!",
                    },
                  ]}
                >
                  <TextArea rows={5} style={{ width: "500px" }}></TextArea>
                </Form.Item>
              </Row>
              <Row>
                <Col>
                  <Form.Item name="audience" label="服务对象">
                    <Space direction="vertical" size={10}>
                      {this.state.newAudienceList.map((item, index) => {
                        return (
                          <Row key={index}>
                            <Input
                              defaultValue={item}
                              onChange={(e) => this.addAudience(e, index)}
                              style={{ width: "500px" }}
                            ></Input>
                          </Row>
                        );
                      })}
                      <Row>
                        <Button onClick={this.addNewAudience}>
                          <PlusCircleOutlined />
                          添加
                        </Button>
                      </Row>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item name="organization" label="组织单位">
                    <Space
                      className="aboutus-space"
                      direction="vertical"
                      size={10}
                    >
                      {this.state.newOrganizationList.map((item, index) => {
                        return (
                          <Row key={index}>
                            <Input
                              defaultValue={item}
                              onChange={(e) => this.addOrganization(e, index)}
                              style={{ width: "500px" }}
                            ></Input>
                          </Row>
                        );
                      })}
                      <Row>
                        <Button onClick={this.addNewOrganization}>
                          <PlusCircleOutlined />
                          添加
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
                发布
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

export default EditSpecialRecruit;
