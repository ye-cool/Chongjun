import { Col, Row, Button, Image, Space, Tag } from "antd";
import React from "react";
import "./JobDetail.css";
import { StarFilled } from "@ant-design/icons";

function JobDetail() {
  return (
    <div>
      <Space className="detail-space" direction="vertical" size={30}>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Space className="detail-space" direction="vertical" size={10}>
              <Row>
                <Col>初级会计</Col>
                <Col span={1}></Col>
                <Col>5.0-7.0千/月</Col>
                <Col span={1}></Col>
                <Col>
                  <StarFilled />
                  20
                </Col>
              </Row>
              <Row>
                <Col>经验不限</Col>
                <Col>|</Col>
                <Col>大专</Col>
                <Col>|</Col>
                <Col>四川省</Col>
              </Row>
              <Row>
                <Col>
                  <Tag>高温补贴</Tag>
                </Col>
                <Col>
                  <Tag>绩效奖金</Tag>
                </Col>
                <Col>
                  <Tag>包住</Tag>
                </Col>
                <Col>
                  <Tag>五险一金</Tag>
                </Col>
              </Row>
              <Row>
                <Col>国贸供应链服务有限公司</Col>
                <Col span={1}></Col>
                <Col>民营企业</Col>
              </Row>
            </Space>
          </Col>
        </Row>
        {/* 分割线 */}
        <Row>
          <Col span={2}></Col>
          <Col span={20}>—————————————————————————————————————————————</Col>
        </Row>
        <Row>
          <Col span={2}>任职要求：</Col>
          <Col span={20}>
            <Row>1</Row>
            <Row>2</Row>
            <Row>3</Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>岗位职责：</Col>
          <Col span={20}>
            <Row>1</Row>
            <Row>2</Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>工作时间：</Col>
          <Col span={20}>
            <Row>周一至周五</Row>
            <Row>上午9；00-12；00</Row>
            <Row>下午1；30-6；00</Row>
            <Row>周末双休，法定节假日休息</Row>
          </Col>
        </Row>
        <Row>
          <Col span={2}>公司信息：</Col>
          <Col span={20}>
            公司联合银行、中国进出口信用保险公司共同搭建了便携式线上贸易综合服务平台
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default JobDetail;
