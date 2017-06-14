var app = new Vue({
	el:'#index',
	data:{
		clientInfo:[
			{
				tel:'15090822891',
				name:'王方',
				num1:2,
				num2:3,
				num3:1,
				flag:1, //1 == 个人 2 组织
			},
			{
				tel:'15090822891',
				name:'顺丰快递山东分公司',
				num1:12,
				num2:5,
				num3:8,
				flag:2, //1 == 个人 2 组织
			},
			{
				tel:'15090822891',
				name:'李可欣',
				num1:5,
				num2:6,
				num3:3,
				flag:1, //1 == 个人 2 组织
			}
		]
	},
	mounted(){

	},
	methods:{
		foo(){
			console.log('foo');
		},
		isPerson(str){
			return str == 1? '个人':'组织'
		},
		toHis(){
			summer.openWin({
			    id: 'clientVistHis',
			    url: 'html/clientVist/clientVistHis.html',
			    pageParam: {
			        name: 'test'
			    }
			});
		},
		back(){
			summer.closeWin();
		}
	}
})