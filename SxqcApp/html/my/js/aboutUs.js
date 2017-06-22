/*********************************** Summer Lifecycle Handler Define ***********************************/
summerready = function() {
	$summer.fixStatusBar($summer.byId('header'));
	init()
}
/*********************************** Init Method Define ***********************************/
function init(){
	var userinfo = summer.getStorage('userinfo');
	if (userinfo.userAvator) {
		document.querySelector(".um-circle").setAttribute('src', userinfo.userAvator);
	} else {
		document.querySelector(".um-circle").setAttribute('src', '../../img/user.png');
	}
}
/*********************************** DOM Event Handler Define ***********************************/ 
function openWin(type) {
	summer.openWin({
		"id" : type,
		"url" : 'html/my/' + type + '.html',
	});
}

function clearCache() {
	common.toast('功能暂未开放')
}