<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
   *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 31.25vw;
  }
  a{
        text-decoration:none;
    }
  a, h2, li, ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1{
    font-weight: 100;
  }
</style>
