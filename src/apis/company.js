import http from "../utils/http";
import urls from "./urls";

// 企业端注册
function companyRegister(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.companyRegister, param).then(
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
// 企业端账号密码登录
function companyLogin(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.companyLogin, param).then(
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
// 企业端手机验证码登录
function companyLoginByPhone(param) {
  return new Promise((resolve, reject) => {
    http("post", urls.companyLoginByPhone, param).then(
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
// 企业端手机验证码登录
function companyChangePasswordByPhone(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.companyChangePasswordByPhone, param).then(
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
// 企业端登录后获取账号信息
function getCompanyInfo(cid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getCompanyInfo(cid)).then(
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
// 企业端获取企业详情
function getCompanyDetail(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getCompanyDetail, param).then(
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
// 企业端修改企业名称
function putCompanyName(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putCompanyName, param).then(
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
// 企业端修改企业信息
function putCompanyInfo(param) {
  return new Promise((resolve, reject) => {
    http("putHeader", urls.putCompanyInfo, param).then(
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
// 企业端修改企业照片
function putCompanyPhoto(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putCompanyPhoto, param).then(
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

// 获取企业端职位数据库
function getPosition(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPosition, param).then(
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
// 获取企业端职位数据库
function putPosition(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPosition, param).then(
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
// 获取企业端职位详情
function getPositionDetail(pid, id) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPositionDetail(pid, id)).then(
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
// 获取企业端职位详情
function postPosition(param) {
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
// 获取企业端职位简历投递简略信息
function getPositionResume(pid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPositionResume(pid)).then(
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
// 获取企业端职位简历投递详细信息
function getPositionResumeDetail(openid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPositionResumeDetail(openid)).then(
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
// 面试邀约
function putResume(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putResume, param).then(
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
// 下载pdf
function getResumePdfCompany(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getResumePdfCompany, param).then(
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
// 获取企业端专场招聘
function getSpecial(id, param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSpecial(id), param).then(
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
// 获取企业端专场招聘活动详情
function getSpecialDetail(id) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSpecialDetail(id)).then(
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
// 企业报名参加专场招聘
function putSpecialParticipateIn(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putSpecialParticipateIn, param).then(
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
// 企业新增专场招聘职位
function postSpecialPosition(param) {
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
// 获取企业端专场招聘岗位详情
function getSpecialJobDetail(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getSpecialJobDetail, param).then(
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
// 获取个人信息
function getPersonalInfo(cid) {
  return new Promise((resolve, reject) => {
    http("get", urls.getPersonalInfo(cid)).then(
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
// 修改个人信息昵称
function putPersonalName(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPersonalName, param).then(
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
// 修改企业账号密码
function putPersonalPassword(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPersonalPassword, param).then(
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
// 获取企业端所有子账号
function getAccount(id, param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getAccount(id), param).then(
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
// 获取企业端未审核子账号
function getAccountNotAudited(id, param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getAccountNotAudited(id), param).then(
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
// 重置企业端账号密码
function putPasswordReset(id, cid) {
  return new Promise((resolve, reject) => {
    http("put", urls.putPasswordReset(id, cid)).then(
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

// 删除企业端子账号
function deleteAccount(param) {
  return new Promise((resolve, reject) => {
    http("delete", urls.deleteAccount, param).then(
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
// 审核企业端子账号
function putAccountAudit(param) {
  return new Promise((resolve, reject) => {
    http("put", urls.putAccountAudit, param).then(
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
  companyRegister,
  companyLogin,
  companyLoginByPhone,
  companyChangePasswordByPhone,
  getCompanyInfo,
  getCompanyDetail,
  putCompanyName,
  putCompanyInfo,
  putCompanyPhoto,
  getPosition,
  putPosition,
  postPosition,
  getPositionDetail,
  getPositionResume,
  getPositionResumeDetail,
  putPositionHide,
  putPositionShow,
  getSpecial,
  getSpecialDetail,
  putSpecialParticipateIn,
  postSpecialPosition,
  getSpecialJobDetail,
  getPersonalInfo,
  putPersonalName,
  putPersonalPassword,
  getAccount,
  putPasswordReset,
  deleteAccount,
  putAccountAudit,
  getAccountNotAudited,
  putResume,
  getResumePdfCompany,
};
