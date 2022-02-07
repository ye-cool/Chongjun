import { Col, Row, Button, Space, Select, Input, Table } from "antd";
import React from "react";
import "./ResumeDatabase.css";
import { SwapOutlined } from "@ant-design/icons";

const { Option } = Select;

function ResumeDatabase() {
  const dataSource = [
    {
      key: "1",
      name: "黎明",
      education: "本科",
      WorkExperience: "即将退役",
      professional: "公共管理",
      area: "四川省",
      NumberOfDeliveries: "5",
      RegistrationTime: "2021.12.5",
    },
    {
      key: "2",
      name: "刘德华",
      education: "本科",
      WorkExperience: "即将退役",
      professional: "公共管理",
      area: "四川省",
      NumberOfDeliveries: "5",
      RegistrationTime: "2021.12.5",
    },
    {
      key: "3",
      name: "张学友",
      education: "本科",
      WorkExperience: "即将退役",
      professional: "公共管理",
      area: "四川省",
      NumberOfDeliveries: "5",
      RegistrationTime: "2021.12.5",
    },
    {
      key: "4",
      name: "郭富城",
      education: "本科",
      WorkExperience: "即将退役",
      professional: "公共管理",
      area: "四川省",
      NumberOfDeliveries: "5",
      RegistrationTime: "2021.12.5",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      width: 20,
    },
    {
      title: "学历",
      dataIndex: "education",
      key: "education",
      width: 70,
    },
    {
      title: "工作经验",
      dataIndex: "WorkExperience",
      key: "WorkExperience",
      width: 70,
    },
    {
      title: "专业",
      dataIndex: "professional",
      key: "professional",
      width: 70,
    },
    {
      title: "地区",
      dataIndex: "area",
      key: "area",
      width: 70,
    },
    {
      title: "投递次数",
      dataIndex: "NumberOfDeliveries",
      key: "NumberOfDeliveries",
      width: 70,
    },
    {
      title: "注册时间",
      dataIndex: "RegistrationTime",
      key: "RegistrationTime",
      width: 70,
    },
    {
      title: "操作",
      key: "operate",
      width: 70,
      render: (text, record) => (
        <a href="/admin/ChongjunEmployment/ResumeDatabase/ResumeDetail">
          查看详情
        </a>
      ),
    },
  ];
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
            <Button>投递次数</Button>
            <Button>注册时间</Button>
          </Space>
        </Col>
        <Col span={14}>
          <Space size={15}>
            <span>搜索条件:</span>
            <Select placeholder="学历" style={{ width: 110 }} allowClear>
              <Option value="本科">本科</Option>
              <Option value="中专">中专</Option>
              <Option value="大专">大专</Option>
              <Option value="本科以上">本科以上</Option>
            </Select>
            <Select placeholder="专业" style={{ width: 110 }} allowClear>
              <Option value="专业">专业</Option>
            </Select>
            <Select placeholder="工作经验" style={{ width: 110 }} allowClear>
              <Option value="即将退役">即将退役</Option>
              <Option value="刚退役">刚退役</Option>
              <Option value="一年之内">一年之内</Option>
              <Option value="1-3年">1-3年</Option>
              <Option value="3-5年">3-5年</Option>
              <Option value="5年以上">5年以上</Option>
            </Select>
            <Input placeholder="姓名" />
            <Button>搜索</Button>
          </Space>
        </Col>
        <Col span={2}>
          <Button>下载简历表格</Button>
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
    </div>
  );
}

export default ResumeDatabase;
