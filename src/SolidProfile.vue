<template>
  <b-card-group class="solid-profile" deck v-if="session">
    <SolidUser v-if="session != null" :webId="session.webId"/>
    <SolidFriends v-if="session != null" :webId="session.webId" />
    session   {{ session }}
  </b-card-group>
</template>

<script>

export default {
  name: 'SolidProfile',
  computed:{
    session(){
      return this.$store.state.vue2_solid_store.session
    },
  }
}
</script>
