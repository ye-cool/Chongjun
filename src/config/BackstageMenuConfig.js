// 侧边栏配置
const BackstageMenuList = [
  {
    title: "崇军就业",
    key: "ChongjunEmployment",
    children: [
      {
        title: "简历数据库",
        key: "/admin/ChongjunEmployment/ResumeDatabase",
      },
      {
        title: "职位数据库",
        key: "/admin/ChongjunEmployment/JobDatabase",
      },
      {
        title: "专场招聘",
        key: "/admin/ChongjunEmployment/SpecialRecruitment",
      },
    ],
  },
  {
    title: "企业管理",
    key: "BusinessManagement",
    children: [
      {
        title: "企业详情",
        key: "/admin/BusinessManagement/EnterpriseDetails",
      },
      {
        title: "企业审核",
        key: "/admin/BusinessManagement/EnterpriseAudit",
      },
      {
        title: "企业账号管理",
        key: "/admin/BusinessManagement/EnterpriseAccountManagement",
      },
    ],
  },
  {
    title: "展示管理",
    key: "DisplayManagement",
    children: [
      {
        title: "轮播图设置",
        key: "/admin/DisplayManagement/CarouselSettings",
      },
      {
        title: "关于我们",
        key: "/admin/DisplayManagement/AboutUs",
      },
      {
        title: "隐私协议",
        key: "/admin/DisplayManagement/PrivacyAgreement",
      },
    ],
  },
  // {
  //   title: "开票管理",
  //   key: "BillingManagement",
  //   children: [
  //     {
  //       title: "开票信息核对",
  //       key: "/admin/BillingManagement/BillingInformationCheck",
  //     },
  //     {
  //       title: "开票信息处理",
  //       key: "/admin/BillingManagement/BillingInformationProcessing",
  //     },
  //   ],
  // },
  // {
  //   title: "课程管理",
  //   key: "CourseManagement",
  //   children: [
  //     {
  //       title: "全部订单",
  //       key: "/admin/CourseManagement/AllOrders",
  //     },
  //     {
  //       title: "退款处理",
  //       key: "/admin/CourseManagement/RefundProcessing",
  //     },
  //   ],
  // },
  {
    title: "权限管理",
    key: "AuthorityManagement",
    children: [
      {
        title: "账号管理",
        key: "/admin/AuthorityManagement/AccountManagement",
      },
      {
        title: "管理员审核",
        key: "/admin/AuthorityManagement/AdminReview",
      },
    ],
  },
];

export default BackstageMenuList;
