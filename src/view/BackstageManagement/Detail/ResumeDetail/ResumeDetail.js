import { Col, Row, Button, Image, Space, message } from "antd";
import React from "react";
import { getResumeDetail, getResumePdfAdmin } from "../../../../apis/admin";
import { DownloadPdf } from "../../../../utils/dowmloadPdf";
import "./ResumeDetail.css";

class ResumeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: {} };
  }
  componentDidMount() {
    const openid = localStorage.getItem("openid");
    getResumeDetail(openid).then(
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
    getResumePdfAdmin({
      openid: this.state.dataSource.openid,
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
  render() {
    return (
      <div>
        <Space className="resumeDetail-space" direction="vertical" size={30}>
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
                  <Space
                    className="resumeDetail-space"
                    direction="vertical"
                    size={10}
                  >
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
                  <Space
                    className="resumeDetail-space"
                    direction="vertical"
                    size={10}
                  >
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
                      <Col>{this.state.dataSource.type}</Col>
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
            </div>
          </Row>
          <Row>
            <Col span={2}>个人简介：</Col>
            <Col span={20}>{this.state.dataSource.selfIntro}</Col>
          </Row>
          <Row>
            <Col span={2}>期望职位：</Col>
            <Col span={20}>
              {this.state.dataSource.expectedPosition?.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col span={3}>{item.area}</Col>
                    <Col span={3}>{item.type}</Col>
                    <Col span={3}>
                      {item.minSal}-{item.maxSal}千/月
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col span={2}>工作经历：</Col>
            <Col span={20}>
              <Space
                className="resumeDetail-space"
                direction="vertical"
                size={10}
              >
                {this.state.dataSource.workExp?.map((item, index) => {
                  return (
                    <Space
                      className="resumeDetail-space"
                      direction="vertical"
                      size={5}
                      key={index}
                    >
                      <Row>
                        <Col>工作经历{index + 1}：</Col>
                      </Row>
                      <Row>
                        <Col>单位名称：</Col>
                        <Col>{item.dept}</Col>
                      </Row>
                      <Row>
                        <Col>岗位名称：</Col>
                        <Col>{item.positionName}</Col>
                      </Row>
                      <Row>
                        <Col>工作时间：</Col>
                        <Col>
                          {item.startTime}-{item.endTime}
                        </Col>
                      </Row>
                      <Row>
                        <Col>工作内容：</Col>
                        <Col>{item.detail}</Col>
                      </Row>
                    </Space>
                  );
                })}
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={2}>教育背景：</Col>
            <Col span={20}>
              <Space
                className="resumeDetail-space"
                direction="vertical"
                size={10}
              >
                {this.state.dataSource.eduBack?.map((item, index) => {
                  return (
                    <Space
                      className="resumeDetail-space"
                      direction="vertical"
                      size={5}
                      key={index}
                    >
                      <Row>
                        <Col>{index + 1}：</Col>
                      </Row>
                      <Row>
                        <Col>毕业学校：</Col>
                        <Col>{item.school}</Col>
                      </Row>
                      <Row>
                        <Col>就读时间：</Col>
                        <Col>
                          {item.startTime}-{item.endTime}
                        </Col>
                      </Row>
                      <Row>
                        <Col>专业：</Col>
                        <Col>{item.major}</Col>
                      </Row>
                    </Space>
                  );
                })}
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={2}>证书：</Col>
            <Col span={24}>
              <Row>
                <Col span={4}>获奖情况：</Col>
                <Col>
                  <Space className="resumeDetail-space" size={10}>
                    {this.state.dataSource.certificateMap?.honerCertificate ==
                    null
                      ? ""
                      : this.state.dataSource.certificateMap
                          ?.honerCertificate == undefined
                      ? ""
                      : Object.keys(
                          this.state.dataSource.certificateMap?.honerCertificate
                        ).map((key) => {
                          return (
                            <Col key={key}>
                              <Row>{key}</Row>
                              <Row>
                                <Image
                                  width={100}
                                  height={100}
                                  src={`data:image/png;base64,${this.state.dataSource?.certificateMap?.honerCertificate[key]}`}
                                ></Image>
                              </Row>
                            </Col>
                          );
                        })}
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={4}>职业技术能力证书情况：</Col>
                <Col>
                  <Space className="resumeDetail-space" size={10}>
                    {this.state.dataSource.certificateMap?.skillCertificate ==
                    null
                      ? ""
                      : this.state.dataSource.certificateMap
                          ?.skillCertificate == undefined
                      ? ""
                      : Object.keys(
                          this.state?.dataSource?.certificateMap
                            ?.skillCertificate
                        ).map((key) => {
                          return (
                            <Col key={key}>
                              <Row>{key}</Row>
                              <Row>
                                <Image
                                  width={100}
                                  height={100}
                                  src={`data:image/png;base64,${this.state.dataSource?.certificateMap?.skillCertificate[key]}`}
                                ></Image>
                              </Row>
                            </Col>
                          );
                        })}
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}

export default ResumeDetail;
