import { Col, Row, Button, Space, Select, Input, Table } from "antd";
import React from "react";
import { SwapOutlined } from "@ant-design/icons";

function EResumeTable(props) {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
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
      title: "投递时间",
      dataIndex: "sendTime",
      key: "sendTime",
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => {
        return (
          <a
            href={"/#/admin/JobManagement/resumeDetail"}
            onClick={() => {
              localStorage.setItem("rid", record.id);
              localStorage.setItem("openid", record.openid);
            }}
          >
            查看详情
          </a>
        );
      },
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

export default EResumeTable;
