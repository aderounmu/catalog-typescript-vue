<template>
	<div class="CatalogItem-container">
		<div class="CatalogItem-content">
			<div class="CatalogItem-image-container">
				<img class="CatalogItem-image" :src="require(`../../assets/${item.mediaLink}`)" alt="shop-item"/>
			</div>
			<div class="CatalogItem-details-container mt-3">
				<div class="CatalogItem-name mt-1"><div>{{item.name}}</div></div>
				<div class="CatalogItem-price mt-1"><div>N{{item.price}}</div></div>
				<div class="CatalogItem-colors-container mt-1">
					<ul class="CatalogItem-colors ">
						<li class="CatalogItem-colors-item" v-for="color in item.colors" :key="item.colors.indexOf(color)"><div :style="colorStyle(color)"></div></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="CatalogItem-button-container">
			<button class="CatalogItem-button">
				<b-icon icon="plus"></b-icon>
			</button>
		</div>
	</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { CatalogItem }from '@/types/types.ts'

@Component({
	name: 'CatalogCard'
})
export default class CatalogCard extends Vue {
	@Prop() private item!: CatalogItem;	

	colorStyle(color: string): object{
		return{

			width: '15px',
			height: '15px',
			borderRadius:'50%',
			backgroundColor:color,

		}
	}

}
	
</script>

<style lang="scss" scoped>
	
	.CatalogItem{
		&-container{
			width:100%;
			position: relative;
			
		}

		// &-content{
			
		// }

		&-image-container{
			width: 100%;
			background-color: #cecece;
			border-radius: 10px;
			overflow:hidden;
		}

		&-image{
			width: 80%;
			margin:auto;
		}

		&-details-container{
			text-align:left;

		}
		&-name{

			height: 30px;
			overflow: Hidden;
			font-size: 100%;
			font-family: Roboto;
			background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
		}

		&-price{

			height: auto;
			overflow: Hidden;
			font-size: 14px

		}

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

		&-button-container{
			position: absolute;
			bottom: 120px;
			right: 5px;

		}

		&-button{

			border: none;
			outline: none;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			font-size: 15px;

		}

	}

	@media only screen and (min-width: 768px){
		.CatalogItem{
			&-button-container{
				position: absolute;
				bottom: 125px;
				right: 10px;
			}

			&-button{

				border: none;
				outline: none;
				width: 32px;
				height: 32px;
				border-radius: 50%;
				font-size: 21px;

			}
		}

	}

</style>