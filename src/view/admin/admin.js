import React from "react";
import { Layout } from "antd";
import MyMenu from "../../component/menu/menu";
import { Routes } from "react-router-dom";
import "./admin.css";

const { Header, Content, Footer, Sider } = Layout;
// 主页面布局
class AdminLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout className="UIlayout">
        {/* 侧边栏 */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          {/* logo */}
          <div className="logo" />
          <MyMenu />
        </Sider>
        <Layout>
          {/* 主要内容 */}
          <Header style={{ padding: 0 }}>
            <div
              className="site-layout-sub-header-background"
              style={{ height: "100%" }}
            ></div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 690 }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default AdminLayout;
