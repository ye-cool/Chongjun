import { Col, Row, Button, Select, Space, Input, message, Form } from "antd";
import React from "react";
import "./ESpecialJobDetail.css";
import { getSpecialJobDetail } from "../../../../apis/company";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import EJobTable from "../../../../component/table/EJobTable/EJobTable";

const { Option } = Select;
class ESpecialJobDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.getList({
      companyId: localStorage.getItem("id"),
      recruitId: localStorage.getItem("recruitId"),
    });
  }
  getList = (param) => {
    getSpecialJobDetail(param).then(
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
  };
  sortByCount = () => {
    this.getList({
      companyId: localStorage.getItem("id"),
      recruitId: localStorage.getItem("recruitId"),
      sortByCount: true,
      upOrDown: false,
    });
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.getList({
      companyId: localStorage.getItem("id"),
      recruitId: localStorage.getItem("recruitId"),
      name: values.name,
      area: values.area,
      type: values.type,
    });
  };
  render() {
    return (
      <div>
        <Row justify="start">
          <Col span={1}></Col>
          <Col span={4}>
            <Space size={15}>
              <span>
                排序
                <SwapOutlined />:
              </span>
              <Button onClick={this.sortByCount}>投递人数</Button>
            </Space>
          </Col>
          <Col span={15}>
            <Form name="basic" onFinish={this.onFinish} autoComplete="off">
              <Space size={15}>
                <Form.Item>
                  <span>搜索条件:</span>
                </Form.Item>{" "}
                <Form.Item name="type">
                  <Select
                    placeholder="职业类别"
                    style={{ width: 110 }}
                    allowClear
                  >
                    {window.jobType.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="area">
                  <Select placeholder="地区" style={{ width: 110 }} allowClear>
                    {window.area.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="name">
                  <Input placeholder="职位名称" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Col>
          <a
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "50px",
            }}
            href="/#/admin/ESpecialRecruitment/add"
          >
            新增职位
          </a>
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <Row>
          <Col>专场招聘活动：{localStorage.getItem("recruitName")}</Col>
        </Row>
        <Row>
          <div style={{ marginBottom: 10 }}></div>
        </Row>
        <EJobTable data={this.state.dataSource?.records} />
      </div>
    );
  }
}

export default ESpecialJobDetail;
