import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminLayout from "./view/admin/admin";
import Login from "./view/login/login";
import Signup from "./view/signup/signup";
import NotMatch from "./view/NotMatch/NotMatch";
import Forget from "./view/forget/foeget";
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
import EAccountManagement from "./view/EnterpriseManagement/AccountManagement/AccountManagement";
// 后台管理端子组件
import ResumeDetail from "./view/BackstageManagement/Detail/ResumeDetail/ResumeDetail";
import JobDetail from "./view/BackstageManagement/Detail/JobDetail/JobDetail";

// 路由配置
class IRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <App>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget" element={<Forget />} />
            <Route
              path="admin/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route
                      path="ChongjunEmployment/ResumeDatabase"
                      element={<ResumeDatabase />}
                    />
                    <Route
                      path="ChongjunEmployment/ResumeDatabase/ResumeDetail"
                      element={<ResumeDetail />}
                    />

                    <Route
                      path="ChongjunEmployment/JobDatabase"
                      element={<JobDatabase />}
                    />
                    <Route
                      path="ChongjunEmployment/JobDatabase/JobDetail"
                      element={<JobDetail />}
                    />

                    <Route
                      path="ChongjunEmployment/SpecialRecruitment"
                      element={<SpecialRecruitment />}
                    />
                    <Route
                      path="BusinessManagement/EnterpriseDetails"
                      element={<EnterpriseDetails />}
                    />
                    <Route
                      path="BusinessManagement/EnterpriseAudit"
                      element={<EnterpriseAudit />}
                    />
                    <Route
                      path="BusinessManagement/EnterpriseAccountManagement"
                      element={<EnterpriseAccountManagement />}
                    />
                    <Route
                      path="DisplayManagement/CarouselSettings"
                      element={<CarouselSettings />}
                    />
                    <Route
                      path="DisplayManagement/AboutUs"
                      element={<AboutUs />}
                    />
                    <Route
                      path="DisplayManagement/PrivacyAgreement"
                      element={<PrivacyAgreement />}
                    />
                    <Route
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
                    />
                    <Route
                      path="AuthorityManagement/AccountManagement"
                      element={<AccountManagement />}
                    />
                    <Route
                      path="AuthorityManagement/AdminReview"
                      element={<AdminReview />}
                    />
                    <Route path="/" element={<NotMatch />} />
                  </Routes>
                </AdminLayout>
              }
            />
          </Routes>
        </App>
      </BrowserRouter>
    );
  }
}

export default IRouter;
