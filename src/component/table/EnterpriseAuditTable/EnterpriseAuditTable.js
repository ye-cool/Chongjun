import React from "react";
import { Col, Row, Button, Space, Table, Popconfirm, message } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import { putSuperAccountAudit } from "../../../apis/admin";

function EnterpriseAuditTable(props) {
  const columns = [
    {
      title: "申请时间",
      dataIndex: "registerTime",
      key: "registerTime",
    },
    {
      title: "企业名称",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "账号",
      dataIndex: "companyAccountNum",
      key: "companyAccountNum",
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
      title: "操作人",
      dataIndex: "auditor",
      key: "auditor",
      render: (text, record) => {
        return text == 0 ? null : text;
      },
    },
    {
      title: "操作|状态",
      key: "OperateOrState",
      render: (text, record) => {
        return record.pass == true ? (
          "已审核"
        ) : (
          <Space size={10}>
            <Popconfirm
              title="确定通过审核吗?"
              onConfirm={pass(record)}
              okText="确定"
              cancelText="取消"
            >
              <a>通过</a>
            </Popconfirm>
            <Popconfirm
              title="确定要拒绝吗?"
              onConfirm={reject(record)}
              okText="确定"
              cancelText="取消"
            >
              <a>拒绝</a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  const pass = (record) => () => {
    const param = {
      auditorId: localStorage.getItem("aid"),
      notAuditedCompanyAccId: record.cid,
      pass: true,
    };
    putSuperAccountAudit(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("审核通过");
          props.getlist();
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  const reject = (record) => () => {
    const param = {
      auditorId: localStorage.getItem("aid"),
      notAuditedCompanyAccId: record.cid,
      pass: false,
    };
    putSuperAccountAudit(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("已拒绝");
          props.getlist();
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            rowKey={(record) => record.cid}
            dataSource={props.data}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}

export default EnterpriseAuditTable;
