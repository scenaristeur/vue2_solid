<template>
  <b-card-group class="solid-profile" deck v-if="session">
    <SolidUser v-if="session != null" :webId="session.webId"/>
    <SolidFriends v-if="session != null" :webId="session.webId" />
    session   {{ session }}
    <hr>
    current_webId: {{ current_webId}}
  </b-card-group>
</template>

<script>

export default {
  name: 'SolidProfile',
  // data(){
  //   return {
  //     webId:
  //   }
  // }
  // watch:{
  //   current_webId(){
  //     console.log("in profile", this.current_webId)
  //   }
  // },
  computed:{
    session(){
      return this.$store.state.vue2_solid_store.session
    },
    current_webId(){
      return this.$store.state.vue2_solid_store.current_webId
    },
  }
}
</script>
