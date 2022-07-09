import { Col, Row, Button, Space, Input, message, Form, Pagination } from "antd";
import React from "react";
import "./EnterpriseAccountManagement.css";
import { SwapOutlined } from "@ant-design/icons";
import EnterpriseAccountTable from "../../../../component/table/EnterpriseAccountTable/EnterpriseAccountTable";
import { getSuperAccount } from "../../../../apis/admin";

class EnterpriseAccountManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.getList();
  }
  getList = (param) => {
    getSuperAccount(param).then(
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
  sortByName = () => {
    this.getList({
      sortByName: true,
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
              <Button onClick={this.sortByTime}>账号注册时间</Button>
              <Button onClick={this.sortByName}>企业名称</Button>
            </Space>
          </Col>
          <Col span={14}>
            <Form name="basic" onFinish={this.onFinish} autoComplete="off">
              <Space size={15}>
                <Form.Item>
                  <span>搜索条件:</span>
                </Form.Item>

                <Form.Item name="name">
                  <Input placeholder="企业名称" />
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
        <EnterpriseAccountTable
          data={this.state.dataSource.records}
          getList={this.getList}
        />
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

export default EnterpriseAccountManagement;
