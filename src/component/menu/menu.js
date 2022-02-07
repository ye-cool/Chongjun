import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
// 引入侧边栏配置
import BackstageMenuList from "../../config/BackstageMenuConfig";
import EnterpriseMenuList from "../../config/EnterpriseMenuConfig";
const { SubMenu } = Menu;

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openKeys: [], selectedKeys: [] };
  }

  handleClick = (e) => {
    // console.log("click ", e);
    // menu的初始化
    // 获取当前路径
    const pathname = window.location.pathname;
    //获取当前所在的目录层级
    const rank = pathname.split("/");
    //rank = ["","policy-engine","nas-client"]
    if (rank.length == 3) {
      this.setState({
        selectedKeys: [pathname],
      });
    } else if (rank.length == 4) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: [rank.slice(2, 3).join("/")],
      });
    } else {
      this.setState({
        selectedKeys: [rank.slice(1, 4).join("/")],
        openKeys: [rank.slice(2, 3).join("/")],
      });
    }
  };
  openMenu = (e) => {
    this.setState({
      openKeys: [e[1]],
    });
  };

  componentDidMount() {
    // 刷新挂载组件
    const menuTreeNode = this.renderMenu(BackstageMenuList);
    this.setState({
      menuTreeNode,
    });

    // 刷新后menu的初始化
    // 获取当前路径
    const pathname = window.location.pathname;
    //获取当前所在的目录层级
    const rank = pathname.split("/");
    //rank = ["","policy-engine","nas-client"]
    if (rank.length == 3) {
      this.setState({
        selectedKeys: [pathname],
      });
    } else if (rank.length == 4) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: [rank.slice(2, 3).join("/")],
      });
    } else {
      this.setState({
        selectedKeys: [rank.slice(0, 4).join("/")],
        openKeys: [rank.slice(2, 3).join("/")],
      });
    }
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
          <Link to={item.key}></Link>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      // 菜单栏信息
      <Menu
        className="myMenu"
        onClick={this.handleClick}
        onOpenChange={this.openMenu}
        theme="dark"
        openKeys={this.state.openKeys}
        selectedKeys={this.state.selectedKeys}
        mode="inline"
      >
        {this.state.menuTreeNode}
      </Menu>
    );
  }
}
export default MyMenu;
