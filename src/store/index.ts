import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from '@/store/UserModule.ts'
import CatalogModule from '@/store/CatalogModule.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
	UserModule, 
	CatalogModule,
  }
})
