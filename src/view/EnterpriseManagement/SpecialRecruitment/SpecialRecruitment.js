import React from "react";
import "./SpecialRecruitment.css";
import { Col, Row, Button, message, Pagination } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import ESpecialRecruitmentTable from "../../../component/table/ESpecialRecruitmentTable/ESpecialRecruitmentTable";
import { getSpecial } from "../../../apis/company";

class ESpecialRecruitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.getList();
  }
  getList = (param) => {
    let id = localStorage.getItem("id");
    getSpecial(id, param).then(
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
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <ESpecialRecruitmentTable data={this.state.dataSource.records} />
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

export default ESpecialRecruitment;
