<template>

  <b-card
  header="Friends"
  class="solid-friends"
  no-body>
  <!-- webId : {{ webId}}
  friends : {{ friends}} -->
  <b-list-group flush>
    <b-list-group-item button v-for="f in friends" :key="f.webId" @click="setUser(f.webId)">
      <SolidUserSmall :webId="f.webId"  />
      <!-- {{f.webId}} -->
    </b-list-group-item>
  </b-list-group>

</b-card>

</template>

<script>
export default {
  name: 'SolidFriends',
  props: ['webId'],
  data(){
    return {
      friends: null
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      console.log('getFriends',this.webId)
      this.friends = await this.$getFriends(this.webId)
      console.log(this.friends)
    },
    setUser(webId){
      console.log('setUser', webId)
      this.$store.commit('vue2_solid_store/setCurrentWebId', webId)
    }
  },
  watch:{
    webId(){
      this.init()
    }
  }

}
</script>

<style lang="css" scoped>
.solid-friends {

}
</style>
