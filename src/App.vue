<template>
  <div id="app">
    <Navigation/>
    <div class="app-content"><router-view/></div>
  </div>
</template>


<script lang="ts">
  
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import {namespace} from 'vuex-class'


import firebase from 'firebase';
import 'firebase/auth';

const user = namespace('UserModule')


@Component({
  name: 'App',
  metaInfo:{
    title:'myCatalog',
    titleTemplate:'Catalog | %s'
  },
  components:{
    Navigation
  }
})
export default class App extends Vue {

  @user.Mutation('LOGIN_MUTATION')
  public setUser!: (payload) => any

    //this is make userlogin state is true when user refreshes page 
  created(){
    if(firebase.auth().currentUser){
      this.setUser(firebase.auth().currentUser)
    }
  }
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  .app-content{
    margin-top: 4rem;
  }
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
