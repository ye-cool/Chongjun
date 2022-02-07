import React from "react";
import { Layout, Row, Col, Button } from "antd";
import MyMenu from "../../component/menu/menu";
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
      <Layout className="ui-layout">
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
            >
              <Row justify="end">
                <Col span={1}>
                  <span>管理员A</span>
                </Col>
                <Col span={1}>
                  <Button type="primary">退出</Button>
                </Col>
                <Col span={1}></Col>
              </Row>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 690,maxHeight:710, overflow: "auto" }}
            >
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default AdminLayout;
