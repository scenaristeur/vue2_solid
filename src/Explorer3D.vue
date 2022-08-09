<template>
  <div class="explorer-3d">
    <!-- <b-button v-model="nodeExtended" @click="nodeExtended = !nodeExtended" size="sm" variant="primary">extended {{nodeExtended}}</b-button> -->
    <div id="3d-graph" ref="graph"></div>
  </div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as THREE from 'three';

export default {
  name: 'Explorer3D',
  data(){
    return{
      // graph: null,
      nodes: [],
      links: [],
      // nodeExtended: false
    }
  },
  mounted(){
    // const N = 300;
    // const gData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //   .filter(id => id)
    //   .map(id => ({
    //     source: id,
    //     target: Math.round(Math.random() * (id-1))
    //   }))
    // };
    console.log(this.$refs.graph.parentElement.clientWidth)
    let graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })
    (this.$refs.graph)
    .width(this.$refs.graph.parentElement.clientWidth/2).height(window.innerHeight/2)
    .nodeAutoColorBy('group')
    .onNodeClick(node => this.onNodeClick(node))
    // .nodeThreeObject(node => {
    //     const nodeEl = document.createElement('div');
    //     nodeEl.textContent = node.id;
    //     nodeEl.style.color = node.color;
    //     nodeEl.className = 'node-label';
    //     return new CSS2DObject(nodeEl);
    //   })
    //   .nodeThreeObjectExtend(true)
    console.log(graph)
    this.$store.commit('vue2_solid_store/setGraph', graph)
    // .width(this.$refs.graph.parentElement.clientWidth).height(this.$refs.graph.parentElement.clientHeight)
    //.graphData(gData);
  },
  methods: {

    onNodeClick(node){
      console.log(node)
      this.$nodeFocus(node)
      this.modifyPath(node)

    },
    async modifyPath(node){
      switch (node.group) {
        case 'container':
        let storage = {path: node.id}
        storage = await this.$getThingAll(storage)
        this.$store.commit('vue2_solid_store/setPath', storage)
        break;
        case 'webId':
        this.$store.commit('vue2_solid_store/setWebId', node.id)
        break;
        case 'file':
        this.$store.commit('vue2_solid_store/setFile', node.id)
        break;
        default:

      }
      // if(node.group == 'container'){
      //   let storage = {path: node.id}
      //   storage = await this.$getThingAll(storage)
      //   this.$store.commit('vue2_solid_store/setPath', storage)
      // }
      // if(node.group == 'webId'){
      //   this.$store.commit('vue2_solid_store/setWebId', node.id)
      // }
    }

  },
  watch:{

    friends(){
      console.log("graph friends",this.friends)
    },
    webId(){
      console.log("graph webId",this.webId)
    },
    user(){
      console.log("graph user",this.user)
    },
  },
  computed:{

    friends(){
      return this.$store.state.vue2_solid_store.friends
    },
    webId(){
      return this.$store.state.vue2_solid_store.webId
    },
    user(){
      return this.$store.state.vue2_solid_store.user
    }
  }

}
</script>

<style lang="css" scoped>
.explorer-3d {

}

.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
