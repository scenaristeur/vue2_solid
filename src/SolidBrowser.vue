<template>

  <b-list-group flush class="scroll">
    <b-list-group-item button v-for="c in path.containers" :key="c.url" @click="clickContainer(c)">
      {{c.url}}
    </b-list-group-item>
    <b-list-group-item button v-for="f in path.files" :key="f.url" @click="clickFile(f)">
      {{f.url}}
    </b-list-group-item>
  </b-list-group>

</template>

<script>
export default {
  name: 'SolidBrowser',
  methods: {
    async clickContainer(c){
      console.log("container",c)
      let storage = {type: 'pod', path: c.url}
      storage = await this.$getThingAll(storage)
      this.$store.commit('vue2_solid_store/setPath', storage)
    },
    async clickFile(f){
      console.log("file",f)
    }
  },
  computed:{
    path(){
      return this.$store.state.vue2_solid_store.path
    }
  }


}
</script>

<style lang="css" scoped>
.solid-browser {

}
.scroll{
  max-height: 50vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
