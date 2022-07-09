/**
 * 网络请求配置
 */
import axios from "axios";
import qs from "qs";
import { message } from "antd";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "https://chongjunxinke.com:9000/";
// "http://chongjun.natapp1.cc/";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    // 如果不是FormData类型，且为post请求，则进行数据的序列化
    if (
      Object.prototype.toString.call(config.data) !== "[object FormData]" &&
      config.method !== "get" &&
      // 以下接口不需要序列化
      config.url !== "/company/companyInfo" &&
      config.url !== "/position" &&
      config.url !== "/position/common" &&
      config.url !== "/specialRecruit/position" &&
      config.url !== "/user/info"
    ) {
      // 请求拦截器处理

      config.data = qs.stringify(config.data);
    }
    // if (config.url == "/specialRecruit") {
    //   config.data = qs.stringify(config.data);
    //   config.headers["Content-Type"] = "multipart/form-data";
    // }
    // 添加token
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined &&
      // 登录接口无许添加token
      config.url !== "/company/loginByAcc" &&
      config.url !== "/admin/loginByAcc" &&
      config.url !== "/verification/register" &&
      config.url !== "/verification/login" &&
      config.url !== "/verification/changePassword"
    ) {
      config.headers["auth"] = localStorage.getItem("token");
    }
    if(config.url=="/resume/pdf/admin"||config.url=="/resume/pdf/company"){
      config.responseType="blob"
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    return response;
  },
  (error) => {
    message.error("请求出错");
    console.log("请求出错：", error);
  }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        landing(url, params, response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}
export function putHeader(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          msag(err);
          reject(err);
        }
      );
  });
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Delete(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params,
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          msag(err);
          reject(err);
        }
      );
  });
}

//统一接口处理，返回数据
export default function (fecth, url, param) {
  let _data = "";
  return new Promise((resolve, reject) => {
    switch (fecth) {
      case "get":
        console.log("begin a get request,and url:", url);
        get(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request GET failed.", error);
            reject(error);
          });
        break;
      case "post":
        post(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request POST failed.", error);
            reject(error);
          });
        break;
      case "put":
        put(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request PUT failed.", error);
            reject(error);
          });
        break;
      case "putHeader":
        putHeader(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request PUT failed.", error);
            reject(error);
          });
        break;
      case "delete":
        Delete(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request DELETE failed.", error);
            reject(error);
          });
        break;
      default:
        break;
    }
  });
}

//失败提示
function msag(err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details);
        break;
      case 401:
        alert("未授权，请登录");
        break;

      case 403:
        alert("拒绝访问");
        break;

      case 404:
        alert("请求地址出错");
        break;

      case 408:
        alert("请求超时");
        break;

      case 500:
        alert("服务器内部错误");
        break;

      case 501:
        alert("服务未实现");
        break;

      case 502:
        alert("网关错误");
        break;

      case 503:
        alert("服务不可用");
        break;

      case 504:
        alert("网关超时");
        break;

      case 505:
        alert("HTTP版本不受支持");
        break;
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
  if (data.code === -1) {
  }
}
