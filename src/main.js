import Vue from 'vue';
import App from './App.vue';

const app = new Vue({
	render: h => h('div', {
		attrs: {id: 'app'},
	}, [h(App)]),
});

app.$mount('#app');
