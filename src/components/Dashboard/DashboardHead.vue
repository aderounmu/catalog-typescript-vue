<template>
    <div class="DashNav">  
        <b-row  class="mx-0 my-3">
            <b-col cols="12" md="6" class="mx-0 my-3">
                <div class="h3">Welcome Abby's that </div>
            </b-col>
            <b-col cols="12" md="6" class="mx-0 my-3">
                <b-row align-h="center" class="mx-auto">
                    <b-col class="px-0 mx-md-2 mx-lg-0" cols="6" sm="4">
                        <b-button @click="$emit('Add-new',null)" class="dashboard-btn shadow px-3" variant="info" size="sm" ><span class="mr-1"><b-icon icon="plus-circle-fill"></b-icon></span>  Add an Item</b-button>
                    </b-col>
                    <b-col class="px-0 mx-md-2 mx-lg-0" cols="6" sm="4">
                        <router-link  to="/catalog" class="btn shadow dashboard-btn btn-info btn-sm px-3">
                            <span class="mr-1"><b-icon icon="eye-fill"></b-icon></span> View to Catalog
                        </router-link>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts">

import {Component , Vue} from 'vue-property-decorator'

@Component({
    name: 'DashboardHead'
})
export default class DashboardHead extends Vue{








}

</script>

<style lang="scss">

.dashboard{
    &-btn{
        border-radius: 0px;
    }
}

</style>