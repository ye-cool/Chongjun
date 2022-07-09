import React from "react";
import "./JobManagement.css";
import {
  Col,
  Row,
  Button,
  Space,
  Select,
  Input,
  message,
  Form,
  Pagination,
} from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import EJobTable from "../../../component/table/EJobTable/EJobTable";
import { getPosition } from "../../../apis/company";
import { get } from "../../../utils/http";

const { Option } = Select;

class JobManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }

  componentDidMount() {
    this.getList({
      companyId: localStorage.getItem("id"),
    });
  }
  getList = (param) => {
    getPosition(param).then(
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
      sortByCount: true,
      upOrDown: false,
    });
  };
  sortBySal = () => {
    this.getList({
      companyId: localStorage.getItem("id"),
      sortBySal: true,
      upOrDown: false,
    });
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.getList({
      companyId: localStorage.getItem("id"),
      name: values.name,
      area: values.area,
      type: values.type,
    });
  };
  onChange = (pageNumber, pageSize) => {
    console.log("Page: ", pageNumber);
    console.log("Pagesize: ", pageSize);
    this.getList({
      companyId: localStorage.getItem("id"),
      page: pageNumber,
      size: pageSize,
    });
  };
  render() {
    return (
      <div>
        <Row justify="start">
          <Col span={1}></Col>
          <Col span={6}>
            <Space size={15}>
              <span>
                排序
                <SwapOutlined />:
              </span>
              <Button onClick={this.sortByCount}>投递人数</Button>
              <Button onClick={this.sortBySal}>薪资</Button>
            </Space>
          </Col>
          <Col span={14}>
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
            href="/#/admin/JobManagement/add"
          >
            新增职位
          </a>
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <EJobTable data={this.state.dataSource.records} />
        <Pagination
          style={{ position: "absolute", right: "40px" }}
          showQuickJumper
          showSizeChanger={true}
          defaultPageSize={5}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          current={this.state.dataSource.current}
          total={this.state.dataSource.total}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default JobManagement;
