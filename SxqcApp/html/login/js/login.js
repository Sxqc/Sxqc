function login() {
	var muser = $summer.byId('username').value;
	var mpwd = $summer.byId('password').value;
	if (muser == '') {
		common.toast("账号不能为空");
		return false;
	}
	if (mpwd == '') {
		common.toast("密码不能为空");
		return false;
	}
	summer.writeConfig({
		"host" : "192.168.0.121", //MA主机地址
		"port" : "8080" //MA主机端口
	});
	summer.showProgress({
		"title" : "请稍等。。。"
	});
	//UM.showLoadingBar({
			   // text: "登录中",
			   // icons: 'ti-loading',
			//})
	summer.callAction({
		"viewid" : "com.yonyou.sxqcapp.LoginInit", //后台带包名的Controller名
		"action" : "login", //方法名
		"params" : {
			groupCode : "GMS001",
			validate : "",
			_ : "1496979336890",
			username : muser,
			password : mpwd
		}, //groupCode:"GMS001",validate:"",_:"1496979336890",

		"callback" : "callback()", //请求回来后执行的js方法
		"error" : "myerror()" //失败回调的js方法
	})

}

function callback(response) {
	refreshToken();
	alert("回调成功" + JSON.stringify(response));
	var userinfo = {
		tenantId : response.tenantId,
		sessionId : response.sessionId
	}
	 if (this.flag) {
		summer.setStorage("userinfo", userinfo);
	}
	    summer.openWin({
		id : "root",
		url : "index.html",
	    isKeep : false,
	});
}

function myerror(response) {
	//summer.toast({msg:"登录失败，请重新登录！",position:"middle"});
	alert("回调失败" + response.err_msg);
}

function refreshToken() {
	 var currentToken = summer.getStorage("urlToken");
	summer.callAction({
		"viewid" : "com.yonyou.sxqcapp.TokenInit", //后台带包名的Controller名
		"action" : "tokendata", //方法名
		"params" : {urlToken:currentToken},
		"callback" : "calltoken()", //请求回来后执行的js方法
		"error" : "tokenerror()" //失败回调的js方法
	})
	

}

	function calltoken(response) {
	      var resultctx =String(response.resultctx);
			summer.setStorage("urlToken", resultctx);
		}

	function tokenerror(response) {
		summer.toast({msg:"登录失败，请重新登录！",position:"middle"});
	}

/**
 * 定时更新urlToken：5分钟执行一次
 */
summerready = function() {
	//setInterval(refreshToken, 5 * 60 * 1000);
}