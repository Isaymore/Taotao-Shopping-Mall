import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/less/base.less'
// 一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法
import Vant from 'vant';
// 引入组件样式
import 'vant/lib/index.css';


createApp(App).use(store).use(router).use(Vant).mount('#app')
