import React from "react";
import "./CarouselSettings.css";
import { Col, Row, message } from "antd";
import { SwapOutlined, PlusOutlined } from "@ant-design/icons";
import CarouselTable from "../../../../component/table/CarouselTable/CarouselTable";
import { getBanner } from "../../../../apis/admin";

class CarouselSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
  componentDidMount() {
   this.getList()
  }
  getList = () => {
    getBanner().then(
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
  render() {
    return (
      <div>
        {/* topbar与table之间的间隔 */}
        <Row>
          <div style={{ marginBottom: 45 }}></div>
        </Row>
        <CarouselTable data={this.state.dataSource} getList={this.getList} />
      </div>
    );
  }
}

export default CarouselSettings;
