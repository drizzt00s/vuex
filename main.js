import Vue from 'vue';
import store from './vuex/store';
import Root from './components/root.vue';

new Vue({
	store,
	el: 'body',
	components: { Root }
});
