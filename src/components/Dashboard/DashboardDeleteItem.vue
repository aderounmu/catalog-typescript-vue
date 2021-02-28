<template>
	<b-overlay :show="show" no-wrap>
		<template v-slot:overlay>
			<div v-if="processing">
				
			</div>
			<div v-else
			ref="dialog"
			role="dialog"
			aria-modal="false"
			aria-labelledby="form-confirm-label"
			class="text-center p-2 "
			>
				<p class="h5"><strong>Are you sure ?</strong></p>
				<p>This item cannot not be recovered once deleted</p>
				<b-row align-h="center">
					<b-col cols="12">
						<b-button variant="success" class="btn-sm mx-2" @click="$emit('close-delete')">Cancel</b-button>
						<b-button variant="danger" class=" btn-sm mx-2">OK</b-button>
					</b-col>	
				</b-row>
			</div>
		</template>
	</b-overlay>
</template>

<script lang="ts">
	import {Component , Vue , Prop } from 'vue-property-decorator'
import { CatalogItem } from '@/types/types.ts'

@Component({
    name: 'DashboardDeleteItem'
})
export default class DashboardDeleteItem extends Vue{

	@Prop() item!: CatalogItem; 
	@Prop() show?: boolean;
	public processing = false ;

}
</script>
