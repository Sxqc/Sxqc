var vm = new Vue({
	el:'#app',
	data:{
		msg:'login',
		loginInfo:{
			username:'admin',
			password:'admin'
		},
		flag:true

	},
	mounted:function (){
		console.log(u.login);
	},
	methods:{
		foo:function(){
			console.log('foo');
		},
		login:function(){
			console.log('login');
			if (this.loginInfo.username == '') {
				common.toast("账号不能为空");
				return
			};
			if (this.loginInfo.password == '') {
				common.toast("密码不能为空");
				return
			};
			UM.showLoadingBar({
			    text: "登录中",
			    icons: 'ti-loading',
			})
			let url = u.login+"&username="+this.loginInfo.username+"&password="+this.loginInfo.username;
				// axios.get(url)
				// 	.then(function(response){
				// 		UM.hideLoadingBar();
				// 		console.log(response);
				// 	})
				// 	.catch(function(err){
				// 		UM.hideLoadingBar();
				// 		console.log(err);
				// 	});



			// UM.hideLoadingBar();
			// var data = response.data;
			// if(null != data){
			// 	var dataJSON = $summer.strToJson(data)
			// 	var sessionId = dataJSON.sessionId;
			// 	var tenantId = dataJSON.tenantId;
			// 	summer.setStorage("cur_sessionId", sessionId);
			// 	summer.setStorage("tenantId", tenantId);
				
			// 	//header
			// 	var headers = response.headers;
			// 	var headersStr = $summer.jsonToStr(headers);
			// 	summer.setStorage("web_headers", headersStr);
				
				
			// 	//refulshDate();
			
			// 	/**/summer.openWin({
			// 	    d : "root",
			// 		url : "index.html",
			// 		isKeep : false,
			// 	    pageParam: {
			// 	        name: 'test',
			// 	        pwd:'testpwd'
			// 	    }
			// 	});
			// }else{
			// 	common.toast("登录失败，请重新登录！");
			// }
			setTimeout(()=>{
				UM.hideLoadingBar();
				var userinfo={
			    	username:this.loginInfo.username,
			    	password:this.loginInfo.username
			    };
			    if (this.flag) {
			    	summer.setStorage("userinfo", userinfo);
				}
				summer.openWin({
					id : "root",
					url : "index.html",
					isKeep : false,
				});
			},2000)
			

		}
	}
})