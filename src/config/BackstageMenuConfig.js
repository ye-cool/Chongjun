// 侧边栏配置
const BackstageMenuList = [
  {
    title: "崇军就业",
    key: "ChongjunEmployment",
    children: [
      {
        title: "简历数据库",
        key: "ChongjunEmployment/ResumeDatabase",
      },
      {
        title: "职位数据库",
        key: "ChongjunEmployment/JobDatabase",
      },
      {
        title: "专场招聘",
        key: "ChongjunEmployment/SpecialRecruitment",
      },
    ],
  },
  {
    title: "企业管理",
    key: "BusinessManagement",
    children: [
      {
        title: "企业详情",
        key: "BusinessManagement/EnterpriseDetails",
      },
      {
        title: "企业审核",
        key: "BusinessManagement/EnterpriseAudit",
      },
      {
        title: "企业账号管理",
        key: "BusinessManagement/EnterpriseAccountManagement",
      },
    ],
  },
  {
    title: "展示管理",
    key: "DisplayManagement",
    children: [
      {
        title: "轮播图设置",
        key: "DisplayManagement/CarouselSettings",
      },
      {
        title: "关于我们",
        key: "DisplayManagement/AboutUs",
      },
      {
        title: "隐私协议",
        key: "DisplayManagement/PrivacyAgreement",
      },
    ],
  },
  // {
  //   title: "开票管理",
  //   key: "BillingManagement",
  //   children: [
  //     {
  //       title: "开票信息核对",
  //       key: "BillingManagement/BillingInformationCheck",
  //     },
  //     {
  //       title: "开票信息处理",
  //       key: "BillingManagement/BillingInformationProcessing",
  //     },
  //   ],
  // },
  // {
  //   title: "课程管理",
  //   key: "CourseManagement",
  //   children: [
  //     {
  //       title: "全部订单",
  //       key: "CourseManagement/AllOrders",
  //     },
  //     {
  //       title: "退款处理",
  //       key: "CourseManagement/RefundProcessing",
  //     },
  //   ],
  // },
  {
    title: "权限管理",
    key: "AuthorityManagement",
    children: [
      {
        title: "账号管理",
        key: "AuthorityManagement/AccountManagement",
      },
      {
        title: "管理员审核",
        key: "AuthorityManagement/AdminReview",
      },
    ],
  },
];

export default BackstageMenuList;
