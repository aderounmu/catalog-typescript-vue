<template>
    <div class="DashNav">  
        <b-row>
            <b-col cols="6" md="12" class="mx-0 my-3">
                <div class="text-white">Projects</div>
            </b-col>
            <b-col cols="6" md="12" class="mx-0 my-3">
                <div class="text-white">Items</div>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts">

import {Component , Vue} from 'vue-property-decorator'

@Component({
    name: 'DashboardNav'
})
export default class DashboardNav extends Vue{



}

</script>

<style lang="scss" scoped>

</style>