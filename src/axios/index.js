import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
function getCookie (key) {
	var arr1 = document.cookie.split('; ');
	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if (arr2[0] == key) {
			return decodeURI(arr2[1]);
		}
	}
}
function setCookie (key, value, t) {
	if (t) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + t);
		document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString() + ";path=/";
	} else {
		document.cookie = key + '=' + value + ";path=/";
	}
}
var tokenStr = getCookie('token');
Axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
export default Axios.create({
	headers: {  // 设置请求头
		'Authorization': tokenStr
	},
	transformRequest: [function (data, xhr) {
		if (tokenStr) {
			xhr.Authorization = getCookie('token');
		} else {
			xhr.Authorization = null;
		}
		return JSON.stringify(data);
	}],
	transformResponse: [   // 请求回来的数据做处理
		function (data, xhr) {
			if (xhr.authorization) {
				// 存
				let userInfo = {};
				userInfo.login = true;
				userInfo.token = xhr.authorization;

				//设置loacstrong
				setCookie('token', response, 10)
			}
			return JSON.parse(data);
		}
	]
})