import { Col, Row, Image, Space, message } from "antd";
import React from "react";
import "./SpecialDetail.css";
import { ClusterOutlined, UserOutlined } from "@ant-design/icons";
import JobTable from "../../../../component/table/JobTable/JobTable";
import EnterpriseTable from "../../../../component/table/EnterpriseTable/EnterpriseTable";
import {
  deleteSpecial,
  getBSpecialDetail,
  stopSpecial,
} from "../../../../apis/admin";

class SpecialDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {}, positionList: [], companyList: [] };
  }
  componentDidMount() {
    const rid = localStorage.getItem("recruitId");
    getBSpecialDetail(rid).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            dataSource: res.data,
            companyList: res.data.companyList,
            positionList: res.data.positionList,
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
  deleteRecruit = () => {
    const rid = localStorage.getItem("recruitId");
    deleteSpecial(rid).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("删除成功");
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  stopRecruit = () => {
    const rid = localStorage.getItem("recruitId");
    stopSpecial(rid).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("已结束该活动");
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
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
            <Col span={13}>
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
            <div style={{ marginLeft: "auto" }}>
              <Space>
                <a
                  href="/#/admin/ChongjunEmployment/SpecialRecruitment/editSpecialRecruit"
                  style={{ marginRight: "10px" }}
                >
                  编辑活动
                </a>
                <a
                  style={{ marginRight: "10px" }}
                  onClick={() => this.deleteRecruit()}
                >
                  删除活动
                </a>
                <a
                  style={{ marginRight: "10px" }}
                  onClick={() => this.stopRecruit()}
                >
                  结束活动
                </a>
              </Space>
            </div>
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
          <Row>
            <Col span={2}>参与企业：</Col>
            <Col span={20}>
              <EnterpriseTable data={this.state.companyList} />
            </Col>
          </Row>
          <Row>
            <Col span={2}>发布岗位：</Col>
            <Col span={20}>
              <JobTable
                data={this.state.positionList}
                isSpecial={true}
                specialId={this.state.dataSource.id}
              />
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default SpecialDetail;
