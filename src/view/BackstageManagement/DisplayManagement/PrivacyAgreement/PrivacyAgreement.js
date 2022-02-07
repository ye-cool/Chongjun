import React from "react";
import "./PrivacyAgreement.css";
import { Row, Col, Input, Button, Space, Image } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function PrivacyAgreement() {
  return (
    <div>
      <Space className="privacyAgreement-space" direction="vertical" size={20}>
        <Row>
          <Col span={1}></Col>
          <Col span={21}>
            <span>用户隐私协议：</span>
            <TextArea placeholder="多行输入" rows={10} />
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

export default PrivacyAgreement;
