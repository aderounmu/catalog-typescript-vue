<template>
	<div>
		<div class="login-Container shadow">
			<div class="login-item">
				<b-row align-h="center">
					<b-col cols="10" class="mx-3">
						<div class="my-5">
							Enter the <b>email address</b> that you used to register. We'll send you an email to
							to reset your password 
						</div>
						<div class="my-4">
							<b-form-input class="auth-item" v-model="email" type="email" placeholder="email"></b-form-input>
						</div>
						<div class="mt-3 mb-5 w-sm-75 mx-auto">
							<b-button class="w-100 shadow auth-btn" variant="info">Send</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';


@Component({
	name: 'Forgot'
})
export default class Forgot extends Vue {

	private email = ''


}
	
</script>

<style type="scss">


</style>