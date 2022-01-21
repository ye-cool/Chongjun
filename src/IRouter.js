import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminLayout from "./view/admin/admin";
import AccountManagement from "./view/AuthorityManagement/AccountManagement/AccountManagement";
import AdminReview from "./view/AuthorityManagement/AdminReview/AdminReview";
import BillingInformationCheck from "./view/BillingManagement/BillingInformationCheck/BillingInformationCheck";
import BillingInformationProcessing from "./view/BillingManagement/BillingInformationProcessing/BillingInformationProcessing";
import EnterpriseAccountManagement from "./view/BusinessManagement/EnterpriseAccountManagement/EnterpriseAccountManagement";
import EnterpriseAudit from "./view/BusinessManagement/EnterpriseAudit/EnterpriseAudit";
import EnterpriseDetails from "./view/BusinessManagement/EnterpriseDetails/EnterpriseDetails";
import JobDatabase from "./view/ChongjunEmployment/JobDatabase/JobDatabase";
import ResumeDatabase from "./view/ChongjunEmployment/ResumeDatabase/ResumeDatabase";
import SpecialRecruitment from "./view/ChongjunEmployment/SpecialRecruitment/SpecialRecruitment";
import AllOrders from "./view/CourseManagement/AllOrders/AllOrders";
import RefundProcessing from "./view/CourseManagement/RefundProcessing/RefundProcessing";
import AboutUs from "./view/DisplayManagement/AboutUs/AboutUs";
import CarouselSettings from "./view/DisplayManagement/CarouselSettings/CarouselSettings";
import PrivacyAgreement from "./view/DisplayManagement/PrivacyAgreement/PrivacyAgreement";
import Login from "./view/login/login";
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
            <Route
              path="/admin/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route
                      path="/admin/ChongjunEmployment/ResumeDatabase"
                      element={<ResumeDatabase />}
                    />
                    <Route
                      path="/admin/ChongjunEmployment/JobDatabase"
                      element={<JobDatabase />}
                    />
                    <Route
                      path="/admin/ChongjunEmployment/SpecialRecruitment"
                      element={<SpecialRecruitment />}
                    />
                    <Route
                      path="/admin/BusinessManagement/EnterpriseDetails"
                      element={<EnterpriseDetails />}
                    />
                    <Route
                      path="/admin/BusinessManagement/EnterpriseAudit"
                      element={<EnterpriseAudit />}
                    />
                    <Route
                      path="/admin/BusinessManagement/EnterpriseAccountManagement"
                      element={<EnterpriseAccountManagement />}
                    />
                    <Route
                      path="/admin/DisplayManagement/CarouselSettings"
                      element={<CarouselSettings />}
                    />
                    <Route
                      path="/admin/DisplayManagement/AboutUs"
                      element={<AboutUs />}
                    />
                    <Route
                      path="/admin/DisplayManagement/PrivacyAgreement"
                      element={<PrivacyAgreement />}
                    />
                    <Route
                      path="/admin/BillingManagement/BillingInformationCheck"
                      element={<BillingInformationCheck />}
                    />
                    <Route
                      path="/admin/BillingManagement/BillingInformationProcessing"
                      element={<BillingInformationProcessing />}
                    />
                    <Route
                      path="/admin/CourseManagement/AllOrders"
                      element={<AllOrders />}
                    />
                    <Route
                      path="/admin/CourseManagement/RefundProcessing"
                      element={<RefundProcessing />}
                    />
                    <Route
                      path="/admin/AuthorityManagement/AccountManagement"
                      element={<AccountManagement />}
                    />
                    <Route
                      path="/admin/AuthorityManagement/AdminReview"
                      element={<AdminReview />}
                    />
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
