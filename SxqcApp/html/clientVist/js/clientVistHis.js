var app = new Vue({
	el:'#index',
	data:{
		clientHis:[
			{
				date:'2017-05-09 14:05',
				txt1:'拜访',
				txt2:'首次拜访客户,了解了客户的购买意向：X3000 1台 , 3个月内'
			},
			{
				date:'2017-05-23 15:25',
				txt1:'拜访',
				txt2:'第二次拜访客户,了解了客户的购买意向：X3000 1台 , 2个月内'
			},
			{
				date:'2017-06-09 11:15',
				txt1:'拜访',
				txt2:'第二次拜访客户,了解了客户的购买意向：X4000 1台 , 1个月内'
			}
		]
	},
	mounted(){

	},
	methods:{
		foo(){
			console.log('foo');
		},
		back(){
			summer.closeWin();
		}
	}
})