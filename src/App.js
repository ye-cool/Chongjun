import React from "react";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
// 引入全局变量
import "./config/companyType";
import "./config/area";
import "./config/expRequire";
import "./config/educationRequire";
import "./config/adminType";
import "./config/jobType";

moment.locale("zh-cn");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div style={{ height: "100%" }}>{this.props.children}</div>
      </ConfigProvider>
    );
  }
}

export default App;
