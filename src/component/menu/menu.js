import React from "react";
import { Menu } from "antd";
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      // 菜单栏信息
      <Menu
      className="myMenu"
        onClick={this.handleClick}
        theme="dark"
        defaultSelectedKeys={["ResumeDatabase"]}
        defaultOpenKeys={["ChongjunEmployment"]}
        mode="inline"
      >
        {/* 实现路由跳转 */}
        <SubMenu key="ChongjunEmployment" title="崇军就业">
          <Menu.Item key="ResumeDatabase">简历数据库<Link to="/admin/ChongjunEmployment/ResumeDatabase" /></Menu.Item> 
          <Menu.Item key="JobDatabase">职位数据库<Link to="/admin/ChongjunEmployment/JobDatabase" /></Menu.Item>
          <Menu.Item key="SpecialRecruitment">专场招聘<Link to="/admin/ChongjunEmployment/SpecialRecruitment" /></Menu.Item>
        </SubMenu>
        <SubMenu key="BusinessManagement" title="企业管理">
          <Menu.Item key="EnterpriseDetails">企业详情<Link to="/admin/BusinessManagement/EnterpriseDetails" /></Menu.Item>
          <Menu.Item key="EnterpriseAudit">企业审核<Link to="/admin/BusinessManagement/EnterpriseAudit" /></Menu.Item>
          <Menu.Item key="EnterpriseAccountManagement">企业账号管理<Link to="/admin/BusinessManagement/EnterpriseAccountManagement" /></Menu.Item>
        </SubMenu>
        <SubMenu key="DisplayManagement" title="展示管理">
          <Menu.Item key="CarouselSettings">轮播图设置<Link to="/admin/DisplayManagement/CarouselSettings" /></Menu.Item>
          <Menu.Item key="AboutUs">关于我们<Link to="/admin/DisplayManagement/AboutUs" /></Menu.Item>
          <Menu.Item key="PrivacyAgreement">隐私协议<Link to="/admin/DisplayManagement/PrivacyAgreement" /></Menu.Item>
        </SubMenu>
        <SubMenu key="BillingManagement" title="开票管理">
          <Menu.Item key="BillingInformationCheck">开票信息核对<Link to="/admin/BillingManagement/BillingInformationCheck" /></Menu.Item>
          <Menu.Item key="BillingInformationProcessing">开票信息处理<Link to="/admin/BillingManagement/BillingInformationProcessing" /></Menu.Item>
        </SubMenu>
        <SubMenu key="CourseManagement" title="课程管理">
          <Menu.Item key="AllOrders">全部订单<Link to="/admin/CourseManagement/AllOrders" /></Menu.Item>
          <Menu.Item key="RefundProcessing">退款处理<Link to="/admin/CourseManagement/RefundProcessing" /></Menu.Item>
        </SubMenu>
        <SubMenu key="AuthorityManagement" title="权限管理">
          <Menu.Item key="AccountManagement">账号管理<Link to="/admin/AuthorityManagement/AccountManagement" /></Menu.Item>
          <Menu.Item key="AdminReview">管理员审核<Link to="/admin/AuthorityManagement/AdminReview" /></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default MyMenu;
