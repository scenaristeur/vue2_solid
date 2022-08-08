<template>

  <b-card
  header="Friends"
  class="solid-friends"
  no-body>
  {{webId}}
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
  data(){
    return {
      friends: []
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      if(this.webId != null){
        this.friends = await this.$getFriends(this.webId)
      }else{
        this.friends = []
      }
    },
    setUser(webId){
      console.log('setUser', webId)
      this.$store.commit('vue2_solid_store/setWebId', webId)
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
  }

}
</script>

<style lang="css" scoped>
.solid-friends {

}
</style>
