import { Col, Row, Space, Tag, message, Button, Popconfirm } from "antd";
import React from "react";
import "./EjobDetail.css";
import { StarFilled } from "@ant-design/icons";
import {
  getPositionDetail,
  putPositionHide,
  putPositionShow,
} from "../../../../apis/company";

class EJobDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {} };
  }
  componentDidMount() {
    const param = {
      positionId: localStorage.getItem("pid"),
      companyId: localStorage.getItem("id"),
    };
    getPositionDetail(param.positionId, param.companyId).then(
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
  confirm() {
    const param = {
      positionId: localStorage.getItem("pid"),
      companyId: localStorage.getItem("id"),
    };
    if (localStorage.getItem("show") == "true") {
      putPositionHide(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("成功下架该职位");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else {
      putPositionShow(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("成功上架该职位");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    }
  }
  cancle() {}
  render() {
    return (
      <div>
        <Space className="detail-space" direction="vertical" size={30}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Space className="detail-space" direction="vertical" size={10}>
                <Row>
                  <Col>{this.state.dataSource.positionName}</Col>
                  <Col span={1}></Col>
                  <Col>
                    {this.state.dataSource.salary?.minSal}-
                    {this.state.dataSource.salary?.maxSal}千/月
                  </Col>
                  <Col style={{ marginLeft: "auto" }}>
                    <a
                      href="/#/admin/JobManagement/edit"
                      style={{ color: "black", marginRight: "50px" }}
                    >
                      编辑职位
                    </a>
                  </Col>
                  <Col>
                    {localStorage.getItem("show") == "true" ? (
                      <Popconfirm
                        title="你确定要下架该职位吗?"
                        onConfirm={this.confirm}
                        onCancel={this.cancel}
                        okText="确认"
                        cancelText="取消"
                      >
                        <a style={{ color: "black" }}>下架该职位</a>
                      </Popconfirm>
                    ) : (
                      <Popconfirm
                        title="你确定要上架该职位吗?"
                        onConfirm={this.confirm}
                        onCancel={this.cancel}
                        okText="确认"
                        cancelText="取消"
                      >
                        <a style={{ color: "black" }}>上架该职位</a>
                      </Popconfirm>
                    )}
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
                <Row>
                  <Col>{this.state.dataSource.companyName}</Col>
                  <Col span={1}></Col>
                  <Col>{window.companyType[this.state.dataSource.type]}</Col>
                </Row>
              </Space>
            </Col>
          </Row>
          {/* 分割线 */}
          <Row>
            <Col span={2}></Col>
            <Col span={20} style={{ color: "gray" }}>
              —————————————————————————————————————————————
            </Col>
          </Row>
          <Row>
            <Col span={2}>任职要求：</Col>
            <Col span={20}>
              <ol>
                {" "}
                {this.state.dataSource.appointmentRequest?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ol>
            </Col>
          </Row>
          <Row>
            <Col span={2}>岗位职责：</Col>
            <Col span={20}>
              <ol>
                {" "}
                {this.state.dataSource.duty?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ol>
            </Col>
          </Row>
          <Row>
            <Col span={2}>工作时间：</Col>
            <Col span={20}>
              <ul>
                {this.state.dataSource.workTime?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={2}>公司信息：</Col>
            <Col span={20}>{this.state.dataSource.companyInfo}</Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default EJobDetail;
