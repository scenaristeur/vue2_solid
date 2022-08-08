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
<b-card-header>

</b-card-header>
<b-card-text>

</b-card-text>

<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>

</template>

<script>
export default {
  name: 'SolidUser',
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
      if(this.webId != null){
        this.user = await this.$getUser(this.webId)
      }else{
        this.user = null
      }


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
.solid-user {

}
</style>
