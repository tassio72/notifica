<template>
  <div id="app">
    
    
    <router-view name="menu"/> 

    <router-view/>
  
    
    
  </div>
</template>

<script>


import Consumer from './components/consumer/Consumer.vue'

export default {
 
  
 
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
 
}

</style>
