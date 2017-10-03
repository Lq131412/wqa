// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';
import goods from './components/goods/goods';
Vue.config.productionTip = false;
Vue.use(VueRouter);

let app = Vue.extend(App);

let router1 = new VueRouter();

router1.map({
	'/goods': {
		component: goods
	}
});

router1.start(app, '#app');
