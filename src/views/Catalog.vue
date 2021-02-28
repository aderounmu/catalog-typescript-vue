<template>
	<div>
		<div class="Heading my-5 pt-5">
			<CatalogHeading
				titleText="Welcome to Abby Apparel Catalog"
				bodyText = "Lorrems spsnndn c"
			/>
		</div>
		<div class="filters-section">
			<CatalogFilters/>
		</div>
		<div class="catalog-section">
			<div class="catalog-list px-3 px-sm-5">
				<b-row class="w-100 mx-0">
					<b-col
					cols="6"
					md="4"
					lg="3"
					class="catalog-list-col"
					v-for="n in numberOfItems"
					:key="n">
						<CatalogCard
						:item="shopitems[0]"
						></CatalogCard>	
					</b-col>	
				</b-row>
			</div>

			<!-- <div v-show="getdataMore">
				<b-row>
					<b-col>
						L
					</b-col>
				</b-row>
			</div> -->
			<div class="mb-5">
				<b-row align-h="center">
					<b-col cols="12">
						<b-button 
						variant="info"
						class="dashboard-btn"
						size="lg"
						@click="addMore"
						>Load More</b-button>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>


<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import CatalogHeading from '@/components/Catalog/CatalogHeading.vue';
import CatalogFilters from '@/components/Catalog/CatalogFilters.vue';
import CatalogCard from '@/components/Catalog/CatalogCard.vue';
import {CatalogItem} from '@/types/types.ts'


@Component({
	name: 'Catalog',
	components:{
		CatalogHeading,
		CatalogFilters,
		CatalogCard
	},
	metaInfo(){
		return {
			title: this.user as string
		}
	}
})
export default class Catalog extends Vue {
	//My dump state ......
	public user = "Abby Apparel"
	public numberOfItems = 10
	private shopitems: Array<CatalogItem> = [
		{
			name : 'Orange-color whatever' as string,
			mediaLink: "testimage.png" as string,
			price: 25000 as number,
			colors: [
				'#000000',
				'Pink',
				'Green',
			]
		},

	]

	addMore(): void{
		this.numberOfItems = this.numberOfItems + 10
	}
}

</script>

<style type="css">

.filters-section{
	background: #cecece;
}

.catalog-list-col:nth-child(2n){
	padding:0px 0px 0px 7px;
}
.catalog-list-col:nth-child(2n-1){
	padding: 0px 7px 0px 0px;
}
@media only screen and (min-width: 768px){
	.catalog-list-col:nth-child(n){
		padding:0px 7px 0px 7px;
	}
}
</style>