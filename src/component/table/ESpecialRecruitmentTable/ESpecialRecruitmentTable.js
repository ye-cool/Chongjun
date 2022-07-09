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
      render: (text, record) => (
        <div>
          <span>{record.registerStartTime.replace("-", ".")}</span>-
          <span>{record.registerEndTime.replace("-", ".")}</span>
        </div>
      ),
    },
    {
      title: "活动时间",
      key: "ActivityTime",
      render: (text, record) => (
        <div>
          <span>{record.recruitStartTime.replace("-", ".")}</span>-
          <span>{record.recruitEndTime.replace("-", ".")}</span>
        </div>
      ),
    },
    {
      title: "活动状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "参与情况",
      dataIndex: "participated",
      key: "participated",
      render: (text, record) => (
        <span>{text == true ? "已参与" : "未参与"}</span>
      ),
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <div>
          <Space size={10}>
            <a
              href="/#/admin/ESpecialRecruitment/detail"
              onClick={() => {
                localStorage.setItem("recruitId", record.id);
              }}
            >
              查看活动详情
            </a>
            <a
              href="/#/admin/ESpecialRecruitment/jobdetail"
              onClick={() => {
                localStorage.setItem("recruitId", record.id);
                localStorage.setItem("recruitName", record.recruitName);
              }}
            >
              查看岗位详情
            </a>
          </Space>
        </div>
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
