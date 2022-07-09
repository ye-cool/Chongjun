import { Col, Row, Table } from "antd";
import React from "react";

function EnterpriseTable(props) {
  const columns = [
    {
      title: "企业名称",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "企业类别",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "所在地区",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "岗位发布数量",
      key: "positionCount",
      render: (text, record) => {
        return record.positionCount == undefined ? (
          <div>{record.specialPositionCount}</div>
        ) : (
          <div>{record.positionCount}</div>
        );
      },
    },
    {
      title: "面试邀约人数",
      dataIndex: "interviewCount",
      key: "interviewCount",
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <a
          href="/#/admin/BusinessManagement/EnterpriseDetails/detail"
          onClick={() => localStorage.setItem("id", record.id)}
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
            rowKey={(record) => record.id}
            dataSource={props.data}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}
export default EnterpriseTable;
