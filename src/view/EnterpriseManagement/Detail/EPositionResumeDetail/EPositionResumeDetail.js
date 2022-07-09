import { Col, Row, Button, Image, Space, message } from "antd";
import React from "react";
import {
  getPositionResumeDetail,
  getResumePdfCompany,
  putResume,
} from "../../../../apis/company";
import { DownloadPdf } from "../../../../utils/dowmloadPdf";
import "./EPositionResumeDetail.css";

class EPositionResumeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {} };
  }
  componentDidMount() {
    let openid = localStorage.getItem("openid");
    getPositionResumeDetail(openid).then(
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
  downloadPdf = () => {
    getResumePdfCompany({
      openid: this.state.dataSource.openid,
      positionId: localStorage.getItem("pid"),
    }).then(
      (res) => {
        console.log("get article response:", res);
        DownloadPdf(res);
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  putResume = () => {
    putResume({
      pass: true,
      resumeId: localStorage.getItem("rid"),
    }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("已发送面试邀约");
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
            <Col span={2}>个人信息：</Col>
            <Col span={20}>
              <Row>
                <Col span={5}>
                  <Image
                    width={150}
                    src={`data:image/png;base64,${this.state.dataSource.photo}`}
                  ></Image>
                </Col>
                <Col>
                  <Space direction="vertical" size={10}>
                    <Row>
                      <Col>姓名：</Col>
                      <Col>{this.state.dataSource.name}</Col>
                    </Row>
                    <Row>
                      <Col>身高：</Col>
                      <Col>{this.state.dataSource.height}</Col>
                    </Row>
                    <Row>
                      <Col>学历：</Col>
                      <Col>{this.state.dataSource.eduDegree}</Col>
                    </Row>
                    <Row>
                      <Col>性别：</Col>
                      <Col>{this.state.dataSource.sex}</Col>
                    </Row>
                    <Row>
                      <Col>体重：</Col>
                      <Col>{this.state.dataSource.weight}</Col>
                    </Row>
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Space direction="vertical" size={10}>
                    <Row>
                      <Col>政治面貌：</Col>
                      <Col>{this.state.dataSource.politicsStatus}</Col>
                    </Row>
                    <Row>
                      <Col>联系电话：</Col>
                      <Col>{this.state.dataSource.phone}</Col>
                    </Row>
                    <Row>
                      <Col>身份证号：</Col>
                      <Col>{this.state.dataSource.idNumber}</Col>
                    </Row>
                    <Row>
                      <Col>出生日期：</Col>
                      <Col>{this.state.dataSource.birthday}</Col>
                    </Row>
                    <Row>
                      <Col>现居地：</Col>
                      <Col>{this.state.dataSource.presentAddr}</Col>
                    </Row>
                    <Row>
                      <Col>军衔（选填）：</Col>
                      <Col>{this.state.dataSource.armType}</Col>
                    </Row>
                    <Row>
                      <Col>邮箱（选填）：</Col>
                      <Col>{this.state.dataSource.email}</Col>
                    </Row>
                    <Row>
                      <Col>工作经验：</Col>
                      <Col>{this.state.dataSource.workTime}</Col>
                    </Row>
                  </Space>
                </Col>
              </Row>
            </Col>
            <div style={{ position: "absolute", right: "100px" }}>
              <Button onClick={this.downloadPdf}>下载简历</Button>
              <Button onClick={this.putResume}>面试邀约</Button>
            </div>
          </Row>
          <Row>
            <Col span={2}>个人简介：</Col>
            <Col span={20}>{this.state.dataSource.selfIntro}</Col>
          </Row>
          <Row>
            <Col span={2}>期望职位：</Col>
            <Col span={20}>
              {this.state.dataSource.expectedPosition?.map((item) => {
                return (
                  <Row key={item}>
                    <Col>{item.area}</Col>
                    <Col span={1}></Col>
                    <Col>{item.type}</Col>
                    <Col span={1}></Col>
                    <Col>
                      {item.minSal}-{item.maxSal}千/月
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default EPositionResumeDetail;
