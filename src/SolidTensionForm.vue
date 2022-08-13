<template>
  <div class="solid-tension-form" v-if="file != null && file.type== 'tension'">
    {{ file }}
    <b-input v-model="tension.name" placeholder="Name" />
    <b-form-textarea
    v-model="tension.wi"
    placeholder="What is ???"
    rows="3"
    max-rows="6"
    ></b-form-textarea>
    <b-form-textarea
    v-model="tension.wsb"
    placeholder="What should be ???"
    rows="3"
    max-rows="6"
    ></b-form-textarea>

    <b-input v-model="tension.tags" placeholder="tags" />

    <b-button @click="saveTension">Save</b-button>
  </div>
</template>

<script>
export default {
  name: 'SolidTensionForm',
  data(){
    return {
      tension : {}
    }
  },
  methods: {
    saveTension(){
      let item = Object.assign (this.file, this.tension)
      console.log(item)
      this.$putThing(item)
    }
  },
  computed:{
    file(){
      return this.$store.state.vue2_solid_store.file
    },
  }

}
</script>

<style lang="css" scoped>
.solid-tension-form {

}
</style>
