import React from "react";
import "./SpecialRecruitment.css";
import { Col, Row, Button, message, Pagination } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import SpecialRecruitmentTable from "../../../../component/table/SpecialRecruitmentTable/SpecialRecruitmentTable";
import { getBSpecial } from "../../../../apis/admin";

class SpecialRecruitment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.getList();
  }
  getList=(param)=>{
    getBSpecial(param).then(
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
  }
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
          <Col span={2}>
            <Button>
              <PlusOutlined />
              <a
                style={{ color: "black" }}
                href={
                  "/#/admin/ChongjunEmployment/SpecialRecruitment/addSpecialRecruit"
                }
              >
                新增专场招聘
              </a>
            </Button>
          </Col>
          <Col span={1}></Col>
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <SpecialRecruitmentTable data={this.state.dataSource.records} />
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

export default SpecialRecruitment;
