import React from "react";
import { Col, Row, Button, Space, Table } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

function SpecialRecruitmentTable(props) {
  const columns = [
    {
      title: "专场名称",
      dataIndex: "recruitName",
      key: "recruitName",
    },
    {
      title: "企业报名时间",
      key: "BusinessRegistrationTime",
      render: (text, record) => {
        return (
          <Space>
            {record.companySignStartTime}-{record.companySignEndTime}
          </Space>
        );
      },
    },
    {
      title: "活动时间",
      key: "ActivityTime",
      render: (text, record) => {
        return (
          <Space>
            {record.recruitStartTime}-{record.recruitEndTime}
          </Space>
        );
      },
    },
    {
      title: "活动状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "参与企业",
      dataIndex: "companyCount",
      key: "companyCount",
    },
    {
      title: "岗位数量",
      dataIndex: "positionCount",
      key: "positionCount",
    },
    {
      title: "参与人数",
      dataIndex: "resumeSendCount",
      key: "resumeSendCount",
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <Space>
          <a
            href="/#/admin/ChongjunEmployment/SpecialRecruitment/detail"
            onClick={() => localStorage.setItem("recruitId", record.id)}
          >
            查看详情
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={props.data}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SpecialRecruitmentTable;
