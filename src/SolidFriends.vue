<template>

  <b-card
  class="solid-friends"
  no-body>
  <b-card-header>
    Friends <b-button v-if="session != null && session.webId != webId" @click="setUser(session.webId)" variant="primary" size="sm" class="ml-3">Me</b-button>

    {{history.slice(-1)[0]}}
    <b-dropdown id="dropdown-history" class="m-md-2" variant="primary" size="sm">
      <template #button-content>
        {{history.slice(-1)[0]}}
      </template>
      <b-dropdown-item v-for="h in history" :key="h" @click="setUser(h)">{{h}}</b-dropdown-item>
    </b-dropdown>
    <b-button disabled @click="addFriend" variant="primary" size="sm">+</b-button>

  </b-card-header>
  <!-- webId : {{ webId}}
  friends : {{ friends}} -->
  <b-list-group flush class="scroll">
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
    addFriend(){
      console.log('add')
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
    history(){
      return this.$store.state.vue2_solid_store.history
    },
    session(){
      return this.$store.state.vue2_solid_store.session
    },
  }

}
</script>

<style lang="css" scoped>
.solid-friends {

}
.scroll{
  max-height: 50vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
