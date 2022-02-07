import { Col, Row, Button, Image, Space } from "antd";
import React from "react";
import "./ResumeDetail.css";

function ResumeDetail() {
  return (
    <div>
      <Space className="detail-space" direction="vertical" size={30}>
        <Row>
          <Col span={2}>个人信息：</Col>
          <Col span={20}>
            <Row>
              <Col span={3}>
                <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                ></Image>
              </Col>
              <Col>
                <Row>
                  <Col>姓名：</Col>
                  <Col>王一</Col>
                </Row>
                <Row>
                  <Col>身高：</Col>
                  <Col>180cm</Col>
                </Row>
                <Row>
                  <Col>学历：</Col>
                  <Col>本科</Col>
                </Row>
                <Row>
                  <Col>性别：</Col>
                  <Col>男</Col>
                </Row>
                <Row>
                  <Col>体重：</Col>
                  <Col>72kg</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>政治面貌：</Col>
                  <Col>中共党员</Col>
                </Row>
                <Row>
                  <Col>联系电话：</Col>
                  <Col>12548433772</Col>
                </Row>
                <Row>
                  <Col>身份证号：</Col>
                  <Col>564345322232223222</Col>
                </Row>
                <Row>
                  <Col>出生日期：</Col>
                  <Col>1990年1月1日</Col>
                </Row>
                <Row>
                  <Col>现居地：</Col>
                  <Col>四川省成都市</Col>
                </Row>
                <Row>
                  <Col>军衔（选填）：</Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>邮箱（选填）：</Col>
                  <Col>2828239192@qq.com</Col>
                </Row>
                <Row>
                  <Col>工作经验：</Col>
                  <Col>即将退役</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>个人简介：</Col>
          <Col span={20}>
            非常热爱市场销售工作，有着十分饱满的创业激情。在××××两年从事现磨现煮的咖啡市场销售工作中积累了大量的实践经验和客户资源。与省内主要的二百多家咖啡店铺经销商建立了十分密切的联系，并在行业中拥有广泛的业务关系。在去年某省的咖啡博览会上为公司首次签定了海外的定单。能团结自己的同事一起取得优异的销售业绩。
          </Col>
        </Row>
        <Row>
          <Col span={2}>期望职位：</Col>
          <Col span={20}>
            <Row>
              <Col span={2}>四川省</Col>
              <Col span={2}>管理类</Col>
              <Col span={2}>2-5千/月</Col>
            </Row>
            <Row>
              <Col span={2}>四川省</Col>
              <Col span={2}>销售类</Col>
              <Col span={2}>2-5千/月</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>工作经历：</Col>
          <Col span={20}>
            <Row>
              <Col>工作经历1：</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>单位名称：</Col>
              <Col>xxxx有限公司</Col>
            </Row>
            <Row>
              <Col>岗位名称：</Col>
              <Col>销售经理</Col>
            </Row>
            <Row>
              <Col>工作时间：</Col>
              <Col>2019年11月-2020年5月</Col>
            </Row>
            <Row>
              <Col>工作内容：</Col>
              <Col>
                通过确定销售领域、配额、目标来协调销售工作，并为销售代表制定培训项目。分析销售数据，确定销售潜力并监控客户的偏好
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>教育背景：</Col>
          <Col span={20}>
            <Row>
              <Col>毕业学校：</Col>
              <Col>xxxx大学</Col>
            </Row>
            <Row>
              <Col>就读时间：</Col>
              <Col>2018年9月-2022年6月</Col>
            </Row>
            <Row>
              <Col>专业：</Col>
              <Col>信息与软件工程</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>证书：</Col>
          <Col span={20}>
            <Row>
              <Col span={4}>获奖情况：</Col>
              <Col span={3}>
                <Row>获奖一</Row>
                <Row>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  ></Image>
                </Row>
              </Col>
              <Col span={3}>
                <Row>获奖二</Row>
                <Row>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  ></Image>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={4}>职业技术能力证书情况：</Col>
              <Col span={3}>
                <Row>证书1</Row>
                <Row>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  ></Image>
                </Row>
              </Col>
              <Col span={3}>
                <Row>证书2</Row>
                <Row>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  ></Image>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default ResumeDetail;
