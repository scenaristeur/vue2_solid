<template>

  <b-list-group flush class="scroll" v-if="path != null">
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

      // let node = this.$store.state.vue2_solid_store.nodes.find(n => n.id == storage.path)
      // console.log("nodefocus", node)
      // this.$nodeFocus(node)
      console.log("should focus to",storage.path)


    },
    async clickFile(f){
      console.log("file",f)
      this.$store.commit('vue2_solid_store/setFile', {id: f.url})
        console.log("should focus to",f.url)
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
