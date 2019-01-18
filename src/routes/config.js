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
                 { key: '/app/ui/notifications', title: '消息通知', component: 'Notifications'},
                 { key: '/app/ui/tabs', title: '标签页', component: 'Tabs'},
                 { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle'},
                 { key: '/app/ui/drags', title: '拖拽', component: 'Drags'},
                 { key: '/app/ui/gallery', title: '画廊展示', component: 'Gallery'},
                 { key: '/app/ui/map', title: '地图', component: 'MapUi'},
             ],
         },
         {
             key: '/app/animation', title: '动画', icon: 'rocket',
             subs: [
                 { key: '/app/animation/basicAnimations', title: '基础动画', component: 'BasicAnimations'},
                 { key: '/app/animation/exampleAnimations', title: '示例动画', component: 'ExampleAnimations'},
             ]
         },
         {
            key: '/app/table', title: '表格', icon: 'copy',
            subs: [
                { key: '/app/table/basicTables', title: '基础表格', component: 'BasicTables'},
                { key: '/app/table/advancedTables', title: '高级表格', component: 'AdvancedTables'},
                { key: '/app/table/asynchronousTable', title: '异步表格', component: 'AsynchronousTable'}
            ]
        },
        {
            key: '/app/chart', title: '图表', icon: 'area-chart',
            subs: [
                { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts'},
                
            ]
        },

     ],
     others: []  //非菜单相关路由
};