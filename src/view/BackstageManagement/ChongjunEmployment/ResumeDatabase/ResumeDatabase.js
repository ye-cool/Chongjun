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
import React from "react";
import "./ResumeDatabase.css";
import { SwapOutlined } from "@ant-design/icons";
import ResumeTable from "../../../../component/table/ResumeTable/ResumeTable";
import { getResume, getMajor } from "../../../../apis/admin";

const { Option } = Select;
class ResumeDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], major: [] };
  }
  componentDidMount() {
    getMajor().then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({ major: res.data });
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
    this.getList();
  }
  getList = (param) => {
    getResume(param).then(
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
      sortByCount: true,
      upOrDown: false,
    });
  };
  sortByTime = () => {
    this.getList({
      sortByTime: true,
      upOrDown: false,
    });
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.getList({
      eduDegree: values.eduDegree,
      major: values.major,
      workTime: values.workTime,
      name: values.name,
    });
  };
  onChange = (pageNumber, pageSize) => {
    console.log("Page: ", pageNumber);
    console.log("Pagesize: ", pageSize);
    this.getList({
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
              <Button onClick={this.sortByCount}>投递次数</Button>
              <Button onClick={this.sortByTime}>注册时间</Button>
            </Space>
          </Col>
          <Col span={14}>
            <Form name="basic" onFinish={this.onFinish} autoComplete="off">
              <Space size={15}>
                <Form.Item>
                  <span>搜索条件:</span>
                </Form.Item>
                <Form.Item name="eduDegree">
                  <Select placeholder="学历" style={{ width: 110 }} allowClear>
                    {window.educationRequire.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="major">
                  <Select placeholder="专业" style={{ width: 110 }} allowClear>
                    {this.state.major.map((item, index) => {
                      return (
                        <Option key={index} value={item}>
                          {item}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item name="workTime">
                  <Select
                    placeholder="工作经验"
                    style={{ width: 110 }}
                    allowClear
                  >
                    {window.expRequire.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="name">
                  <Input placeholder="姓名" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Col>
         
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <ResumeTable data={this.state.dataSource.records} />
        <Pagination
          style={{ position: "absolute", right: "40px" }}
          showQuickJumper
          showSizeChanger={true}
          defaultPageSize={5}
          pageSizeOptions={[5,10,20,50,100]}
          current={this.state.dataSource.current}
          total={this.state.dataSource.total}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default ResumeDatabase;
