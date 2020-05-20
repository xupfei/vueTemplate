import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import  "./style/common.scss";
import api from "./api/index";
import utils from "./utils/index";
Vue.use(ElementUI, { size: 'small' });


Vue.prototype.$api = api;
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app');
