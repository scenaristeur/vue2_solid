<template>
  <div class="explorer-3d">

    <div id="3d-graph" ref="graph"></div>
    3d {{path}}
  </div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';

export default {
  name: 'Explorer3D',
  data(){
    return{
      graph: null,
      nodes: [],
      links: []
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
    this.graph = ForceGraph3D()
    (this.$refs.graph)
    .width(window.innerWidth/3).height(window.innerHeight/3)
    .nodeAutoColorBy('group')
    .onNodeClick(node => this.onNodeClick(node))
    // .width(this.$refs.graph.parentElement.clientWidth).height(this.$refs.graph.parentElement.clientHeight)
    //.graphData(gData);
  },
  methods: {
    updateNode(n){
      const index = this.nodes.findIndex(x => x.id == n.id);
      index === -1 ? this.nodes.push(n) : "" //this.nodes[index] = Object.assign({}, n)
      this.graph.graphData({nodes: this.nodes, links: this.links})
    },
    updateLinks(l){
      const index = this.links.findIndex(x => x.source == l.source && x.target==l.target && x.name == l.name);
      index === -1 ? this.links.push(l) : "" //this.links[index] = Object.assign({}, l)
      this.graph.graphData({nodes: this.nodes, links: this.links})
    },
    onNodeClick(node){
      console.log(node)
    }

  },
  watch:{
    path(){

      this.updateNode({id: this.path.path, name: this.path.path, group:'container', color: "yellow"})

      this.path.containers.forEach((c) => {
        this.updateNode({id: c.url, name: c.url, group:'container'})
        this.updateLinks({source: this.path.path, target: c.url, name: "contains"})
      });
      this.path.files.forEach((f) => {
        this.updateNode({id: f.url, name: f.url, group:'file'})
        this.updateLinks({source: this.path.path, target: f.url, name: "contains"})
      });
      if(this.path.webId != undefined){
        this.updateNode({id: this.path.webId, name: this.path.webId, group:'webId', color:"red"})
        this.updateLinks({source: this.path.webId, target: this.path.path, name: "storage"})
      }

    },
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
    path(){
      return this.$store.state.vue2_solid_store.path
    },
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
</style>
