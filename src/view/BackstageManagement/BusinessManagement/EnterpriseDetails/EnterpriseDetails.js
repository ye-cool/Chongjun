import { Col, Row, Button, Space, Select, Input, Table } from "antd";
import React from "react";
import "./EnterpriseDetails.css";
import { SwapOutlined } from "@ant-design/icons";

const { Option } = Select;

function EnterpriseDetails() {
  const dataSource = [
    {
      key: "1",
      CompanyName: "国贸供应链服务有限公司",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      NumberOfJobPostings: "5",
      InterviewInvites: "0",
    },
    {
      key: "2",
      CompanyName: "国贸供应链服务有限公司",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      NumberOfJobPostings: "5",
      InterviewInvites: "0",
    },
    {
      key: "3",
      CompanyName: "国贸供应链服务有限公司",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      NumberOfJobPostings: "5",
      InterviewInvites: "0",
    },
    {
      key: "4",
      CompanyName: "国贸供应链服务有限公司",
      BusinessCategory: "民营企业",
      area: "北京  四川",
      NumberOfJobPostings: "5",
      InterviewInvites: "0",
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
      title: "岗位发布数量",
      dataIndex: "NumberOfJobPostings",
      key: "NumberOfJobPostings",
      width: 70,
    },
    {
      title: "面试邀约人数",
      dataIndex: "InterviewInvites",
      key: "InterviewInvites",
      width: 70,
    },
    {
      title: "操作",
      key: "operate",
      width: 70,
      render: (text, record) => <a>查看详情</a>,
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
            <Button>岗位数量</Button>
            <Button>面试邀约人数</Button>
          </Space>
        </Col>
        <Col span={14}>
          <Space size={15}>
            <span>搜索条件:</span>
            <Select placeholder="企业类别" style={{ width: 110 }} allowClear>
              <Option value="国企">国企</Option>
              <Option value="央企">央企</Option>
              <Option value="事业单位">事业单位</Option>
              <Option value="政府机关">政府机关</Option>
              <Option value="民营企业">民营企业</Option>
            </Select>
            <Select placeholder="地区" style={{ width: 110 }} allowClear>
              <Option value="北京市">北京市</Option>
            </Select>
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

export default EnterpriseDetails;
