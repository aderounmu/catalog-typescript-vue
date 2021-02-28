
//User Module for Authenication and user management 

import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { UserInput } from '@/types/types.ts'

import * as firebase from 'firebase';
import 'firebase/auth'
import '../services/firebaseInit'

@Module({namespaced: true})
export default class UserModule extends VuexModule{

	public currentUser: {} | null = null
	public isLoggedin = false
	public authError: {} | null = null
	public isAuthError = false

	//mutations to change login and user states
	@Mutation
	LOGIN_MUTATION(payload){
		this.isLoggedin = true//testing getters
		this.currentUser = payload
	}

	@Mutation
	AUTHERROR_MUTATION(payload){
		this.authError = payload;
		this.isAuthError = true;
	}

	@Mutation
	REMOVE_AUTHERROR(){
		this.isAuthError = false;
		this.authError = null
	}

	@Mutation
	LOGOUT_MUTATION(){
		this.isLoggedin = false
			
	}


	//actions to change login and use state 
	@Action({rawError: true})
	async loginUser(payload: UserInput): void{

		let user 
		try{
			user = await firebase.auth().signInWithEmailAndPassword(payload.email,payload.password);
		}catch(err){
			this.context.commit("AUTHERROR_MUTATION",err)
			throw new Error(`Authenication Error- ${err.message}`)
			console.log(err)
		}
		const Cuser = firebase.auth().currentUser
		this.context.commit('REMOVE_AUTHERROR')
		this.context.commit("LOGIN_MUTATION",Cuser)
		console.log(Cuser.email)
		console.log('loggined in ......')
	}



	@Action
	async registerUser(payload: UserInput){
		let user
		try{
			user = await firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password);
		}catch(err){
			this.context.commit("AUTHERROR_MUTATION",err)
			throw new Error(`Authenication Error- ${err.message}`)	
		}
		user = firebase.auth().currentUser
		this.context.commit('REMOVE_AUTHERROR')
		this.context.commit("LOGIN_MUTATION",user)
		console.log(user)
		console.log('Registered ......')
	}

	@Action
	async logoutUser(){

		let logout
		try{
			logout =  await firebase.auth().signOut()
		}catch(err){
			this.context.commit("AUTHERROR_MUTATION",err)
			throw new Error(`Authenication Error- ${err.message}`)	
		}
		this.context.commit('REMOVE_AUTHERROR')
		this.context.commit('LOGOUT_MUTATION')
		console.log(this.isloggedin)

	}

	//getters for authication actions

	get user(){
		return this.currentUser;
	}

	get isloggedin(){
		return this.isLoggedin;
	}

	get autherror(){
		if(this.authError == null || this.authError == {}) return this.authError;
		else return this.authError.message
	}

	get isautherror(){
		return this.isAuthError;
	}

}