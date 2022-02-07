import React from "react";
import "./AboutUs.css";
import { Row, Col, Input, Button, Space, Image } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function AboutUs() {
  return (
    <div>
      <Space className="aboutus-space" direction="vertical" size={20}>
        <Row>
          <Col span={1}></Col>
          <Col span={21}>
            <span>关于崇军：</span>
            <TextArea placeholder="多行输入" rows={10} />
          </Col>
        </Row>
        <Row justify="end">
          <Col span={1}>
            <Button>保存</Button>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={1}></Col>
          <Col span={21}>
            <span>合作单位：</span>
            <Space className="aboutus-space" direction="vertical" size={20}>
              <Row>
                <Col span={3}>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    preview={{
                      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    }}
                  />
                </Col>
                <Col span={15}>
                  <TextArea placeholder="多行输入" rows={5} />
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    preview={{
                      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    }}
                  />
                </Col>
                <Col span={15}>
                  <TextArea placeholder="多行输入" rows={5} />
                </Col>
              </Row>
              <Row>
                <Button>
                  <PlusCircleOutlined />
                  添加
                </Button>
              </Row>
            </Space>
          </Col>
        </Row>
        <Row justify="end">
          <Col span={1}>
            <Button>保存</Button>
          </Col>
          <Col span={2}></Col>
        </Row>
      </Space>
    </div>
  );
}

export default AboutUs;
