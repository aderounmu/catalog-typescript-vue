<template>
	<b-container fluid>
		<b-row>
			<b-col>
				<div class="Title">{{titleText}}</div>
				<div class="Body">{{bodyText}}</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
	name: 'CatalogHeading'
})
export default class CatalogHeading extends Vue {
	@Prop() private titleText!: string;
	@Prop() private bodyText!: string;  
}
</script>

<style type="scss" scoped>

.Title{
    text-align: center;
    margin:auto;
}

.Body{
	text-align:center;
	margin: auto;
}
	
</style>