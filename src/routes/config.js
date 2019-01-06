export default {
     menus: [
         //菜单相关路由
         { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard'},
         {
             key: '/app/ui', title: 'UI', icon: 'scan',
             subs: [
                 { key: '/app/ui/buttons', title: '按钮', component: 'Buttons' }
             ],
         }
     ],
     others: []  //非菜单相关路由
};