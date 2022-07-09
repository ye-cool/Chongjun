import http from "../utils/http";
import urls from "./urls";
function getRegisterVerification(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getRegisterVerification, param).then(
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
function getLoginVerification(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getLoginVerification, param).then(
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
function getChangePasswordVerification(param) {
  return new Promise((resolve, reject) => {
    http("get", urls.getChangePasswordVerification, param).then(
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
export { getRegisterVerification, getLoginVerification,getChangePasswordVerification };
