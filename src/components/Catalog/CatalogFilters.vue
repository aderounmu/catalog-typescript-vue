<template>
	<b-container fluid>
		<b-form-group>
			<b-form-tags class="border-0 filter-item" v-model="selected_options" size="lg" add-on-change >
				<template v-slot="{tags, inputAttrs,inputHandlers,removeTag,addTag}">	
					<b-row>
						<b-button 
						@click="filters_visible = !filters_visible" 
						variant="light" 
						class="w-100 filter-item Collapse-button"
						:class="[filters_visible?'collapse-filter-button':' ']"
						>Filter & Sort</b-button>
						<div id="Filter-collapse" class="w-100 Filter-collapse" :class="[filters_visible?'collapse-filter': 'non-collapse-filter']">
							<b-row>
								<b-col sm>
									<!-- Sorting -->
									<b-dropdown
									id="sort-filter"
									ref="sortfilterdropdown"
									text="Sort"
									variant="light"
									block 
									class="m-2 filter-item"
									menu-class="w-100"
									>
										<b-dropdown-form>
											<b-form-select
											v-bind="inputAttrs"
											v-on="inputHandlers"
											v-on:change="closeDropDown"
											v-model="selected_sort_option"
											:options="sort_options"
											></b-form-select>
										</b-dropdown-form>
									</b-dropdown>
								</b-col>
								<b-col sm>
									<!-- Filter by color -->
									<b-dropdown
									block 
									id="color-filter"
									ref="colorfilterdropdown"
									variant="light"
									text="Color"
									menu-class="w-100"
									class="m-2 filter-item"

									>
										<b-dropdown-form>
											<b-form-group>
												<b-form-checkbox
												@change="addTag"
												v-for="option in color_options"
												:key="option.value"
												:value="option.value"
												v-model="selected_color_options"
												stacked
												>
												{{option.text}}
												</b-form-checkbox>
											</b-form-group>
										</b-dropdown-form>
									</b-dropdown>
								</b-col>
								<b-col sm>
									<!-- Filter by price -->
									<b-dropdown
									id="price-filter"
									ref="pricefilterdropdown"
									variant="light"
									text="Price "
									block 
									menu-class="w-100"
									class="m-2 filter-item"
									>
										<b-dropdown-form>
											<div> Starting price :
												<b-input-group
													size="sm"
													prepend="N"
													append=".00"
												>
													<b-form-input></b-form-input>
												</b-input-group>
											</div>
											<div> Ending price :
												<b-input-group
													size="sm"
													prepend="N"
													append=".00"
												>
													<b-form-input></b-form-input>
												</b-input-group>
											</div>
										</b-dropdown-form>
									</b-dropdown>
								</b-col>
							</b-row>	
						</div>
					</b-row>
					<b-row>
						<ul v-if="tags.length > 0" class="list-inline d-inline-block m-2">
							<li v-for="tag in tags" :key="tag" class="list-inline-item">
								<b-form-tag
								@remove="removeOptionTag(tag,removeTag)"
								:title="tag"
								>
									{{tag}}
								</b-form-tag>	
							</li>
						</ul>
					</b-row>
				</template> 
			</b-form-tags>
		</b-form-group>
	</b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	name: 'CatalogueFilters'
})

export default class CatalogueFilters extends Vue {
	//@Prop() private titleText!: string;
	//@Prop() private bodyText!: string; 

	private selected_options: Array<string | number> = ['Red','White']

	private selected_sort_option: [] | null =  null

	private sort_options: Array<object> = [
		{value: null , text:'Select an option'},
		{value:'New',text:"What's new"},
		{value:'Low',text:"Price low to high"},
		{value:'High',text:"Price low to high"},
	]

	private color_options: Array<object> = [
		{value:'Orange',text:"orange"},
		{value:'Green',text:"Green"},
		{value:'Blue',text:"Blue"},
		{value:'Yellow',text:"Yellow"},
	]

	private selected_color_options = []

	private filters_visible = false

	closeDropDown(): void {
		this.$refs.pricefilterdropdown.hide(true);
		this.$refs.colorfilterdropdown.hide(true);
		this.$refs.sortfilterdropdown.hide(true);
	}

	//action to remove tag 

	removeOptionTag(tag: any,removeTag: any): void{
		//veux action to remove from
		removeTag(tag) 
	}
	


}
</script>

<style type="scss">
.Collapse-button{
	display:none;
}

@media only screen and (max-width: 767.98px){
	/*for small screens*/
	/*#Filter-collapse{
		display: none;  use when using collapse
	}*/
	.Filter-collapse{
		display: none;
	}
	.Collapse-button{
		display:block;
	}
}

.collapse-filter{
	display: block;
}
.non-collapse-filter{
	display: none;
}

@media only screen and (min-width:768px){
	/*for large screens and medium screens*/
	.collapse-filter{
		display: block;
	}
	.non-collapse-filter{
		display: block;
	}

}

.filter-item {
	background:none !important ; 
	border:none !important;
	color:black;
}

.dropdown-toggle {
	background: none ;
	color:black;
}

.b-form-tags.focus{
	background: none;
}

.dropdown-menu{
	background:#f8f9fa;
}
.collapse-filter-button{
	/* add if necessary */
}

</style>