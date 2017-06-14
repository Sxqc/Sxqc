var app = new Vue({
    el: '#index',
    data: {
        list: {
            row1: [{
                icon: 'icon-tongxunlu',
                text: '销售线索'
            }, {
                icon: 'icon-kehu',
                text: '客户'
            }, {
                icon: 'icon-kehu1',
                text: '客户拜访'
            }, {
                icon: 'icon-duihuakuang',
                text: '客户邀约'
            }],
            row2: [{
                icon: 'icon-huixingzhen',
                text: '添加线索'
            }, {
                icon: 'icon-tianjiayonghu',
                text: '添加客户'
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }],
            row3: [{
                icon: 'icon-c-callback',
                text: '客户回访'
            }, {
                icon: 'icon-kehu',
                text: '客户评价'
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }],
            row4: [{
                icon: 'icon-icon',
                text: '销售业绩管理'
            }, {
                icon: 'icon-tubiao',
                text: '销售业务分析'
            }, {
                icon: 'icon-zhuzhuangtu',
                text: '销售日常报表'
            }, {
                icon: '',
                text: ''
            }],
            row5: [{
                icon: 'icon-flag',
                text: '工单管理'
            }, {
                icon: 'icon-biaoqian',
                text: '派工'
            }, {
                icon: 'icon-qiche',
                text: '救援'
            }, {
                icon: 'icon-53a6f8971e74b',
                text: '维修'
            }],
            row6: [{
                icon: 'icon-renyuan',
                text: '人员管理'
            }, {
                icon: 'icon-cheliang1',
                text: '车辆管理'
            }, {
                icon: 'icon-wendang',
                text: '评价管理'
            }, {
                icon: '',
                text: ''
            }],
            row7: [{
                icon: 'icon-area-chart',
                text: '日常服务报表'
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }],
            row8: [{
                icon: 'icon-tongxunlu1',
                text: '通讯录'
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }, {
                icon: '',
                text: ''
            }]
        }
    },
    mounted() {
        this.foo()
    },
    methods: {
        foo() {
            console.log('foo')
        },
        toClient(index) {
            switch (index) {
                case 0:
                    console.log(0);
                    break;
                case 1:
                    console.log(1);
                    break;
                case 2:
                    console.log(2);
                    // common.toast(index)
                    summer.openWin({
										    id: 'clientVist',
										    url: 'html/clientVist/clientVist.html',
										    pageParam: {
										        name: 'test'
										    }
										});
                    break;
                case 3:
                    console.log(3);
                    break;
            }
        }
    }
})
