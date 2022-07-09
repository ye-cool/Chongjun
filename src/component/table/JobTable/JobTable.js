import React, { useState } from "react";
import { Col, Row, Space, Table, Modal, message } from "antd";
import { Link } from "react-router-dom";
import {
  getInterviewUsername,
  getResumeDownloadUsername,
  getResumeSendUsername,
} from "../../../apis/admin";

function JobTable(props) {
  const columns = [
    {
      title: "职位名称",
      dataIndex: "positionName",
      key: "positionName",
    },
    {
      title: "职位类别",
      dataIndex: "positionType",
      key: " positionType",
    },
    {
      title: "职位要求",
      dataIndex: "positionRequest",
      key: "positionRequest",
      render: (positionRequest) => (
        <Space>
          <div>{positionRequest.workExp}</div>
          <div>|</div>
          <div>{positionRequest.eduDegree}</div>
          <div>|</div>
          <div>{positionRequest.address}</div>
        </Space>
      ),
    },
    {
      title: "薪资",
      dataIndex: "salary",
      key: "salary",
      render: (salary) => (
        <div>
          {salary.minSal}~{salary.maxSal}
          千元/月
        </div>
      ),
    },
    {
      title: "收藏数",
      dataIndex: "collectedCount",
      key: "collectedCount",
    },
    {
      title: "简历投递",
      dataIndex: "resumeSendCount",
      key: "resumeSendCount",
      render: (text, record) => (
        <a onClick={showResumeSendModal(record.id)}>{text}</a>
      ),
    },
    {
      title: "简历下载",
      dataIndex: "resumeDownloadCount",
      key: "resumeDownloadCount",
      render: (text, record) => (
        <a onClick={showResumeDownloadModal(record.id)}>{text}</a>
      ),
    },
    {
      title: "面试邀约",
      dataIndex: "interviewCount",
      key: "interviewCount",
      render: (text, record) => (
        <a onClick={showInterviewCountModal(record.id)}>{text}</a>
      ),
    },
    {
      title: "操作",
      key: "operate",
      render: (text, record) => {
        return (
          <Space>
            <Link
              to={"/admin/ChongjunEmployment/JobDatabase/detail"}
              onClick={() => {
                if (props.isSpecial) {
                  localStorage.setItem("isSpecial", true);
                  localStorage.setItem("specialRecruitId", props.specialId);
                } else {
                  localStorage.setItem("isSpecial", false);
                  localStorage.removeItem("specialRecruitId");
                }
                localStorage.setItem("pid", record.id);
                localStorage.setItem("id", record.companyId);
                localStorage.setItem("show", record.show);
              }}
            >
              查看详情
            </Link>
            <Link
              to={"/admin/ChongjunEmployment/JobDatabase/edit"}
              onClick={() => {
                if (props.isSpecial) {
                  localStorage.setItem("isSpecial", true);
                  localStorage.setItem("specialRecruitId", props.specialId);
                } else {
                  localStorage.setItem("isSpecial", false);
                  localStorage.removeItem("specialRecruitId");
                }
                localStorage.setItem("pid", record.id);
                localStorage.setItem("id", record.companyId);
                localStorage.setItem("show", record.show);
              }}
            >
              编辑职位
            </Link>
          </Space>
        );
      },
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userNameList, setUserNameList] = useState([]);

  const showResumeSendModal = (pid) => () => {
    getResumeSendUsername({ positionId: pid }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          setUserNameList(res.data);
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
    setIsModalVisible(true);
  };
  const showResumeDownloadModal = (pid) => () => {
    getResumeDownloadUsername({ positionId: pid }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          setUserNameList(res.data);
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
    setIsModalVisible(true);
  };
  const showInterviewCountModal = (pid) => () => {
    getInterviewUsername({ positionId: pid }).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          setUserNameList(res.data);
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
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

      {/* 对话框 */}
      <Modal
        title="姓名列表"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space>
          {userNameList.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </Space>
      </Modal>
    </div>
  );
}
export default JobTable;
