import { Col, Row, Button, Image, Space, Tag, message } from "antd";
import React from "react";
import "./EnterpriseDetail.css";
import { StarFilled } from "@ant-design/icons";
import JobTable from "../../../../component/table/JobTable/JobTable";
import { getBCompanyDetail } from "../../../../apis/admin";

class EnterpriseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {}};
  }
  componentDidMount() {
    const companyId = localStorage.getItem("id");
    getBCompanyDetail(companyId).then(
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
  render() {
    return (
      <div>
        <Space className="detail-space" direction="vertical" size={30}>
          <Row>
            <Col span={4}>
              <Image
                width={150}
                src={`data:image/png;base64,${this.state.dataSource.photo}`}
              ></Image>
            </Col>
            <Col span={20}>
              <Space className="detail-space" direction="vertical" size={10}>
                <Row>
                  <Col>
                    <h2>{this.state.dataSource.companyName}</h2>
                  </Col>
                  <Col span={1}></Col>
                  <Col>
                    <StarFilled />
                    {this.state.dataSource.collectedCount}
                  </Col>
                </Row>
                <Row>
                  <Col>{this.state.dataSource.address}</Col>
                  <Col span={1}></Col>
                  <Col>{window.companyType[this.state.dataSource.type]}</Col>
                </Row>
              </Space>
            </Col>
          </Row>
          {/* 分割线 */}
          <Row>
            <Col span={20} style={{ color: "gray" }}>
              —————————————————————————————————————————————————
            </Col>
          </Row>
          <Row>
            <Col span={2}>企业特色：</Col>
            <Col span={20}>
              <Row>
                {this.state.dataSource.feature?.map((item) => {
                  return (
                    <Col key={item}>
                      <Tag>{item}</Tag>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={2}>公司信息：</Col>
            <Col span={20}>{this.state.dataSource.companyInfo}</Col>
          </Row>
          <Row>
            <Col span={2}>公司地址：</Col>
            <Col span={20}>
              <Row>{this.state.dataSource.detailAddress}</Row>
            </Col>
          </Row>
          <Row>
            <Col span={2}>招聘职位：</Col>
            <Col span={20}>
              <JobTable data={this.state.dataSource?.positionList}/>
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default EnterpriseDetail;
