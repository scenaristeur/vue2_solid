<template>
  <b-card class="solid-editor">
    <b-card-header>


    </b-card-header>
    editor
    {{ file}}

  </b-card>
</template>

<script>
export default {
  name: 'SolidEditor',
  computed:{
    file(){
      return this.$store.state.vue2_solid_store.file
    },
  }


}
</script>

<style lang="css" scoped>
.solid-editor {

}
</style>
