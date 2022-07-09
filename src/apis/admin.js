import http from "../utils/http";
import urls from "./urls";

// 管理端登录
function adminRegister(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.adminRegister, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 管理端账号密码登录
function adminLogin(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.adminLogin, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 管理端手机验证码登录
function adminLoginByPhone(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.adminLoginByPhone, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 管理端手机验证码登录
function adminChangePasswordByPhone(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.adminChangePasswordByPhone, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端登录后获取账号信息
function getAdminInfo(aid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getAdminInfo(aid)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取简历数据库
function getResume(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResume, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取简历数据库专业列表
function getMajor(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getMajor, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取 职位数据库 发送了面试邀约的 用户姓名列表
function getInterviewUsername(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getInterviewUsername, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取 职位数据库 投递了简历的 用户姓名列表
function getResumeSendUsername(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResumeSendUsername, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取 职位数据库 下载了简历的 用户姓名列表
function getResumeDownloadUsername(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResumeDownloadUsername, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取简历详细信息
function getResumeDetail(openid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResumeDetail(openid)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 下载简历
function getResumePdfAdmin(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResumePdfAdmin, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取职位数据库
function getJob(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getJob, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取职位详情
function getJobDetail(pid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getJobDetail(pid)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 新增职位
function postJob(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.postPosition, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 新增专场招聘职位
function postSpecialJob(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.postSpecialPosition, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端获取所有专场招聘的名字和id
function getSpecialRecruitName(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSpecialRecruitName, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端获取所有企业的名字和id
function getCompanyName(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getCompanyName, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 下架职位
function putPositionHide(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPositionHide, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 上架职位
function putPositionShow(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPositionShow, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端专场招聘
function getBSpecial(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBSpecial, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端更新/添加专场招聘图片
function putBSpecialPhoto(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putBSpecialPhoto, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端新增专场招聘
function postBSpecial(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.postBSpecial, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端编辑专场招聘
function putBSpecial(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putBSpecial, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端删除专场招聘
function deleteSpecial(id) {
  return new Promise((resolve, reject) => {
    http("delete", urls.deleteSpecial(id)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端结束专场招聘
function stopSpecial(id) {
  return new Promise((resolve, reject) => {
    http("put", urls.stopSpecial(id)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端转移岗位到普通岗位
function putToCommon(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putToCommon, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端专场招聘详情
function getBSpecialDetail(rid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBSpecialDetail(rid)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端企业信息列表
function getCompanyList(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getCompanyList, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端一级地区列表
function getAreaList(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getAreaList, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端二级地区列表
function getSecondAreaList(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSecondAreaList, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端企业详细信息
function getBCompanyDetail(id) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBCompanyDetail(id)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端企业审核列表
function getSuperAccountNotAudited(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSuperAccountNotAudited, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 后台管理端审核企业账号
function putSuperAccountAudit(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putSuperAccountAudit, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端已审核审核企业账号
function getSuperAccount(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSuperAccount, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取后台管理端已审核审核企业账号
function deleteSuperAccount(param) {
  return new Promise((resolve, reject) => {
    http("delete", urls.deleteSuperAccount, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取轮播图展示列表
function getBanner(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBanner, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取轮播图展示列表
function putBanner(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putBanner, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取轮播图展示列表
function putBannerLink(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putBannerLink, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取关于崇军文本信息
function getAboutUs(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getAboutUs, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 更新关于崇军文本信息
function putAboutUs(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putAboutUs, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取合作单位信息列表
function getCooperativeUnit(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getCooperativeUnit, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 添加合作单位信息
function postCooperativeUnit(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.postCooperativeUnit, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取隐私协议文本信息
function getPrivacyPolicy(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPrivacyPolicy, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 修改隐私协议文本信息
function putPrivacyPolicy(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPrivacyPolicy, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取账号列表
function getBAccount(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBAccount, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 修改密码
function putPassword(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPassword, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 删除账号
function deleteBAccount(aid) {
  return new Promise((resolve, reject) => {
    http("delete", urls.deleteBAccount(aid)).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 获取未审核账号列表
function getBAccountNotAudited(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getBAccountNotAudited, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
// 审核账号
function putBAccountAudited(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putBAccountAudited, param).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

export {
  adminRegister,
  adminLogin,
  adminLoginByPhone,
  adminChangePasswordByPhone,
  getAdminInfo,
  getResume,
  getMajor,
  getInterviewUsername,
  getResumeSendUsername,
  getResumeDownloadUsername,
  getResumeDetail,
  getJob,
  getAreaList,
  getSecondAreaList,
  getJobDetail,
  getBSpecial,
  putBSpecialPhoto,
  postBSpecial,
  putBSpecial,
  deleteSpecial,
  stopSpecial,
  putToCommon,
  getBSpecialDetail,
  postJob,
  postSpecialJob,
  getSpecialRecruitName,
  getCompanyName,
  putPositionHide,
  putPositionShow,
  getCompanyList,
  getBCompanyDetail,
  getSuperAccountNotAudited,
  putSuperAccountAudit,
  getSuperAccount,
  deleteSuperAccount,
  getBanner,
  putBanner,
  putBannerLink,
  getAboutUs,
  putAboutUs,
  getCooperativeUnit,
  postCooperativeUnit,
  getPrivacyPolicy,
  putPrivacyPolicy,
  getBAccount,
  putPassword,
  deleteBAccount,
  getBAccountNotAudited,
  putBAccountAudited,
  getResumePdfAdmin,
};
