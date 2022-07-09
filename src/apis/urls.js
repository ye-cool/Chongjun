export default {
  /**
   * 获取验证码
   *  */
  // 获取登录短信验证码
  getLoginVerification: "/verification/login",
  // 获取注册短信验证码
  getRegisterVerification: "/verification/register",
  // 获取修改密码短信验证码
  getChangePasswordVerification: "/verification/changePassword",

  /**
   * 后台管理端相关接口
   */

  // 后台管理端注册
  adminRegister: "/admin/register",
  // 后台管理端账号密码登录
  adminLogin: "/admin/loginByAcc",
  // 后台管理端手机验证码登录
  adminLoginByPhone: "/admin/loginByPhone",
  // 后台管理端手机验证码修改密码
  adminChangePasswordByPhone: "/admin/password/verification",
  // 后台管理端登录后获取账号信息
  getAdminInfo: function getAdminInfo(aid) {
    return `/admin/${aid}/detailInfo`;
  },
  // 获取后台管理端简历数据库
  getResume: "/resume/userDatabaseInfo",
  // 获取后台管理端简历数据库所有专业
  getMajor: "/user/allMajor",
  // 获取 职位数据库 发送了面试邀约的 用户姓名列表
  getInterviewUsername: "/resume/userNameOfPosition/interviewSend",
  // 获取 职位数据库 投递了简历的 用户姓名列表
  getResumeSendUsername: "/resume/userNameOfPosition/resumeSend",
  // 获取 职位数据库 下载了简历的 用户姓名列表
  getResumeDownloadUsername: "/resume/userNameOfPosition/resumeDownload",
  // 获取简历详细信息
  getResumeDetail: function getResumeDetail(openid) {
    return `/resume/adminsideDetailInfo/${openid}`;
  },
  getResumePdfAdmin: "/resume/pdf/admin",
  // 获取后台管理端职位数据库
  getJob: "/position/adminsideDatabaseInfo",

  // 获取后台管理端职位详情
  getJobDetail: function getJobDetail(positionId) {
    return `/position/${positionId}/adminsideDetailInfo`;
  },
  // 后台管理端获取所有专场招聘的名字和id
  getSpecialRecruitName: "/specialRecruit/nameAndIds",
  // 后台管理端获取所有企业的名字和id
  getCompanyName: "/company/nameAndIds",
  // 获取后台管理端所有专场招聘信息
  getBSpecial: "/specialRecruit/adminsideInfoList",
  // 后台管理端更新/添加专场招聘图片
  putBSpecialPhoto: "/specialRecruit/photo",
  // 后台管理端新增专场招聘
  postBSpecial: "/specialRecruit",
  // 后台管理端编辑专场招聘
  putBSpecial: "/specialRecruit",
  // 删除专场招聘
  deleteSpecial: function deleteSpecial(id) {
    return `/specialRecruit/${id}`;
  },
  // 结束专场招聘
  stopSpecial: function stopSpecial(id) {
    return `/specialRecruit/${id}`;
  },
  // 后台管理端转移岗位到普通岗位
  putToCommon: "/specialRecruit/positionToCommon",
  // 获取后台管理端专场招聘信息详情
  getBSpecialDetail: function getBSpecialDetail(recruitId) {
    return `/specialRecruit/${recruitId}/adminsideDetailInfo`;
  },
  // 获取后台管理端企业信息列表
  getCompanyList: "/company/adminsideInfo",
  // 获取后台管理端一级地区列表
  getAreaList: "/company/allPrimaryArea",
  // 获取后台管理端二级地区列表
  getSecondAreaList: "/company/allSecondaryArea",
  // 获取后台管理端企业详细信息
  getBCompanyDetail: function getBCompanyDetail(companyId) {
    return `/company/adminsideDetailInfo/${companyId}`;
  },
  // 获取后台管理端企业审核列表
  getSuperAccountNotAudited: "/company/superAccount/adminsideInfo",
  // 后台管理端审核企业账号
  putSuperAccountAudit: "/company/superAccount/audit",
  // 获取后台管理端已审核企业账号
  getSuperAccount: "/company/account/adminsideInfo",
  // 删除后台管理端已审核企业账号
  deleteSuperAccount: "/company/superAccount",
  // 获取轮播图展示列表
  getBanner: "/display/banner/showInfoList",
  // 更新轮播图
  putBanner: "/display/banner",
  // 更改轮播图跳转链接
  putBannerLink: "/display/banner/photoLink",
  // 获取关于崇军文本信息
  getAboutUs: "/display/aboutUs",
  // 更新关于崇军文本信息
  putAboutUs: "/display/aboutUs",
  // 获取合作单位信息列表
  getCooperativeUnit: "/display/cooperativeUnit",
  // 添加合作单位信息
  postCooperativeUnit: "/display/cooperativeUnit",
  // 获取隐私协议文本信息
  getPrivacyPolicy: "/display/privacyPolicy",
  // 修改隐私协议文本信息
  putPrivacyPolicy: "/display/privacyPolicy",
  // 获取所有账号列表
  getBAccount: "/admin/account/auditedInfo",
  // 修改密码
  putPassword: "/admin/password",
  // 删除账号
  deleteBAccount: function deleteBAccount(aid) {
    return `/admin/${aid}/account`;
  },
  // 获取未审核账号列表
  getBAccountNotAudited: "/admin/accountNotAudited",
  // 审核账号
  putBAccountAudited: "/admin/audit",

  /**
   * 以下接口为企业端所用
   **/

  // 企业端注册
  companyRegister: "/company/account/register",
  // 企业端账号密码登录
  companyLogin: "/company/loginByAcc",
  // 企业端手机验证码登录
  companyLoginByPhone: "/company/account/loginByPhone",
  // 企业端手机验证码登录
  companyChangePasswordByPhone: "/company/account/password/verification",
  // 企业端登录后获取账号信息
  getCompanyInfo: function getCompanyInfo(cid) {
    return `/company/account/${cid}/detailInfo`;
  },
  // 获取企业端企业详情
  getCompanyDetail: "company/detailInfo",
  // 修改企业名称
  putCompanyName: "/company/companyName",
  // 修改企业信息
  putCompanyInfo: "/company/companyInfo",
  // 更新企业照片
  putCompanyPhoto: "/company/photo",
  // 获取企业端职位数据库
  getPosition: "/position/databaseInfoOfCompany",
  // 编辑职位信息更新
  putPosition: "/position",
  // 新增岗位
  postPosition: "/position/common",
  // 下架职位
  putPositionHide: "/position/hide",
  // 上架职位
  putPositionShow: "/position/show",
  // 获取企业端职位详细信息
  getPositionDetail: function getPositionDetail(positionId, companyId) {
    return `/position/${positionId}/${companyId}/companysideDetailInfo`;
  },
  // 获取企业端职位简历投递简略信息
  getPositionResume: function getPositionResume(positionId, companyId) {
    return `/resume/position/${positionId}`;
  },
  // 获取企业端职位简历投递详细信息
  getPositionResumeDetail: function getPositionResumeDetail(openid) {
    return `/resume/companysideDetailInfo/${openid}`;
  },
  // 下载pdf
  getResumePdfCompany: "/resume/pdf/company",
  // 发送面试邀约
  putResume: "/resume/audit",
  // 获取企业端所有专场招聘信息列表
  getSpecial: function getSpecial(companyId) {
    return `/specialRecruit/allCompanysideInfo/${companyId}`;
  },
  // 获取企业端所有专场招聘活动详情
  getSpecialDetail: function getSpecialDetail(id) {
    return `/specialRecruit/${id}/companysideDetailInfo`;
  },
  // 企业报名参加专场招聘
  putSpecialParticipateIn: "/specialRecruit/companyRegister",
  // 企业报名参加专场招聘
  postSpecialPosition: "/specialRecruit/position",
  // 获取企业端所有专场招聘岗位详情
  getSpecialJobDetail: "/position/company/recruit",
  // 获取个人信息
  getPersonalInfo: function getPersonalInfo(cid) {
    return `/company/account/${cid}/detailInfo`;
  },
  // 修改个人信息昵称
  putPersonalName: "/company/account/name",
  // 获取企业账号密码
  putPersonalPassword: "/company/account/password",
  // 获取企业端未审核子账号
  getAccountNotAudited: function getAccountNotAudited(companyId) {
    return `/company/${companyId}/accountNotAudited`;
  },
  // 获取企业端所有子账号
  getAccount: function getAccount(companyId) {
    return `/company/account/auditedInfo/${companyId}`;
  },
  // 重置密码
  putPasswordReset: function putPasswordReset(companyId, cid) {
    return `/company/${companyId}/account/${cid}/password/reset`;
  },
  // 删除企业端子账号
  deleteAccount: "/company/account",
  // 审核企业端子账号
  putAccountAudit: "/company/account/audit",
};
