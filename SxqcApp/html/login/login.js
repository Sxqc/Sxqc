var vm = new Vue({
	el:'#app',
	data:{
		msg:'login',
		loginInfo:{
			username:'admin',
			password:'admin'
		},
		flag:true,
		url:url.login

	},
	mounted:function (){
		this.foo();
	},
	methods:{
		foo:function(){
			console.log('foo');
		},
		login:function(){
			console.log(this.url);
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
			setTimeout(()=>{
				UM.hideLoadingBar();
				var userinfo={
			    	username:this.loginInfo.username,
			    	password:this.loginInfo.password
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