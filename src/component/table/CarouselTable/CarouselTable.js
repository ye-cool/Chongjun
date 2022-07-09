import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  Table,
  Modal,
  Form,
  Input,
  Button,
  message,
  Space,
} from "antd";
import { putBanner, putBannerLink } from "../../../apis/admin";
function CarouselTable(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "展示图片",
      dataIndex: "photo",
      key: "photo",
      render: (text, record) => (
        <Image width={150} src={`data:image/png;base64,${text}`}></Image>
      ),
    },
    {
      title: "链接",
      dataIndex: "photoLink",
      key: "photoLink",
    },
    {
      title: "操作",
      key: "OperateOrState",
      render: (text, record) => <a onClick={showModal(record)}>编辑</a>,
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [id, setID] = useState("");

  const showModal = (record) => () => {
    setImagePreviewUrl(`data:image/png;base64,${record.photo}`);
    setID(record.id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleImageChange = (e) => {
    e.preventDefault();

    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      console.log("文件名为—", file);
      console.log("文件结果为—", reader.result);
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const onFinish = (value) => {
    console.log(value);

    if (file.size / 1024 / 1024 >= 1) {
      message.error("图片大小超过1M");
      return;
    }
    if (file == "") {
      putBannerLink({
        id: id,
        photoLink: value.link,
      }).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            props.getList();
            setIsModalVisible(false);
            message.success("保存成功");
          } else {
            message.error(res.message);
          }
        },
        (error) => {
          console.log("get response failed!");
        }
      );
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("photoLink", value.link);
      formData.append("id", id);
      putBanner(formData).then(
        (res) => {
          console.log("get article response:", res);
          if (res.code == 600) {
            props.getList();
            setIsModalVisible(false);
            message.success("保存成功");
            setFile("");
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
  var imagePreview = (
    <label htmlFor="avatarFor">
      <img style={{ width: "100px", height: "100px" }} src={imagePreviewUrl} />
    </label>
  );
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
      <Modal
        title="编辑轮播图"
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={null}
      >
        <Form
          {...formItemLayout}
          name="editBanner"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Space direction="vertical" size={10}>
            <Row>
              <Col  offset={2}>
                海报:
              </Col>
              <Col offset={4} style={{ position: "relative" }}>
                {imagePreview}
                <input
                  onChange={(e) => handleImageChange(e)}
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "0px",
                    opacity: "0",
                  }}
                  type="file"
                  accept="image/gif,image/jpeg,image/jpg,image/png"
                  multiple
                />
              </Col>
            </Row>
            <Row>
              <Form.Item
                name="link"
                label="跳转链接"
                rules={[
                  {
                    required: true,
                    message: "请输入跳转链接!",
                  },
                ]}
              >
                <Input placeholder="请输入跳转链接" style={{}} />
              </Form.Item>
            </Row>
            <Row justify="center">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Row>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}
export default CarouselTable;
