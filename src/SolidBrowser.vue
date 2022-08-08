<template>
  <b-container>
    <div v-if="pod !=null">POD : {{ pod}}</div>
    <hr>
    session {{ session}}
    <hr>
    profile : {{profile}}
  </b-container>
</template>

<script>
export default {
  name: 'SolidBrowser',
  data(){
    return {
      profile: null
    }
  },
  created(){
    this.pod = this.$store.state.vue2_solid_store.pod
    console.log("created", this.pod)
  },

  watch:{
    pod(){
      console.log("pod in browser", this.pod)
    },
    async session(){
      console.log("session in browser", this.session)
      this.profile = await this.$getPodInfosFromSession(this.session)
    },


  },
  computed:{
    pod:{
      get () { return this.$store.state.vue2_solid_store.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    session:{
      get () { return this.$store.state.vue2_solid_store.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }


}
</script>
