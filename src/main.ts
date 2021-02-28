import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './helpers/validation.ts'

import firebase from 'firebase'
import 'firebase/auth'
import './services/firebaseInit'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


let app;

firebase.auth().onAuthStateChanged( user => {
	if(!app){
		app = new Vue({
				router,
				store,
				render: h => h(App),
			}).$mount('#app')
	}
})


