import {
  Col,
  Row,
  message,
  Popconfirm,
  Table,
  Space,
  Button,
  Input,
  Form,
  Modal,
} from "antd";
import React, { useState } from "react";
import { deleteSuperAccount } from "../../../apis/admin";
import { deleteAccount, putPersonalPassword } from "../../../apis/company";
function EnterpriseAccountTable(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Cid, setCid] = useState(0);
  const columns = [
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
      title: "账号类型",
      dataIndex: "level",
      key: "level",
      render: (text, record) => (
        <div>{text == "super" ? "超级管理员" : "普通管理员"}</div>
      ),
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
        <Space size={10}>
          <Popconfirm
            title="确定要重置此账号密码吗?"
            onConfirm={reset(record.cid)}
            okText="确定"
            cancelText="取消"
          >
            <a>密码重置 </a>
          </Popconfirm>
          <Popconfirm
            title="确定要删除此账号吗?
            若删除企业主账号，会同时删除该账号下的所有子账号,删除所有涉及该企业的数据库信息(职位/简历投递/收藏…)！"
            onConfirm={Delete(record.level, record.cid)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除账号 </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const showModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const onFinish = (value) => {
    console.log(value);

    const param = {
      cid: Cid,
      newPassword: value.newPassword,
    };
    putPersonalPassword(param).then(
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
  const reset = (cid) => () => {
    console.log(cid);
    setCid(cid);
    showModal();
  };
  const Delete = (level, cid) => () => {
    console.log(level);
    console.log(cid);
    if (level == "super") {
      deleteSuperAccount({ cid: cid }).then(
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
    } else if (level == "common") {
      deleteAccount({ cid: cid }).then(
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

export default EnterpriseAccountTable;
