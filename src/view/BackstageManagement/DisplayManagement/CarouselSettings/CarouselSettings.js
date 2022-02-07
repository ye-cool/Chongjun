import React from "react";
import "./CarouselSettings.css";
import { Col, Row, Button, Space, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    SerialNumber: "1",
    pictures: "banner1.png",
    link: "baidu.com",
  },
  {
    key: "2",
    SerialNumber: "1",
    pictures: "banner2.png",
    link: "taobao.com",
  },
  {
    key: "3",
    SerialNumber: "1",
    pictures: "banner3.png",
    link: "google.com",
  },
];

const columns = [
  {
    title: "序号",
    dataIndex: "SerialNumber",
    key: "SerialNumber",
    width: 70,
  },
  {
    title: "展示图片",
    dataIndex: "pictures",
    key: "pictures",
    width: 110,
  },
  {
    title: "链接",
    dataIndex: "link",
    key: "link",
    width: 70,
  },
  {
    title: "操作|状态",
    key: "OperateOrState",
    width: 70,
    render: (text, record) => <a>编辑</a>,
  },
];

function CarouselSettings() {
  return (
    <div>
      {/* topbar与table之间的间隔 */}
      <Row>
        <div style={{ marginBottom: 45 }}></div>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </div>
  );
}

export default CarouselSettings;
