import { Col, Row, Button, Space, Select, Input, Table } from "antd";
import React from "react";
import { SwapOutlined } from "@ant-design/icons";

function ResumeTable(props) {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学历",
      dataIndex: "eduDegree",
      key: "eduDegree",
    },
    {
      title: "工作经验",
      dataIndex: "workTime",
      key: "workTime",
    },
    {
      title: "专业",
      key: "majors",
      render: (text, record) => (
        <Space size={5}>
          {record.majors.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </Space>
      ),
    },
    {
      title: "地区",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "投递次数",
      dataIndex: "sendCount",
      key: "sendCount",
    },
    {
      title: "注册时间",
      dataIndex: "registerTime",
      key: "registerTime",
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <a
          href="/#/admin/ChongjunEmployment/ResumeDatabase/detail"
          onClick={() => localStorage.setItem("openid", record.openid)}
        >
          查看详情
        </a>
      ),
    },
  ];
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            rowKey={(record) => record.openid}
            dataSource={props.data}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ResumeTable;
