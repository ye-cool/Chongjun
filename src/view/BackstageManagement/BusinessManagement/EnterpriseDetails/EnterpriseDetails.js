import {
  Col,
  Row,
  Button,
  Space,
  Select,
  Input,
  message,
  Form,
  Cascader,
  Pagination,
} from "antd";
import React from "react";
import "./EnterpriseDetails.css";
import { SwapOutlined } from "@ant-design/icons";
import EnterpriseTable from "../../../../component/table/EnterpriseTable/EnterpriseTable";
import { getCompanyList, getSecondAreaList } from "../../../../apis/admin";
const { Option } = Select;

class EnterpriseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], areaList: {}, area: "" };
  }
  componentDidMount() {
    getSecondAreaList().then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            areaList: res.data,
          });
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
    this.getList();
  }
  getList = (param) => {
    console.log(this.state.areaList);
    getCompanyList(param).then(
      (res) => {
        console.log("get article response:", res);
        if (res.code == 600) {
          this.setState({
            dataSource: res.data,
          });
        } else {
          message.error(res.message);
        }
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  };
  sortByPositionCount = () => {
    this.getList({
      sortByPositionCount: true,
      upOrDown: false,
    });
  };
  sortByInterviewCount = () => {
    this.getList({
      sortByInterviewCount: true,
      upOrDown: false,
    });
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.getList({
      name: values.name,
      area: values.area?.join("-"),
      type: values.type,
    });
  };
  onChange = (pageNumber, pageSize) => {
    console.log("Page: ", pageNumber);
    console.log("Pagesize: ", pageSize);
    this.getList({
      page: pageNumber,
      size: pageSize,
    });
  };
  // 只展示最后一个.
  displayRender(label) {
    return label[label.length - 1];
  }
  render() {
    const options = Object.keys(this.state.areaList).map((key) => {
      console.log(key, this.state.areaList[key]);
      return {
        value: key,
        label: key,
        children: this.state.areaList[key].map((item) => {
          return {
            value: item,
            label: item,
          };
        }),
      };
    });

    return (
      <div>
        <Row justify="start">
          <Col span={1}></Col>
          <Col>
            <Space size={15}>
              <span>
                排序
                <SwapOutlined />:
              </span>
              <Button onClick={this.sortByPositionCount}>岗位数量</Button>
              <Button onClick={this.sortByInterviewCount}>面试邀约人数</Button>
            </Space>
          </Col>
          <Col span={1}></Col>
          <Col span={14}>
            <Form name="basic" onFinish={this.onFinish} autoComplete="off">
              <Space size={15}>
                                <Form.Item>
                  <span>搜索条件:</span>
                </Form.Item>
                <Form.Item name="type">
                  <Select
                    placeholder="企业类别"
                    style={{ width: 110 }}
                    allowClear
                  >
                    {window.companyType.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="area">
                  <Cascader
                   placeholder="地区"
                    style={{ width: 110 }}
                    options={options}
                    expandTrigger="hover"
                    displayRender={this.displayRender}
                  />
                </Form.Item>
                <Form.Item name="name">
                  <Input placeholder="企业名称" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Col>
        </Row>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 20 }}></div>
        </Row>
        <EnterpriseTable data={this.state.dataSource.records} />
        <Pagination
          style={{ position: "absolute", right: "40px" }}
          showQuickJumper
          showSizeChanger={true}
          defaultPageSize={5}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          current={this.state.dataSource.current}
          total={this.state.dataSource.total}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default EnterpriseDetails;
