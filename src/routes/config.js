export default {
     menus: [
         //菜单相关路由
         { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard'},
         {
             key: '/app/ui', title: 'UI', icon: 'scan',
             subs: [
                 { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' },
                 { key: '/app/ui/banners', title: '轮播图', component: 'Banners'},
                 { key: '/app/ui/icons', title: '图标', component: 'Icons'},
                 { key: '/app/ui/spins', title: '加载中', component: 'Spins'},
                 { key: '/app/ui/modals', title: '对话框', component: 'Modals'},
             ],
         }
     ],
     others: []  //非菜单相关路由
};