<template>
  <div class="explorer-3d">
3d {{path}}
  </div>
</template>

<script>
  export default {
    name: 'Explorer3D',
    computed:{
      path(){
        return this.$store.state.vue2_solid_store.path
      }
    }

  }
</script>

<style lang="css" scoped>
  .explorer-3d {

  }
</style>
