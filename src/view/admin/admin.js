import React from "react";
import { Layout, Row, Col, Button } from "antd";
import MyMenu from "../../component/menu/menu";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/clearToken";
import { clearName } from "../../utils/clearName";
const { Header, Content, Footer, Sider } = Layout;

// 主页面布局
function AdminLayout(props) {
  const navigate = useNavigate();
  const exit = () => {
    clearToken();
    clearName();
    navigate("/");
    
  };
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
              <Col span={2}>
                <span>{props.name}</span>
              </Col>
              <Col span={1}>
                <Button type="primary" onClick={exit}>
                  退出
                </Button>
              </Col>
              <Col span={1}></Col>
            </Row>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: "90%",
              maxHeight: "95%",
              overflow: "auto",
            }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
