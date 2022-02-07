import React from "react";
import "./AccountManagement.css";
import { Col, Row, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

function AccountManagement() {
  const dataSource = [
    {
      key: "1",
      nickname: "管理员A",
      account: "13578787878",
      AccountAndPassword: "sdgaedgagfgr",
      AccountRegistrationTime: "2021.12.20",
    },
    {
      key: "2",
      nickname: "管理员B",
      account: "13578787878",
      AccountAndPassword: "sdgaedgagfgr",
      AccountRegistrationTime: "2021.12.20",
    },
  ];

  const columns = [
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
      title: "账号密码",
      dataIndex: "AccountAndPassword",
      key: "AccountAndPassword",
      width: 70,
    },
    {
      title: "账号注册时间",
      dataIndex: "AccountRegistrationTime",
      key: "AccountRegistrationTime",
      width: 70,
    },
    {
      title: "操作",
      key: "operate",
      width: 70,
      render: (text, record) => (
        <div>
          <a>密码重置 </a>
          <a>删除账号</a>
        </div>
      ),
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

export default AccountManagement;
