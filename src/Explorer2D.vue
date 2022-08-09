<template>
  <div class="explorer-2d">
    2d {{path}}
  </div>
</template>

<script>
export default {
  name: 'Explorer2D',
  computed:{
    path(){
      return this.$store.state.vue2_solid_store.path
    }
  }

}
</script>

<style lang="css" scoped>
.explorer-2d {

}
</style>
