<template>
	<b-navbar fixed="top" toggleable="md" type="light"  class="shadow-sm my-navigation px-sm-3" >
		<b-navbar-brand href="#" class="Logo">{{logo}}</b-navbar-brand>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item to="/">Home</b-nav-item>
				<b-nav-item to="/about">About</b-nav-item>
				<b-nav-item to="/catalog">Catalog</b-nav-item>
				<b-nav-item to="/auth" v-if="!isloggedin">Login</b-nav-item>
				<b-nav-item-dropdown right v-if="isloggedin">
					<!-- Using 'button-content' slot -->
					<template v-slot:button-content>User</template>
					<b-dropdown-item to="/dashboard" class="text-info">Dashboard</b-dropdown-item>
					<b-dropdown-item @click="logUserOut" class="text-info">
						<span class="mr-1 text-info"><b-icon icon="power"></b-icon></span> Sign Out
					</b-dropdown-item>
					<b-dropdown-item to="/dashboard" class=" text-info">
						<span class="mr-1 text-info"><b-icon icon="gear-fill"></b-icon></span> Settings
					</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script lang="ts">
	
import { Component, Vue, Watch } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import firebase from 'firebase';
import 'firebase/auth'

const user = namespace('UserModule')

@Component({
	name: 'Navigation'
})
export default class Navigation extends Vue {

	public logo = 'MyCatalog'


	// changes Logo depending on route
	@Watch('$route',{ immediate: true, deep: true})
	public ChangeLogo(newVal: any ,oldVal: any): void{

		if(this.$route.name == 'Dashboard'){
			if(firebase.auth().currentUser){
				this.logo = 'User profile picture' //replace this with currentUser profile.picture
			}
		}else if(this.$route.name == 'Catalog'){
			this.logo = 'user image' //replace with image from or using admin auth
			console.log(firebase.auth().currentUser.uid)
		}else{
			this.logo = 'MyCatalog'
		}

	}

	@user.Getter('isloggedin')
	public isloggedin!: boolean

	@user.Action('logoutUser') 
	public logout!: () => any


	public logUserOut(): void{
		this.logout()
		.then(()=>{
			this.$router.push('/auth')
		})
	}

	

  
}

</script>

<style type="css" scoped>

.Logo{

	color: pink !important; 

}
	
.my-navigation{
	background-color: white;
}
</style>