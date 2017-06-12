function openTab(type,titles){
    //var top = $summer.offset($summer.byId('header')).h;
	var bottom = $summer.offset($summer.byId('footer')).h;
	summer.openFrame({
		name: type,
	    url: 'html/'+type+'/'+type+'.html',
		 position: {
            top: 0,
			bottom: bottom,
            left: 0,
            right: 0
        }
	});       
}
summerready=function(){
	var userinfo=summer.getStorage("userinfo");
	if(!isLogin()){
		openLogin();
		return false;
	}else {
        openTab('home');
    }
}
function openLogin(){
   summer.openWin({
        id : "login",
        url : "html/login/login.html",
        isKeep : false,
        animation:{
            duration:0 
        }
    });
}
//判断是否登录
function isLogin(){
    var userinfo=summer.getStorage('userinfo');
    if(userinfo){
        return true;
    }else {
        return false;
    }
}