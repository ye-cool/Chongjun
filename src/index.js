import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import IRouter from "./IRouter";

ReactDOM.render(<ConfigProvider locale={zhCN}>
  <IRouter />
</ConfigProvider>, document.getElementById("root"));

