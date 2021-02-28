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
							<div @click="$emit('change-ForgotTab')" class="mt-2 text-right text-info forgot-password auth-Link">Forgot Password</div>
							<div class="my-3 w-sm-75 mx-auto">
								<b-button :disabled="Loginning" @click="Login" variant="info" class="w-100 shadow auth-btn">
									{{Loginning? 'Logining in ...': 'Login'}}
								</b-button>
							</div>
							<div class="register auth-Link mt-4">
								<div>Not registered ?  <span @click="changeRegistertab" class="register-link text-info"> Create an account </span></div>
							</div>
						</b-col>
					</b-row>
				</div>
			</div>
		</ValidationObserver>
	</div>
</template>

<script lang="ts">

import { Component, Vue, Emit  } from 'vue-property-decorator';
import { ValidationObserver , ValidationProvider} from 'vee-validate'; //to check for validation
import { UserInput} from '@/types/types.ts'
import {namespace} from 'vuex-class'


const user = namespace('UserModule')

@Component({
	name: 'Login',
	components:{
		ValidationObserver,
		ValidationProvider
	}
})
export default class Login extends Vue {

	public email = "" 
	public password = ""
	public showerror = false
	public Loginning = false

	//using emit internally
	
	@Emit('change-RegisterTab')
	changeRegistertab(){
		return null;
	}

	@user.Getter('isautherror')
	public isauthError!: boolean

	@user.Getter('autherror')
	public authError!: string | null 

	@user.Action('loginUser')
	public loginAction!: (payload: UserInput) => any

	public Login(): void{
		this.Loginning = true
		this.loginAction({email: this.email, password: this.password})
		.then(user => {
			this.$router.push({path:'/dashboard'})
			this.Loginning = false
			//console.log(user)

		})
		.catch(err => {
			this.showerror = true
			this.Loginning = false
			console.log(err)
		})
		.then(res =>{
			this.password = ""
		})
	}

}
	
</script>

<style lang="scss">


.auth{

	&-item{
	border-radius: 0px;
	background-color:rgb(223, 223, 223); 
	border: none;
	
	}

	&-btn{
		border-radius: 0px;
	}
	&-Link{
		cursor: pointer
	}
}


@media only screen and (max-width: 767.98px){
	/*for small screens*/
	
	.register{
		font-size: 14px;
	}

	.forgot-password , .auth-item-hint{
		font-size:14px;
	}
	
}
.Auth-errorMessage{
	font-size:14px;
}

</style>