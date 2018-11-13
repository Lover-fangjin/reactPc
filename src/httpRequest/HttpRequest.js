/**
 * @Auther YJH
 * @ClassTitle:HttpRequest
 * @Created time on : 2018/8/2713:23
 * @Description:描述...
 */
import * as CONS from './Constants';

var HttpRequest = {};

{/*  get请求   url格式：http://www.baidu.com?key1=value1&key2=value2

 let url = "http://192.168.0.132:8080/log/logs?"
 let params = [{"searchKey":"成功"},{"createtime":"2018-08-10"},{"pageNum":"1"},{"pageSize":"2"}];
 */
}

HttpRequest.HttpGet = (bodyParams) => {
    let {url} = bodyParams;
    let {params} = bodyParams;
    url = CONS.baseApi + url;//拼接api头
    //get请求的字符串拼接 "?"处理
    if (-1 === url.indexOf("?")) {
        url = url + "?";
    }
    params.forEach(param => {
        for (let key in param) {
            url = url + key + "=" + param[key] + "&";
        }
    });
    let index = url.lastIndexOf('&');
    url = url.substring(0, index);
    console.log("======HttpGet=========>>>" + url);
    //promise 进行请求后的回调封装
    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        })
            .then(response => response.json())
            .then(result => {

                resolve(result);

            }).catch(err => reject(err));
    })

};


{/*  post请求
 let url = "http://192.168.0.132:8080/user/login";
 let bodyParams = [{"account":"13245654567"},{"passwd":"123456"}];
 params = key1=value1&key2=value2

 let _url = "http://192.168.0.132:8080/user/login";
 let _params = [{"account":"13245654567"},{"passwd":"123456"}];
 let bodyParams = {"url":_url, "params":_params};
 */
}
HttpRequest.HttpPost = (bodyParams) => {
    let {url} = bodyParams;
    let {params} = bodyParams;
    //post请求的字符串拼接
    let body = "";
    url = CONS.baseApi + url;//拼接api头
    if (params && params.length > 0) {
        params.forEach(param => {
            for (let key in param) {
                body = body + key + "=" + param[key] + "&";
                console.log(param[key])
            }
        });
        body = body.substring(0, body.length-1);
    }

    console.log("=========ddd======" + params);
    console.log("======HttpPost=========>>>" + url+"?"+body);
    //promise 进行请求后的回调封装
    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

            },
            body: body
        })

            .then(response =>
                response.json())
            .then(result => {
                resolve(result);
            })
            .catch((err) => reject(err))
    });
};

HttpRequest.HttpPostModel = (bodyParams) => {
    let {url} = bodyParams;
    let {params} = bodyParams;
    //post请求的字符串拼接
    let body = {};
    url = CONS.baseApi + url;//拼接api头
    if (params && params.length > 0) {
        params.forEach(param => {
            for (let key in param) {
                // body = body + key + "=" + param[key] + "&";
                body.key = param[key]
                // body.put(key,param[key]);
                console.log(param[key] + "参数")
            }
        });
        // body = body.substring(0, body.length-1);
    }

    console.log("=========ddd======" +JSON.stringify(params));
    console.log("======HttpPost=========>>>" + url+"?"+body);
    //promise 进行请求后的回调封装
    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(params)
        })

            .then(response =>
                response.json())
            .then(result => {
                resolve(result);
            })
            .catch((err) => reject(err))
    });
};

export default HttpRequest;