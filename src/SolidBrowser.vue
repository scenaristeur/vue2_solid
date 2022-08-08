<template>
  <b-container>
    Browser
POD : {{ pod}}
    session {{ session}}
    <!-- <hr>
    profile : {{profile}} -->
  </b-container>
</template>

<script>
export default {
  name: 'SolidBrowser',
  // data(){
  //   return {
  //     profile: null
  //   }
  // },
  // mounted(){
  //   let pod = this.$store.state.vue2_solid_store.pod
  //   console.log("created", pod)
  // },

  watch:{
    pod(){
      console.log("pod in profile", this.pod)
    },
    // async session(){
    //   console.log("session in browser", this.session)
    //   this.profile = await this.$getPodInfosFromSession(this.session)
    // },


  },
  computed:{
    pod(){
     return this.$store.state.vue2_solid_store.pod
    },
    session(){
    return this.$store.state.vue2_solid_store.session
    },
  }


}
</script>
