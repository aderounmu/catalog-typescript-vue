<template>
		<b-overlay :show="show" no-wrap class="w-100 dashboardAddForm-overlay">
			<template v-slot:overlay>
				<div class="bg-white shadow mx-4">
					<b-form>
						<b-row class="border-bottom py-2" align-h="between">
							<b-col cols="6" md="5" lg="4" class="align-left">
								<div class="h4 pt-2">{{ isEdit? 'Edit item': 'Add a new item'}}</div>
							</b-col>
							<b-col cols="3">
								<b-button @click="$emit('close-dashboardform')" variant="link" size="lg"><b-icon icon="X"></b-icon></b-button>
							</b-col>
						</b-row>
						<b-row class="mx-4 mt-3">
							<b-col cols="12" class="text-left">

								<!--input for media Link-->
								<b-form-group
								id="Image-group"
								label="Image :"
								label-for="Image"
								>
									<b-form-file
									accept="image/*"
									id="Image"
									size="sm"
									>
										
									</b-form-file>
								</b-form-group>

								<!--input for name -->
								<b-form-group
								id="name-group"
								label="Name :"
								label-for="name"
								>
									<b-form-input
									id="name"
									type="text"
									size="sm"
									v-model="item.name"
									>
										
									</b-form-input>
								</b-form-group>

								<!-- input for price-->
								<b-form-group
								id="price-group"
								label="Price :"
								label-for="price"
								>
									<b-input-group size="sm" prepend="N">
										<b-form-input
										id="price"
										type="text"
										v-model="item.price"
										>
											
										</b-form-input>
									</b-input-group>
								</b-form-group>

								<!--input for description-->
								<b-form-group
								id="description-group"
								label="Description :"
								label-for="description"
								>
									<b-form-textarea
									id="description"
									rows="3"
									v-model="item.description"
									max-rows="6"
									>
										
									</b-form-textarea>
								</b-form-group>

								<!-- input for feature-->
								<b-form-group
								id="features-group"
								label="Features :"
								label-for="features"
								>
									<b-form-tags
									id="Features"
									remove-on-delete
									size="sm"
									v-model="item.features"
									>
										
									</b-form-tags>
								</b-form-group>

								<!--input for available colors-->
								<b-form-group
								id="colors-group"
								label="Colors :"
								label-for="colors"
								>
									<b-form-input
									id="colors"
									type="color"
									size="sm"
									@change="addColor"
									>
										
									</b-form-input>
									<div class="dashboard-color-picker-colors-container mt-3">
										<ul class="dashboard-color-picker-colors ">
											<li class="dashboard-color-picker-colors-item" v-for="color in item.colors" :key="item.colors.indexOf(color)"><div :style="colorStyle(color)"></div></li>
										</ul>
									</div>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row class="border-top py-3" align-h="end">
							<b-col cols="10" md="6">
								<b-button variant="danger" class="mx-2" @click="$emit('close-dashboardform')">Cancel</b-button>
								<b-button variant="info" class="mx-2">{{ isEdit? 'Edit item': 'Add item'}}</b-button>
							</b-col>
						</b-row>
					</b-form>
				</div>
			</template>	
		</b-overlay>
</template>

<script lang="ts">
import {Component , Vue , Prop } from 'vue-property-decorator'
import { CatalogItem } from '@/types/types.ts'

@Component({
    name: 'DashboardAddForm'
})
export default class DashboardAddForm extends Vue{
	@Prop() isEdit!: boolean;
	@Prop() show!: boolean ;
	@Prop() Updateitem?: any | null; 

	public item: CatalogItem = {

		name: '',
		description: '',
		mediaLink:'',
		price: 0,
		colors: [],
		features: [],
	}

	mounted(){
		if(this.Updateitem != null){
			this.item = this.Updateitem
		}
	}

	colorStyle(color: string): object{
		return{

			width: '20px',
			height: '20px',
			borderRadius:'50%',
			backgroundColor:color,

		}
	}

	addColor(e): void{
		this.item.colors.push(e)
	}




}
	
</script>

<style lang="scss" >
.dashboard-color-picker{
	&-colors-container{

			height: auto;
			overflow: Hidden;

		}

		&-colors{
			display: inline-block;
			padding: 0px;
		}

		&-colors-item{
			display: inline-block;
			text-decoration: none;
			text-align:left;
			margin-right: 10px;
		}

}

.dashboardAddForm-overlay .position-absolute:nth-child(2){
	width: 50% !important;
}

@media only screen and (max-width: 991.98px){
	.dashboardAddForm-overlay .position-absolute:nth-child(2){
		width: 75% !important;
	}
}

@media only screen and (max-width:767.9px){
	.dashboardAddForm-overlay .position-absolute:nth-child(2){
		width: 100% !important;
	}
}

	
</style>