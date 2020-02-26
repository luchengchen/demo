<template>
  <div >
    <router-view title="$router.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
      }
    },
    created:function(){
    },
    methods:{
      history:function(){
          history.go(-1);
      },
  },  
   mounted() {
    
    }
 }
</script>

<style>

</style>
