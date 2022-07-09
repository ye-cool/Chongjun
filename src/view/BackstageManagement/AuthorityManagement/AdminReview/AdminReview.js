import React from "react";
import "./AdminReview.css";
import { Col, Row, message, Pagination } from "antd";
import AdminTable from "../../../../component/table/AdminTable/AdminTable";
import { getBAccountNotAudited } from "../../../../apis/admin";

class AdminReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    getBAccountNotAudited().then(
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
        <AdminTable
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

export default AdminReview;
