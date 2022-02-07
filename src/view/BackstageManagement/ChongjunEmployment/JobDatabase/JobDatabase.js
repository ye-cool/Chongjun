import React, { useState } from "react";
import "./JobDatabase.css";
import { Col, Row, Button, Space, Select, Input, Table, Modal } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

function ResumeDatabase() {
  const dataSource = [
    {
      key: "1",
      JobTitle: "初级会计",
      JobCategories: "其他",
      JobRequirements: "经验不限|大专|四川省",
      salary: "6.0~8.5 千元/月",
      favorites: "20",
      ResumeDelivery: "10",
      ResumeDownload: "10",
      InterviewInvitation: "2",
    },
    {
      key: "2",
      JobTitle: "初级会计",
      JobCategories: "其他",
      JobRequirements: "经验不限|大专|四川省",
      salary: "6.0~8.5 千元/月",
      favorites: "20",
      ResumeDelivery: "10",
      ResumeDownload: "10",
      InterviewInvitation: "2",
    },
    {
      key: "3",
      JobTitle: "初级会计",
      JobCategories: "其他",
      JobRequirements: "经验不限|大专|四川省",
      salary: "6.0~8.5 千元/月",
      favorites: "20",
      ResumeDelivery: "10",
      ResumeDownload: "10",
      InterviewInvitation: "2",
    },
    {
      key: "4",
      JobTitle: "初级会计",
      JobCategories: "其他",
      JobRequirements: "经验不限|大专|四川省",
      salary: "6.0~8.5 千元/月",
      favorites: "20",
      ResumeDelivery: "10",
      ResumeDownload: "10",
      InterviewInvitation: "2",
    },
  ];

  const columns = [
    {
      title: "职位名称",
      dataIndex: "JobTitle",
      key: "JobTitle",
      width: 20,
    },
    {
      title: "职位类别",
      dataIndex: "JobCategories",
      key: "JobCategories",
      width: 70,
    },
    {
      title: "职位要求",
      dataIndex: "JobRequirements",
      key: "JobRequirements",
      width: 80,
    },
    {
      title: "薪资",
      dataIndex: "salary",
      key: "salary",
      width: 70,
    },
    {
      title: "收藏数",
      dataIndex: "favorites",
      key: "favorites",
      width: 70,
    },
    {
      title: "简历投递",
      dataIndex: "ResumeDelivery",
      key: "ResumeDelivery",
      width: 70,
      render: (text, record) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: "简历下载",
      dataIndex: "ResumeDownload",
      key: "ResumeDownload",
      width: 70,
      render: (text, record) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: "面试邀约",
      dataIndex: "InterviewInvitation",
      key: "InterviewInvitation",
      width: 70,
      render: (text, record) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: "操作",
      key: "operate",
      width: 70,
      render: (text, record) => <a href="/admin/ChongjunEmployment/JobDatabase/JobDetail">查看详情</a>,
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Row justify="start">
        <Col span={1}></Col>
        <Col span={6}>
          <Space size={15}>
            <span>
              排序
              <SwapOutlined />:
            </span>
            <Button>投递人数</Button>
            <Button>薪资</Button>
          </Space>
        </Col>
        <Col span={14}>
          <Space size={15}>
            <span>搜索条件:</span>
            <Select placeholder="职业类别" style={{ width: 110 }} allowClear>
              <Option value="行政类">行政类</Option>
              <Option value="管理类">管理类</Option>
              <Option value="营销类">营销类</Option>
              <Option value="技术类">技术类</Option>
              <Option value="其他">其他</Option>
            </Select>
            <Select placeholder="地区" style={{ width: 110 }} allowClear>
              <Option value="地区不限">地区不限</Option>
            </Select>
            <Input placeholder="职位名称" />
            <Button>搜索</Button>
          </Space>
        </Col>
        <Col span={2}>
          <Button>
            <PlusOutlined />
            新增职位
          </Button>
        </Col>
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

      {/* 对话框 */}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default ResumeDatabase;
