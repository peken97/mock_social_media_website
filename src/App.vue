<template>
  
  <div id="app" class="d-flex flex-column">
    <div class="mb-5">
      <Header v-if="current_page != 'SignIn'"/>
   </div>
    <SignUpForm v-on:changePage="changePage($event)" v-if="current_page == 'SignIn'"/>
    <HomeFeed v-on:changePage="changePage($event)" v-if="current_page == 'Home'"/>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import SignUpForm from './components/SignUpForm'
import HomeFeed from './components/HomeFeed'
import Footer from './components/Footer'
import Data from './components/data'


export default {
  name: 'App',
  components: {
    Header,
    SignUpForm,
    HomeFeed,
    Footer
  },
  data(){
    return{
      current_page: "SignIn"
    }
  },
  mounted: function(){
    let user = new Data.user();
    console.log(user)
  },
  methods: {
    changePage: function(data){
      this.current_page = data;
      
     
    }
  },
  mixins: [Data]
}
</script>

<style>
  body{
    background-color: rgb(247, 247, 247);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 200px;
  
  
}
#footer{
  position: fixed;
  bottom: 0;
  height: 50px;
}
</style>
