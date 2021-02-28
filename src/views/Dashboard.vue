<template>
	<div :class="[ isDeleteOpen || isFormOpen ? 'dashboard-overlay_isOpen': '' ]" class="position-relative">
		<b-container fluid class="px-0">
			<b-row>
				<!-- <b-col cols="12" md="2" class="mx-0">
					<div class="dashboard-side-bar bg-info">
						Dashboard sidebar / heaing
						<DashboardNav></DashboardNav>		
					</div>
				</b-col> -->
				<b-col>
					<div>
						<!-- Content -->
						<DashboardHead @Add-new="openForm" ></DashboardHead>
					</div>
					<div>
						<DashboardTable 
						:item="ReturnHundred"
						@Edit-item="openForm"
						@Delete-item="openDelete"
						></DashboardTable>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<DashboardAddForm v-if="isFormOpen" :show="isFormOpen" isEdit="false" :Updateitem="editItem" @close-dashboardform="closeForm"></DashboardAddForm>
		<DashboardDeleteItem :show="isDeleteOpen" @close-delete="closeDelete"></DashboardDeleteItem>
	</div>
</template>

<script lang="ts">
	
import { Component, Vue } from 'vue-property-decorator';
// import DashboardNav from '@/components/Dashboard/DashboardNav.vue';
import DashboardHead from '@/components/Dashboard/DashboardHead.vue';
import DashboardTable from '@/components/Dashboard/DashboardTable.vue';
import DashboardAddForm from '@/components/Dashboard/DashboardAddForm.vue'
import DashboardDeleteItem from '@/components/Dashboard/DashboardDeleteItem.vue'

import {CatalogItem} from '@/types/types.ts'

@Component({
	name: 'Dashboard',
	components:{
		//DashboardNav,
		DashboardHead,
		DashboardTable,
		DashboardAddForm,
		DashboardDeleteItem
	}
})
export default class Dashboard extends Vue {
	
	public isProjectTab = true;
	public isItemTab = false;
	public isFormOpen = false;
	public isDeleteOpen = false;
	public editItem: null | CatalogItem = null;
	public deleteItem: null | CatalogItem = null;

	public userId: string = this.$route.params.id;
	public openProjectId: string | null = null

	public items: Array<CatalogItem> = [
		{
			name : 'Orange-color whatever',
			mediaLink: "testimage.png",
			price: 25000 ,
			colors: [
				'Red',
				'Pink',
				'Green',
			],
			features: ['Sales 40% off']
		},

	]

	openForm(item): void{
		if(item==null){
			this.editItem = null
			
		}else{
			this.editItem = item
		}
		this.isFormOpen = true;
	}


	closeForm(): void{
		this.isFormOpen = false
		this.editItem = null
	}

	openDelete(item): void{
		this.deleteItem = item ;
		this.isDeleteOpen = true;
	}
	closeDelete(): void{
		this.isDeleteOpen = false;
		this.deleteItem = null
	}
	get ReturnHundred(): Array<CatalogItem>{

		const itemArray: Array<CatalogItem> = [];
		for (let index = 0; index < 100; index++) {
			//const newObject = Object.assign({},this.items[0],{id: index})
			itemArray.push({id: index , ...this.items[0]});
		}
		return itemArray

	}

}


</script>

<style type="scss">

@media only screen and (min-width: 768px){
	/*for large screens and medium screens*/
	.dashboard-side-bar{
		height: 100%; 
		z-index: -3;
		position: fixed;
		top: 0px;
		padding-top:100px;
		/* left: 0px;*/
	}
	
}




.dashboard-overlay_isOpen{
	height: 93vh;
	overflow: hidden;
}


</style>