<template>

  <b-card
  class="solid-explorer"
  >
  <b-card-header>
    <b-button size="sm" :pressed.sync="toggleExplorer" :variant="toggleExplorer ? 'primary' : 'light'">Explorer</b-button>
    <b-button size="sm" :pressed.sync="toggle2D" :variant="toggle2D ? 'primary' : 'light'">2D</b-button>
    <b-button size="sm" :pressed.sync="toggle3D" :variant="toggle3D ? 'primary' : 'light'">3D</b-button>

    <b-dropdown v-if="paths != null && paths.length > 0" id="dropdown-paths" class="m-md-2" variant="primary" size="sm">
      <template #button-content>
        {{paths.slice(-1)[0].path}}
      </template>
      <b-dropdown-item v-for="p in paths" :key="p.path" @click="setPath(p.path)">{{p.path}}</b-dropdown-item>
    </b-dropdown>

  </b-card-header>
  <b-row>
    <SolidBrowser v-if="toggleExplorer" class="col" />
    <Explorer2D v-if="toggle2D" class="col"/>
    <Explorer3D v-if="toggle3D" class="col"/>
  </b-row>

</b-card>
</template>

<script>
export default {
  name: 'SolidExplorer',
  data(){
    return{
      toggleExplorer: true,
      toggle2D: false,
      toggle3D: false
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      let storage = null
      if(this.webId != null){
        storage = await this.$getStorage(this.webId)
      }else{
        this.friends = []
      }
      this.$store.commit('vue2_solid_store/setPath', storage)
    },
    async setPath(p){
      let storage = {type: 'pod', path: p}
      storage = await this.$getThingAll(storage)
      this.$store.commit('vue2_solid_store/setPath', storage)
    }
  },
  watch:{
    webId(){
      this.init()
    }
  },
  computed:{
    webId(){
      return this.$store.state.vue2_solid_store.webId
    },
    paths(){
      return this.$store.state.vue2_solid_store.paths
    },
  }

}
</script>

<style lang="css" scoped>
.solid-explorer {

}
</style>
