<template>
	<div>
		<ValidationObserver>
			<div class="login-Container shadow py-3">
				<div class="login-item">
					<b-row align-h="center">
						<b-col cols="10" class="mx-sm-3 my-3">
							<div v-show="isauthError" class="mt-2 Auth-errorMessage">
								<b-alert v-model="showerror" variant="danger" dismissible>{{authError}}</b-alert>
							</div>
							<div class="my-3 w-sm-75 mx-auto">
								<ValidationProvider v-slot="{errors , valid}" rules="required|email">
									<b-form-input :state="errors[0] ? false : (valid ? true : null)" class="auth-item py-sm-4" v-model="email" type="email" placeholder="email"></b-form-input>
									<b-form-invalid-feedback class="mt-2 text-left auth-item-hint">{{errors[0]}}</b-form-invalid-feedback >
								</ValidationProvider>
							</div>
							<div class="my-3 w-sm-75 mx-auto">
								<ValidationProvider v-slot="{errors, valid}" rules="required|min:8" vid="password">
									<b-form-input :state="errors[0] ? false : (valid ? true : null)" class="auth-item py-sm-4" v-model="password" type="password" placeholder="password"></b-form-input>
									<b-form-invalid-feedback class="mt-2 text-left auth-item-hint">{{errors[0]}}</b-form-invalid-feedback >
								</ValidationProvider>
							</div>
							<div class="my-3 w-sm-75 mx-auto">
								<ValidationProvider v-slot="{errors, valid}" rules="required|confirmed:password">
									<b-form-input :state="errors[0] ? false : (valid ? true : null)" class="auth-item py-sm-4" v-model="c_password" type="password" placeholder="confirm password"></b-form-input>
									<b-form-invalid-feedback  class="mt-2 text-left auth-item-hint">{{errors[0]}}</b-form-invalid-feedback >
								</ValidationProvider>
							</div>
							<div class="my-3 w-sm-75 mx-auto">
								<b-button :disabled="Registering" @click="Register" variant="info" class="w-100 shadow auth-btn">
									{{Registering ? 'Registering ...': 'Register'}}
								</b-button>
							</div>
							<div class="register mt-4">
								<div>Have an Account ?  <span @click="$emit('change-LoginTab')" class="register-link text-info auth-Link"> Log in </span></div>
							</div>
						</b-col>
					</b-row>
				</div>
			</div>
		</ValidationObserver>
	</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver , ValidationProvider} from 'vee-validate'; //to check for validation
import {namespace} from 'vuex-class'
import { UserInput} from '@/types/types.ts'

const user = namespace('UserModule')

@Component({
	name: 'Register',
	components:{
		ValidationObserver,
		ValidationProvider
	}
})
export default class Register extends Vue {
	
	public email = ''
	public password = ''
	public c_password = ''
	public showerror = false
	public Registering = false

	@user.Getter('isautherror')
	public isauthError!: boolean

	@user.Getter('autherror')
	public authError!: string | null 

	@user.Action('registerUser')
	public registerAction!: (payload: UserInput) => any

	public Register(): void{
		this.Registering = true
		this.registerAction({email: this.email, password: this.password})
		.then(user => {
			this.$router.push({path:'/dashboard'})
			this.Registering = false
		})
		.catch(err => {
			this.showerror = true
			this.Registering = false
			console.log(err)
		})
	}




}
	
</script>

<style type="scss">
	
</style>