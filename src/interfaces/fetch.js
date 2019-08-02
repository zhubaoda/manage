import axios from 'axios'
import Global from './globalname.js'
import { message } from 'antd';
import { createHashHistory } from 'history'; // 哈希路由
const history = createHashHistory();
// let serviceUrl = '/WebHandler.ashx'
let serviceUrl = '/webhandler.ashx'
let appId = 'ClientService'

export default function Fetch() {
	this.fetch = async (actionType, args = {}) => {
		let res = await this._request(actionType, args);
		if (res.data.ErrorCode === 0) {
			res.data.Result = JSON.parse(res.data.Result)
			res.data.result = res.data.Result;
			res.data.Result.Message = "成功"
		} else {
			let messages = '';
			if (res.data.Result) {
				messages = res.data.Result;
			}
			if (res.data.messages) {
				messages = res.data.message;
			}

			if (messages === '登录已失效，请重新登录！' || messages === '未登入' || messages === '未登录' || messages === '该请求必须登录') {
//				localStorage.removeItem('loginName');
//				let url = window.location.href;
//				sessionStorage.setItem('redirectForLogin', JSON.stringify(url));
//				router.push(`/login`);
                history.push('/login');
			} else {
				let msg = '';
				if (res.data.Result) {
					msg = res.data.Result;
				}
				if (res.data.message) {
					msg = res.data.message;
				}
				message.warning(msg);
			}
		}
		return res
	}
	this._request = async (actionType, args) => {
		let headers = {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		}
		let paras = {
			ActionType: "",
			SessionId: "",
			Args: args
		}
		paras.Args.SaleChannel = Global.WebSaleChannel
		paras.ActionType = actionType
		paras.MethodName = paras.ActionType
		paras.AppID = appId
		paras.Parameters = paras.Args = JSON.stringify(paras.Args)
		let postData = {
			paras: paras
		};
		return new Promise((resolve, reject) => {
			axios({
				url: serviceUrl,
				transformRequest: [
					function (data) {
						data = "paras=" + JSON.stringify(paras);
						return data;
					}
				],
				data: postData || {},
				header: headers,
				method: 'POST'
			}).then((suc) => {
				resolve(suc);
			}).catch(function (error) {
				alert(`${error},您可以尝试重新登录`)
				reject(error);
			});
		})
	}
}
