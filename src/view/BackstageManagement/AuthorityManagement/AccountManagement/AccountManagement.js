import React from "react";
import "./AccountManagement.css";
import { Col, Row, message, Pagination } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import AccountTable from "../../../../component/table/AccountTable/AccountTable";
import { getBAccount } from "../../../../apis/admin";

class AccountManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], pagination: [] };
  }
  componentDidMount() {
    this.getList();
  }
  getList = (param) => {
    getBAccount(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          let AuditedAccount = res.data.records.filter(
            (item) => item.pass == true
          );
          this.setState({
            dataSource: AuditedAccount,
            pagination: res.data,
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
        <Row justify="end">
          <Col span={2}></Col>
          <Col span={1}></Col>
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 45 }}></div>
        </Row>
        <AccountTable data={this.state.dataSource} getList={this.getList} />
        <Pagination
          style={{ position: "absolute", right: "40px" }}
          showQuickJumper
          showSizeChanger={true}
          defaultPageSize={5}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          current={this.state.pagination.current}
          total={this.state.pagination.total}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default AccountManagement;
