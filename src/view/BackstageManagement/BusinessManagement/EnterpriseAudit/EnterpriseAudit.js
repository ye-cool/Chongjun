import React from "react";
import "./EnterpriseAudit.css";
import { Col, Row, message, Pagination } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import EnterpriseAuditTable from "../../../../component/table/EnterpriseAuditTable/EnterpriseAuditTable";
import { getSuperAccountNotAudited } from "../../../../apis/admin";

class EnterpriseAudit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.getList();
  }
  getList = (param) => {
    getSuperAccountNotAudited(param).then(
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
        <EnterpriseAuditTable
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

export default EnterpriseAudit;
