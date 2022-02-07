import React from "react";
import "./EnterpriseAudit.css";
import { Col, Row, Button, Space, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

function EnterpriseAudit() {
  const dataSource = [
    {
      key: "1",
      ApplicationTime: "2021.11.23 17:45",
      CompanyName: "国贸供应链服务有限公司",
      account: "13578787878",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      operator: "管理员A",
    },
    {
      key: "2",
      ApplicationTime: "2021.11.23 17:45",
      CompanyName: "国贸供应链服务有限公司",
      account: "13578787878",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      operator: "管理员A",
    },
    {
      key: "3",
      ApplicationTime: "2021.11.23 17:45",
      CompanyName: "国贸供应链服务有限公司",
      account: "13578787878",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      operator: "管理员A",
    },
    {
      key: "4",
      ApplicationTime: "2021.11.23 17:45",
      CompanyName: "国贸供应链服务有限公司",
      account: "13578787878",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      operator: "管理员A",
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
      title: "企业名称",
      dataIndex: "CompanyName",
      key: "CompanyName",
      width: 110,
    },
    {
      title: "账号",
      dataIndex: "account",
      key: "account",
      width: 70,
    },
    {
      title: "企业类别",
      dataIndex: "BusinessCategory",
      key: "BusinessCategory",
      width: 70,
    },
    {
      title: "所在地区",
      dataIndex: "area",
      key: "area",
      width: 70,
    },
    {
      title: "操作人",
      dataIndex: "operator",
      key: "operator",
      width: 70,
    },
    {
      title: "操作|状态",
      key: "OperateOrState",
      width: 70,
      render: (text, record) => (
        <div>
          <a>通过 </a>
          <a>拒绝</a>
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

export default EnterpriseAudit;
