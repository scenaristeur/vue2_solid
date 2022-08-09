<template>

  <!-- <div>
  User : {{ webId}}
  <hr>
  user : {{ user}}

</div> -->
<span>
  <span v-if="user != null" class="d-flex align-items-center">
    <!-- {{user.photo}} {{user.name}} -->
    <!-- <b-avatar variant="info" :src="user.photo" class="mr-3"></b-avatar> -->
<img :src="user.photo" class="mr-3" width="40px" />

    <span class="mr-auto">{{user.name || webId}}</span>
    <b-badge>{{ friends.length}}</b-badge>

  </span>
  <span v-else><small><i>...Loading {{webId}}</i></small></span>
</span>

</template>

<script>
export default {
  name: 'SolidUserSmall',
  props: ['webId'],
  data(){
    return {
      user: null,
      friends:[]
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      console.log('get!user',this.webId)
      this.user = await this.$getUser(this.webId) ||
      console.log(this.user)
      this.friends = await this.$getFriends(this.webId)
      // this.friendsLength = friends.length
    },

  },
  watch:{
    webId(){
      this.init()
    }
  }

}
</script>

<style lang="css" scoped>
.solid-user {

}
</style>
