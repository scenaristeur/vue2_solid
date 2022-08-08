<template>

  <!-- <div>
    User : {{ webId}}
<hr>
user : {{ user}}

  </div> -->
  <b-card v-if="user != null"
  :title="user.name || 'no name'"
  :img-src="user.photo || 'no photo'"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 20rem;"
  class="mb-2 solid-user"
  >
  <b-card-text>

</b-card-text>

<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>

</template>

<script>
export default {
  name: 'SolidUser',
  props: ['webId'],
  data(){
    return {
      user: null
    }
  },
  created(){
    this.init()
  },
  methods: {
    async init(){
      console.log('get!user',this.webId)
      this.user = await this.$getUser(this.webId)
      console.log(this.user)
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
.solid-user {

}
</style>
