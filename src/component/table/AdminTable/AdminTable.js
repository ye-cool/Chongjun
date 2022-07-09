import React from "react";
import { Col, Row, Space, Table, Popconfirm, message } from "antd";
import { putAccountAudit } from "../../../apis/company";
import { putBAccountAudited } from "../../../apis/admin";

function AdminTable(props) {
  const columns = [
    {
      title: "申请时间",
      dataIndex: "registerTime",
      key: "registerTime",
      render: (registerTime) => <div>{registerTime.substring(0, 10)}</div>,
    },
    {
      title: "昵称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "账号",
      key: "Account",
      render: (text, record) => {
        let role = localStorage.getItem("role");
        if (role == "admin") {
          return <div>{record.adminAccount}</div>;
        } else if (role == "company") {
          return <div>{record.companyAccountNum}</div>;
        }
      },
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <div>
          {record.pass == true ? (
            "已通过"
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
          )}
        </div>
      ),
    },
    {
      title: "操作人",
      dataIndex: "auditor",
      key: "auditor",
      render: (auditor) => <div>{auditor == 0 ? null : auditor}</div>,
    },
  ];
  const pass = (record) => () => {
    let role = localStorage.getItem("role");
    if (role == "admin") {
      const param = {
        auditorAid: localStorage.getItem("aid"),
        notAuditedAid: record.aid,
        pass: true,
      };
      putBAccountAudited(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("审核通过");
            props.getList()
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else if (role == "company") {
      const param = {
        auditorId: localStorage.getItem("cid"),
        companyId: localStorage.getItem("id"),
        notAuditedCompanyAccId: record.cid,
        pass: true,
      };
      putAccountAudit(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("审核通过");
            props.getList()
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    }
  };
  const reject = (record) => () => {
    let role = localStorage.getItem("role");
    if (role == "admin") {
      const param = {
        auditorAid: localStorage.getItem("aid"),
        notAuditedAid: record.aid,
        pass: false,
      };
      putBAccountAudited(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("已拒绝");
            props.getList()
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else if (role == "company") {
      const param = {
        auditorId: localStorage.getItem("cid"),
        companyId: localStorage.getItem("id"),
        notAuditedCompanyAccId: record.cid,
        pass: false,
      };
      putAccountAudit(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("已拒绝");
            props.getList()
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    }
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            rowKey={(record) => {
              let role = localStorage.getItem("role");
              if (role == "admin") {
                return record.aid;
              } else if (role == "company") {
                return record.cid;
              }
            }}
            dataSource={props.data}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AdminTable;
