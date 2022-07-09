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
    // menu的初始化
    // 获取当前路径

    const pathname = window.location.hash;
    //获取当前所在的目录层级
    const rank = pathname.split("/");
    //rank = ["","policy-engine","nas-client"]

    // 获取身份
    let role = localStorage.getItem("role");
    if (role == "admin") {
      if (rank.length == 4) {
        this.setState({
          selectedKeys: [rank.slice(2).join("/")],
          openKeys: [rank.slice(2, 3).join("/")],
        });
      } else {
        this.setState({
          selectedKeys: [rank.slice(1, 5).join("/")],
          openKeys: [rank.slice(3, 4).join("/")],
        });
      }
    } else if (role == "company") {
      if (rank.length == 3) {
        this.setState({
          selectedKeys: [rank.slice(2, 3).join("/")],
        });
      } else if (rank.length == 4) {
        this.setState({
          selectedKeys: [rank.slice(2, 3).join("/")],
        });
      }
    }
  };
  openMenu = (e) => {
    this.setState({
      openKeys: [e[1]],
    });
  };

  componentDidMount() {
    let localStorage = window.localStorage;
    let role = localStorage.getItem("role");
    console.log(role);
    // 刷新挂载组件allCookies
    if (role == "company") {
      const menuTreeNode = this.renderMenu(EnterpriseMenuList);
      this.setState({
        menuTreeNode,
      });
    } else if (role == "admin") {
      const menuTreeNode = this.renderMenu(BackstageMenuList);
      this.setState({
        menuTreeNode,
      });
    }

    // 刷新后menu的初始化
    // 获取当前路径
    const pathname = window.location.hash;
    console.log(pathname);
    //获取当前所在的目录层级
    const rank = pathname.split("/");
    //rank = ["","policy-engine","nas-client"]

    if (role == "admin") {
      if (rank.length == 4) {
        this.setState({
          selectedKeys: [rank.slice(2).join("/")],
          openKeys: [rank.slice(2, 3).join("/")],
        });
      } else {
        this.setState({
          selectedKeys: [rank.slice(2, 4).join("/")],
          openKeys: [rank.slice(2, 3).join("/")],
        });
      }
    } else if (role == "company") {
      if (rank.length == 3) {
        this.setState({
          selectedKeys: [rank.slice(2, 3).join("/")],
        });
      } else if (rank.length == 4) {
        this.setState({
          selectedKeys: [rank.slice(2, 3).join("/")],
        });
      }
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
