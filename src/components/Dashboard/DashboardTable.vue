<template>
    <div>
        <b-container>
            <b-row align-h="between">
                <b-col cols="12" md="5" class="my-2">
                    <span>showing {{(perPage * currentPage) - (perPage - 1) }} - {{ perPage * currentPage }} of {{numRows}}</span>
                    <span>
                        <b-form-select v-model="perPage" :options="selectOptions" size="sm" class="w-25 ml-3">
                        </b-form-select>
                    </span>
                </b-col>
                <b-col cols="12" md="5" class="my-2">
                   <div class="overflow-auto">
                        <b-pagination
                        class="mx-5"
                        align="fill"
                        size="sm"
                        v-model="currentPage"
                        :total-rows="numRows"
                        :per-page="perPage"
                        aria-controls="dashboardTable"
                        ></b-pagination>
                   </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <!--  Table --> 
                    <b-table 
                        id="dashboardTable"
                        small responsive="sm"
                        :per-page="perPage"
                        :current-page="currentPage" 
                        :fields="TableField" 
                        headVariant="light"
                        :items="item">
                        <template v-slot:cell(mediaLink)="data">
                            <div class="dashboard-table-image-container">   
                                <img class="dashboard-table-image w-100" :src="require(`../../assets/${data.item.mediaLink}`)" alt="shop-item"/>    
                            </div>
                        </template>
                        <template v-slot:cell(Edit)="data">
                            <div>
                                <b-dropdown class="dashboardtable-Edit-button" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                                    <template v-slot:button-content>
                                        <b-icon icon="three-dots-vertical"></b-icon>
                                    </template>
                                    <b-dropdown-item-button @click="$emit('Edit-item',data.item)"> <span class="text-info"><b-icon icon="pencil-square"></b-icon></span> Edit</b-dropdown-item-button>
                                    <b-dropdown-item-button @click="$emit('Delete-item',data.item)"> <span class="text-info"> <b-icon icon="trash"></b-icon></span> Delete</b-dropdown-item-button>
                                </b-dropdown>
                            </div>
                        </template>
                    </b-table>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component , Vue, Prop} from 'vue-property-decorator'
import {CatalogItem} from  '@/types/types'
@Component({
    name:'DashboardTable'
})

export default class DashboardTable extends Vue {

    //props
    @Prop() private item!: CatalogItem;	

    ///data
    public currentPage = 1;
    public perPage = 10;
    public selectOptions = [

        // {value: 5, text: 5},
        {value: 10, text: 10},
        // {value: 15, text: 15},
        {value: 20, text: 20},
        // {value: 25, text: 25},
        {value: 30, text: 30},

    ]

    
    public TableField = [
        'id',
        {
            key: 'mediaLink',
            label:'Image',
            sortable: false , 
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true , 
        },
        {
            key: 'price',
            label: 'Price',
            sortable: true , 
        },
        {
            key: 'features',
            Label: 'Features',
            sortable: false,
        },
        {
            key:'created_at',
            label: 'Date Created',
            sortable: true,
        },
        {
            key: 'Edit',
            label: ' ',
            sortable: false,
        },
    ]

    get numRows(): number{
        return this.item.length
    }



}


</script>

<style lang="scss">

.dashboard-table-image-container{
    height: 100px;
    width: 100px;
    overflow: hidden;
}

.dashboardtable-Edit-button button{

    color: #17a2b8 ;

}
    
</style>