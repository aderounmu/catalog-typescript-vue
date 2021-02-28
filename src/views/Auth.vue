<template>
	<div class="pt-3">
		<b-container class="my-5">
			<b-row class="mx-auto" align-h="center">
				<b-col class="mx-sm-3" sm="12" md="8" lg="6">
					<div class="mx-auto">
						<b-row>
							<b-col>
								<div class="auth-title h2 text-left" v-if="isLoginTab">Login</div>
								<div class="auth-title h2 text-left" v-if="isRegisterTab">Register</div>
								<div class="auth-title h2 text-left" v-if="isForgotTab">Forgot Password</div>
							</b-col>
						</b-row>
					</div>
					<div class="Login" v-if="isLoginTab">
						<Login
						@change-RegisterTab="changeRegisterTab"
						@change-ForgotTab="changeForgotTab"
						></Login>
					</div>
					<div class="Register" v-if="isRegisterTab">
						<Register
						@change-LoginTab="changeLoginTab"
						></Register>
					</div>
					<div class="Forgot" v-if="isForgotTab">
						<Forgot></Forgot>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script lang="ts">
	
import { Component, Vue, Watch } from 'vue-property-decorator';
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import Forgot from '@/components/Auth/Forgot.vue'


@Component({
	name: 'Auth',
	components:{
		Register,
		Login,
		Forgot
	}
})
export default class Auth extends Vue {
	
	public isLoginTab = true
	public isRegisterTab = false
	public isForgotTab = false

	created(){
		this.changeTab()
	}

	//watching route to update when is changes

	@Watch('$route',{ immediate: true, deep: true})
	changeToCorrView(newVal: any ,oldVal: any){
		//to display 
		this.changeTab()
	}

	//Group three below into a function
	changeLoginTab(): void{
		this.$router.push({path:'/auth',query:{type:'Login'}})
	}

	changeForgotTab(): void{
		this.$router.push({path:'/auth',query:{type:'Forgot'}})
	}

	changeRegisterTab(): void{
		this.$router.push({path:'/auth',query:{type:'Register'}})
	}
	

	changeTab(){
		switch (this.$route.query.type) {
			case 'Login':
				this.isLoginTab = true
				this.isRegisterTab = false
				this.isForgotTab = false
				break;
			case 'Register':
				this.isLoginTab = false
				this.isRegisterTab = true
				this.isForgotTab = false
				break;
			case 'Forgot':
				this.isLoginTab = false
				this.isRegisterTab = false
				this.isForgotTab = true
				break;
			default:
				this.changeLoginTab();
				break;
		}
	}


}


</script>

<style type="scss" scoped>
.div{
	color: black;
}
	
</style>