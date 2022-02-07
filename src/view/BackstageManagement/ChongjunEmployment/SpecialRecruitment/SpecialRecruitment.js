import React from "react";
import "./SpecialRecruitment.css";
import { Col, Row, Button, Space, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

function SpecialRecruitment() {
  const dataSource = [
    {
      key: "1",
      SpecialName: "江西省退役军人线上招聘活动",
      BusinessRegistrationTime: "2021.10.01-2021.11.30",
      ActivityTime: "2021.11.01-2021.12.30",
      ActiveStatus: "企业报名中",
      ParticipatingCompanies: "28",
      NumberOfJobs: "56",
      TheNumberOfParticipants: "389",
    },
    {
      key: "2",
      SpecialName: "江西省退役军人线上招聘活动",
      BusinessRegistrationTime: "2021.10.01-2021.11.30",
      ActivityTime: "2021.11.01-2021.12.30",
      ActiveStatus: "企业报名中",
      ParticipatingCompanies: "28",
      NumberOfJobs: "56",
      TheNumberOfParticipants: "389",
    },
    {
      key: "3",
      SpecialName: "江西省退役军人线上招聘活动",
      BusinessRegistrationTime: "2021.10.01-2021.11.30",
      ActivityTime: "2021.11.01-2021.12.30",
      ActiveStatus: "企业报名中",
      ParticipatingCompanies: "28",
      NumberOfJobs: "56",
      TheNumberOfParticipants: "389",
    },
    {
      key: "4",
      SpecialName: "江西省退役军人线上招聘活动",
      BusinessRegistrationTime: "2021.10.01-2021.11.30",
      ActivityTime: "2021.11.01-2021.12.30",
      ActiveStatus: "企业报名中",
      ParticipatingCompanies: "28",
      NumberOfJobs: "56",
      TheNumberOfParticipants: "389",
    },
  ];

  const columns = [
    {
      title: "专场名称",
      dataIndex: "SpecialName",
      key: "SpecialName",
      width: 110,
    },
    {
      title: "企业报名时间",
      dataIndex: "BusinessRegistrationTime",
      key: "BusinessRegistrationTime",
      width: 70,
    },
    {
      title: "活动时间",
      dataIndex: "ActivityTime",
      key: "ActivityTime",
      width: 80,
    },
    {
      title: "活动状态",
      dataIndex: "ActiveStatus",
      key: "ActiveStatus",
      width: 70,
    },
    {
      title: "参与企业",
      dataIndex: "ParticipatingCompanies",
      key: "ParticipatingCompanies",
      width: 70,
    },
    {
      title: "岗位数量",
      dataIndex: "NumberOfJobs",
      key: "NumberOfJobs",
      width: 70,
    },
    {
      title: "参与人数",
      dataIndex: "TheNumberOfParticipants",
      key: "TheNumberOfParticipants",
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
      <Row justify="end">
        <Col span={2}>
          <Button>
            <PlusOutlined />
            新增专场招聘
          </Button>
        </Col>
        <Col span={1}></Col>
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

export default SpecialRecruitment;
