import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import AdminLayout from "./view/admin/admin";
import Login from "./view/login/login";
import Signup from "./view/signup/signup";
import NotMatch from "./view/NotMatch/NotMatch";
import Forget from "./view/forget/forget";
// 后台管理端
import AccountManagement from "./view/BackstageManagement/AuthorityManagement/AccountManagement/AccountManagement";
import AdminReview from "./view/BackstageManagement/AuthorityManagement/AdminReview/AdminReview";
import BillingInformationCheck from "./view/BackstageManagement/BillingManagement/BillingInformationCheck/BillingInformationCheck";
import BillingInformationProcessing from "./view/BackstageManagement/BillingManagement/BillingInformationProcessing/BillingInformationProcessing";
import EnterpriseAccountManagement from "./view/BackstageManagement/BusinessManagement/EnterpriseAccountManagement/EnterpriseAccountManagement";
import EnterpriseAudit from "./view/BackstageManagement/BusinessManagement/EnterpriseAudit/EnterpriseAudit";
import EnterpriseDetails from "./view/BackstageManagement/BusinessManagement/EnterpriseDetails/EnterpriseDetails";
import JobDatabase from "./view/BackstageManagement/ChongjunEmployment/JobDatabase/JobDatabase";
import ResumeDatabase from "./view/BackstageManagement/ChongjunEmployment/ResumeDatabase/ResumeDatabase";
import SpecialRecruitment from "./view/BackstageManagement/ChongjunEmployment/SpecialRecruitment/SpecialRecruitment";
import AllOrders from "./view/BackstageManagement/CourseManagement/AllOrders/AllOrders";
import RefundProcessing from "./view/BackstageManagement/CourseManagement/RefundProcessing/RefundProcessing";
import AboutUs from "./view/BackstageManagement/DisplayManagement/AboutUs/AboutUs";
import CarouselSettings from "./view/BackstageManagement/DisplayManagement/CarouselSettings/CarouselSettings";
import PrivacyAgreement from "./view/BackstageManagement/DisplayManagement/PrivacyAgreement/PrivacyAgreement";
// 企业端
import ESpecialRecruitment from "./view/EnterpriseManagement/SpecialRecruitment/SpecialRecruitment";
import PersonalInformation from "./view/EnterpriseManagement/PersonalInformation/PersonalInformation";
import JobManagement from "./view/EnterpriseManagement/JobManagement/JobManagement";
import CorporateInformation from "./view/EnterpriseManagement/CorporateInformation/CorporateInformation";
import EAccountManagement from "./view/EnterpriseManagement/EAccountManagement/EaccountManagement/EAccountManagement";
import EAdminReview from "./view/EnterpriseManagement/EAccountManagement/EadminReview/EAdminReview";

// 后台管理端子组件
import ResumeDetail from "./view/BackstageManagement/Detail/ResumeDetail/ResumeDetail";
import JobDetail from "./view/BackstageManagement/Detail/JobDetail/JobDetail";
import EnterpriseDetail from "./view/BackstageManagement/Detail/EnterpriseDetail/EnterpriseDetail";
import SpecialDetail from "./view/BackstageManagement/Detail/SpecialDetail/SpecialDetail";
import AddPosition from "./view/BackstageManagement/Edit/AddPosition/AddPosition";
import AddSpecialRecruit from "./view/BackstageManagement/Edit/AddSpecialRecruit/AddSpecialRecruit";
import EditSpecialRecruit from "./view/BackstageManagement/Edit/EditSpecialRecruit/EditSpecialRecruit";
import EditJob from "./view/BackstageManagement/Edit/EditJob/EditJob";
// 企业端子组件
import EditCorporateInformation from "./view/EnterpriseManagement/Edit/EditCorporateInformation/EditCorporateInformation";
import EJobDetail from "./view/EnterpriseManagement/Detail/EjobDetail/EjobDetail";
import EditPositon from "./view/EnterpriseManagement/Edit/EditPositon/EditPositon";
import EResumeDetail from "./view/EnterpriseManagement/Detail/EResumeDetail/EResumeDetail";
import EPositionResumeDetail from "./view/EnterpriseManagement/Detail/EPositionResumeDetail/EPositionResumeDetail";
import EditPersonalInfo from "./view/EnterpriseManagement/Edit/EditPersonalInfo/EditPersonalInfo";
import ESpecialDetail from "./view/EnterpriseManagement/Detail/ESpecialDetail/ESpecialDetail";
import ESpecialJobDetail from "./view/EnterpriseManagement/Detail/ESpecialJobDetail/ESpecialJobDetail";
import AddPositon from "./view/EnterpriseManagement/Edit/AddPosition/AddPosition";
import AddSpecialPosition from "./view/EnterpriseManagement/Edit/AddSpecialPosition/AddSpecialPosition";
// 路由配置
class IRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  setName = (value) => {
    this.setState({
      name: value,
    });
  };
  render() {
    return (
      <App>
        <HashRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Login name={this.state.name} setName={this.setName} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget" element={<Forget />} />
            <Route
              path="/admin/*"
              element={
                <AdminLayout name={this.state.name}>
                  {/* 后台管理端 */}
                  <Routes>
                    {/* 简历数据库 */}
                    <Route
                      path="/ChongjunEmployment/ResumeDatabase"
                      element={<ResumeDatabase />}
                    />
                    {/* 简历查看详情 */}
                    <Route
                      path="/ChongjunEmployment/ResumeDatabase/detail"
                      element={<ResumeDetail />}
                    />
                    {/* 职位数据库 */}
                    <Route
                      path="/ChongjunEmployment/JobDatabase"
                      element={<JobDatabase />}
                    />
                    {/* 职位查看详情 */}
                    <Route
                      path="/ChongjunEmployment/JobDatabase/detail"
                      element={<JobDetail />}
                    />
                    {/* 新增职位 */}
                    <Route
                      path="/ChongjunEmployment/JobDatabase/addposition"
                      element={<AddPosition />}
                    />
                    {/* 新增职位 */}
                    <Route
                      path="/ChongjunEmployment/JobDatabase/edit"
                      element={<EditJob />}
                    />
                    {/* 专场招聘 */}
                    <Route
                      path="/ChongjunEmployment/SpecialRecruitment"
                      element={<SpecialRecruitment />}
                    />
                    {/* 新增专场招聘 */}
                    <Route
                      path="/ChongjunEmployment/SpecialRecruitment/addSpecialRecruit"
                      element={<AddSpecialRecruit />}
                    />
                    {/* 编辑专场招聘 */}
                    <Route
                      path="/ChongjunEmployment/SpecialRecruitment/editSpecialRecruit"
                      element={<EditSpecialRecruit />}
                    />
                    {/* 专场招聘查看详情 */}
                    <Route
                      path="/ChongjunEmployment/SpecialRecruitment/detail"
                      element={<SpecialDetail />}
                    />
                    {/* 企业详情 */}
                    <Route
                      path="/BusinessManagement/EnterpriseDetails"
                      element={<EnterpriseDetails />}
                    />
                    {/* 企业查看详情 */}
                    <Route
                      path="/BusinessManagement/EnterpriseDetails/detail"
                      element={<EnterpriseDetail />}
                    />
                    {/* 企业审核 */}
                    <Route
                      path="/BusinessManagement/EnterpriseAudit"
                      element={<EnterpriseAudit />}
                    />
                    {/* 企业账号管理 */}
                    <Route
                      path="/BusinessManagement/EnterpriseAccountManagement"
                      element={<EnterpriseAccountManagement />}
                    />
                    {/* 轮播图设置 */}
                    <Route
                      path="/DisplayManagement/CarouselSettings"
                      element={<CarouselSettings />}
                    />
                    {/* 关于我们 */}
                    <Route
                      path="/DisplayManagement/AboutUs"
                      element={<AboutUs />}
                    />
                    {/* 隐私协议 */}
                    <Route
                      path="/DisplayManagement/PrivacyAgreement"
                      element={<PrivacyAgreement />}
                    />
                    {/* 开票管理和课程管理暂不开发 */}
                    {/* <Route
                      path="BillingManagement/BillingInformationCheck"
                      element={<BillingInformationCheck />}
                    />
                    <Route
                      path="BillingManagement/BillingInformationProcessing"
                      element={<BillingInformationProcessing />}
                    />
                    <Route
                      path="CourseManagement/AllOrders"
                      element={<AllOrders />}
                    />
                    <Route
                      path="CourseManagement/RefundProcessing"
                      element={<RefundProcessing />}
                    /> */}
                    {/* 账号管理 */}
                    <Route
                      path="/AuthorityManagement/AccountManagement"
                      element={<AccountManagement />}
                    />
                    {/* 管理员审核 */}
                    <Route
                      path="/AuthorityManagement/AdminReview"
                      element={<AdminReview />}
                    />
                    {/* 兜底路由 */}
                    <Route path="/" element={<NotMatch />} />
                  </Routes>
                  {/* 企业端 */}
                  <Routes>
                    {/* 企业信息 */}
                    <Route
                      path="/CorporateInformation"
                      element={<CorporateInformation />}
                    />
                    {/* 编辑企业信息 */}
                    <Route
                      path="/CorporateInformation/edit"
                      element={<EditCorporateInformation />}
                    />
                    {/* 职位管理 */}
                    <Route path="/JobManagement" element={<JobManagement />} />

                    {/* 职位管理编辑职位 */}
                    <Route
                      path="/JobManagement/edit"
                      element={<EditPositon />}
                    />

                    {/* 职位管理新增职位 */}
                    <Route path="/JobManagement/add" element={<AddPositon />} />
                    {/* 职位管理详情*/}
                    <Route
                      path="/JobManagement/detail"
                      element={<EJobDetail />}
                    />
                    {/* 职位投递简历信息*/}
                    <Route
                      path="/JobManagement/resume"
                      element={<EResumeDetail />}
                    />
                    {/* 职位投递简历详细信息*/}
                    <Route
                      path="/JobManagement/resumeDetail"
                      element={<EPositionResumeDetail />}
                    />
                    {/* 专场招聘 */}
                    <Route
                      path="/ESpecialRecruitment"
                      element={<ESpecialRecruitment />}
                    />
                    {/* 专场招聘活动详情 */}
                    <Route
                      path="/ESpecialRecruitment/detail"
                      element={<ESpecialDetail />}
                    />
                    {/* 专场招聘岗位详情 */}
                    <Route
                      path="/ESpecialRecruitment/jobdetail"
                      element={<ESpecialJobDetail />}
                    />
                    {/* 专场招聘新增岗位 */}
                    <Route
                      path="/ESpecialRecruitment/add"
                      element={<AddSpecialPosition />}
                    />
                    {/* 个人信息 */}
                    <Route
                      path="/PersonalInformation"
                      element={<PersonalInformation />}
                    />
                    {/* 编辑个人信息 */}
                    <Route
                      path="/PersonalInformation/edit"
                      element={<EditPersonalInfo />}
                    />
                    {/* 账号管理 */}
                    <Route
                      path="/EAccountManagement"
                      element={<EAccountManagement />}
                    />
                    <Route path="/EadminReview" element={<EAdminReview />} />
                  </Routes>
                </AdminLayout>
              }
            />
          </Routes>
        </HashRouter>
      </App>
    );
  }
}

export default IRouter;
