/**
 * @Date 2019-01-06
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import Dashboard from './dashboard/Dashboard';
import Buttons from './ui/Buttons';
import Banners from './ui/banners';
import Icons from './ui/Icons';
import Spins from './ui/Spins';
import Modals from './ui/Modals';
import Notifications from './ui/Notifications';
import Tabs from './ui/Tabs';
import Drags from './ui/Draggable';
import Gallery from './ui/Gallery';
import MapUi from './ui/map';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import BasicTables from './tables/BasicTables';
import AdvancedTables from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import Echarts from './charts/Echarts';


const WysiwygBundle = Loadable({ //按需加载富文本配置
       loader: () => import('./ui/Wysiwyg'),
       loading: Loading,
});

export default {
    Dashboard,
    Buttons,
    Banners,
    Icons,
    Spins,
    Modals,
    Notifications,
    Tabs,
    WysiwygBundle,
    Drags,
    Gallery,
    MapUi,
    BasicAnimations,
    ExampleAnimations,
    BasicTables,
    AdvancedTables,
    AsynchronousTable,
    Echarts
}