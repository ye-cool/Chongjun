import React from "react";
import "./AdminReview.css";
import { Col, Row, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

function AdminReview() {
  const dataSource = [
    {
      key: "1",
      ApplicationTime: "2021.12.20",
      nickname: "管理员A",
      account: "13578787878",
      operator: "管理员A",
    },
    {
      key: "2",
      ApplicationTime: "2021.12.20",
      nickname: "管理员B",
      account: "13578787878",
      operator: "管理员B",
    },
  ];

  const columns = [
    {
      title: "申请时间",
      dataIndex: "ApplicationTime",
      key: "ApplicationTime",
      width: 70,
    },
    {
      title: "昵称",
      dataIndex: "nickname",
      key: "nickname",
      width: 70,
    },
    {
      title: "账号",
      dataIndex: "account",
      key: "account",
      width: 110,
    },
    {
      title: "操作",
      key: "operate",
      width: 70,
      render: (text, record) => (
        <div>
          <a>通过 </a>
          <a>拒绝</a>
        </div>
      ),
    },
    {
      title: "操作人",
      dataIndex: "operator",
      key: "operator",
      width: 70,
    },
  ];
  return (
    <div>
      <Row justify="end">
        <Col span={2}></Col>
        <Col span={1}></Col>
      </Row>
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

export default AdminReview;
