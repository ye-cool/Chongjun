import React, { useState } from "react";
import {
  Col,
  Row,
  Table,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
  Button,
} from "antd";
import { deleteAccount, putPasswordReset } from "../../../apis/company";
import { putPassword, deleteBAccount } from "../../../apis/admin";

function AccountTable(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Aid, setAid] = useState(0);
  const columns = [
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
      title: "账号密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "账号注册时间",
      dataIndex: "registerTime",
      key: "registerTime",
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => (
        <div>
          <Popconfirm
            title="确定要重置此账号密码吗?"
            onConfirm={reset(record)}
            okText="确定"
            cancelText="取消"
          >
            <a>密码重置 </a>
          </Popconfirm>

          <Popconfirm
            title="确定要删除此账号吗?"
            onConfirm={DeleteAccount(record)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除账号</a>
          </Popconfirm>
        </div>
      ),
    },
  ];
  const reset = (record) => () => {
    let role = localStorage.getItem("role");
    if (role == "admin") {
      setAid(record.aid);
      showModal();
    } else if (role == "company") {
      const param = {
        cid: record.cid,
        companyId: localStorage.getItem("id"),
      };
      putPasswordReset(param.companyId, param.cid).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("已重置该账号密码");
            props.getList();
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
  const DeleteAccount = (record) => () => {
    let role = localStorage.getItem("role");
    if (role == "admin") {
      deleteBAccount(record.aid).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("已删除该账号");
            props.getList();
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
        cid: record.cid,
        companyId: localStorage.getItem("id"),
      };
      deleteAccount(param).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            message.success("已删除该账号");
            props.getList();
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
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const onFinish = (value) => {
    console.log(value);

    const param = {
      aid: Aid,
      newPassword: value.newPassword,
    };
    putPassword(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          message.success("密码修改成功");
          props.getList();
          setModalVisible(false);
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
      <Modal
        title="修改密码"
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={null}
      >
        <Form
          {...formItemLayout}
          name="editPassword"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row>
            <Form.Item
              name="newPassword"
              label="新密码"
              rules={[
                {
                  required: true,
                  message: "请输入新密码!",
                },
              ]}
            >
              <Input.Password
                placeholder="请输入新密码"
                style={{ width: "200px" }}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              {...tailFormItemLayout}
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                {
                  required: true,
                  message: "请再次输入新密码!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error("两次输入的密码必须一致!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="请再次输入新密码"
                style={{ width: "200px" }}
              />
            </Form.Item>
          </Row>
          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                确认修改
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
export default AccountTable;
