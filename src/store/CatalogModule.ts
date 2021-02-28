import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { UserInput , CatalogItem } from '@/types/types.ts'

import * as firebase from 'firebase';
import 'firebase/auth';
import '../services/firebaseInit';
import { db } from '../services/db'


@Module({namespaced: true})
export default class CatalogModule extends VuexModule{

	//State for the CatalogModule

	/**Getters for the**/

	get currentCatalog(){
		return 0
	}

	/**Mutators**/
	@Mutation
	GET_CATALOG(){
		return 0
	}

	@Mutation
	PAGINATE_CATALOG(){
		return 0
	}


	/**Action**/

	@Action
	async getCatalog(){
		return 0
	}

	@Action
	async paginateCatalog(){
		return 0
	}

	@Action
	async deleteItem(){
		return 0
	}


	@Action
	async addItem(){
		return 0

	}

	@Action
	async editItem(){
		return 0
	}

	


}