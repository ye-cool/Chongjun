import { Col, Row, Button, Space, Select, Input, Table } from "antd";
import React from "react";
import "./EnterpriseAccountManagement.css";
import { SwapOutlined } from "@ant-design/icons";

const { Option } = Select;

function EnterpriseAccountManagement() {
  const dataSource = [
    {
      key: "1",
      CompanyName: "国贸供应链服务有限公司",
      account: "135787878",
      AccountType: "高级账号",
      AccountAndPassword: "dsfhvgafuiogf",
      AccountRegistrationTime: "2021.12.20",
    },
    {
      key: "2",
      CompanyName: "国贸供应链服务有限公司",
      account: "135787878",
      AccountType: "高级账号",
      AccountAndPassword: "dsfhvgafuiogf",
      AccountRegistrationTime: "2021.12.20",
    },
    {
      key: "3",
      CompanyName: "国贸供应链服务有限公司",
      account: "135787878",
      AccountType: "高级账号",
      AccountAndPassword: "dsfhvgafuiogf",
      AccountRegistrationTime: "2021.12.20",
    },
    {
      key: "4",
      CompanyName: "国贸供应链服务有限公司",
      account: "135787878",
      AccountType: "高级账号",
      AccountAndPassword: "dsfhvgafuiogf",
      AccountRegistrationTime: "2021.12.20",
    },
  ];

  const columns = [
    {
      title: "企业名称",
      dataIndex: "CompanyName",
      key: "CompanyName",
      width: 20,
    },
    {
      title: "账号",
      dataIndex: "account",
      key: "account",
      width: 70,
    },
    {
      title: "账号类型",
      dataIndex: "AccountType",
      key: "AccountType",
      width: 70,
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
      render: (text, record) => <a>密码重置</a>,
    },
  ];
  return (
    <div>
      <Row justify="start">
        <Col span={1}></Col>
        <Col span={6}>
          <Space size={15}>
            <span>
              排序
              <SwapOutlined />:
            </span>
            <Button>账号注册时间</Button>
            <Button>企业名称</Button>
          </Space>
        </Col>
        <Col span={14}>
          <Space size={15}>
            <span>搜索条件:</span>
            <Input placeholder="企业名称" />
            <Button>搜索</Button>
          </Space>
        </Col>
      </Row>
      {/* topbar与table之间的间隔 */}
      <Row>
        <div style={{ marginBottom: 20 }}></div>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </div>
  );
}

export default EnterpriseAccountManagement;
