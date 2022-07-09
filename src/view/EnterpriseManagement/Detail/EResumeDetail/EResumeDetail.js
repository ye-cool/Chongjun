import { Col, Row, Button, Image, Space, Tag, message } from "antd";
import React from "react";
import "./EResumeDetail.css";
import EResumeTable from "../../../../component/table/EResumeTable/EResumeTable";
import { getPositionResume } from "../../../../apis/company";

class EResumeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    let pid = localStorage.getItem("pid");
    getPositionResume(pid).then(
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
            <Col>
              <Space direction="vertical" size={10}>
                <Row>
                  <Col>{this.state.dataSource.positionName}</Col>
                  <Col span={1}></Col>
                  <Col>
                    {this.state.dataSource.minSal}-
                    {this.state.dataSource.maxSal}千/月
                  </Col>
                </Row>
                <Row>
                  <Space size={10}>
                    <Col>{this.state.dataSource.positionRequest?.workExp}</Col>
                    <Col>|</Col>
                    <Col>
                      {this.state.dataSource.positionRequest?.eduDegree}
                    </Col>
                    <Col>|</Col>
                    <Col>{this.state.dataSource.positionRequest?.address}</Col>
                  </Space>
                </Row>
                <Row>
                  {this.state.dataSource.feature?.map((item) => {
                    return (
                      <Col key={item}>
                        <Tag>{item}</Tag>
                      </Col>
                    );
                  })}
                </Row>
              </Space>
            </Col>
          </Row>
          <Row>
            <EResumeTable data={this.state.dataSource?.resumeInfoList} />
          </Row>
        </Space>
      </div>
    );
  }
}

export default EResumeDetail;
