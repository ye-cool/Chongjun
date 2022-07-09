import { Col, Row, Image, Space, message, Button } from "antd";
import React from "react";
import "./ESpecialDetail.css";
import { ClusterOutlined, UserOutlined } from "@ant-design/icons";
import {
  getSpecialDetail,
  putSpecialParticipateIn,
} from "../../../../apis/company";

class ESpecialDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {} };
  }
  componentDidMount() {
    const rid = localStorage.getItem("recruitId");
    getSpecialDetail(rid).then(
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
  participateIn() {
    const param = {
      companyId: localStorage.getItem("id"),
      recruitId: localStorage.getItem("recruitId"),
    };
    putSpecialParticipateIn(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("成功报名");
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
              <Space className="detail-space" direction="vertical" size={25}>
                <Row>
                  <Col>
                    <h2>{this.state.dataSource.recruitName}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ClusterOutlined />
                    {this.state.dataSource.companyCount}家企业
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <UserOutlined />
                    {this.state.dataSource.positionCount}个岗位
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>

          <Row>
            <Col span={2}>活动情况：</Col>
            <Col span={20}>
              <Space direction="vertical">
                <Row>
                  <Col>企业报名时间：</Col>
                  <Col>
                    {" "}
                    {this.state.dataSource.registerStartTime}-{" "}
                    {this.state.dataSource.registerEndTime}
                  </Col>
                </Row>
                <Row>
                  <Col>活动时间：</Col>
                  <Col>
                    {" "}
                    {this.state.dataSource.recruitStartTime}-{" "}
                    {this.state.dataSource.recruitEndTime}
                  </Col>
                </Row>
                <Row>
                  <Col>活动介绍：</Col>
                  <Col> {this.state.dataSource.introduction}</Col>
                </Row>
                <Row>
                  <Col>服务对象：</Col>
                  <Col>
                    {this.state.dataSource.audienceList?.map((item) => {
                      return <Row key={item}>{item}</Row>;
                    })}
                  </Col>
                </Row>
                <Row>
                  <Col>组织单位：</Col>
                  <Col>
                    {this.state.dataSource.organizationList?.map((item) => {
                      return <Row key={item}>{item}</Row>;
                    })}
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Button onClick={this.participateIn}>报名参加</Button>
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default ESpecialDetail;
