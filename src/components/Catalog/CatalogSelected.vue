<template>
	<div>
		<!-- ADD SELECTION CAPACITY-->
		<div class="mini-tab" v-show="!is-Editing">

		
			
		</div>
		<div class="edit-tab" v-show="is-Editing">
			
		</div>
	</div>
</template>

<script lang="ts">

import { Component, Vue,Prop } from 'vue-property-decorator';
import { CatalogItem }from '@/types/types.ts'

@Component({
	name: 'CatalogueSelected'
})

export default class CatalogueSelected extends Vue {
	@Prop() private selected_item!: [ CatalogItem ]
	private isEditing  = false


}
	
</script>

<style>
	
</style>