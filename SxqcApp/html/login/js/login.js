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
    var userinfo={
    	username:"zhoulei",
    	password:12345
    };
     summer.setStorage("userinfo", userinfo);
  	summer.openWin({
				id : "root",
				url : "index.html",
				isKeep : false,
			});
   
    
}