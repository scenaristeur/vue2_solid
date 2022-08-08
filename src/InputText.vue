<template>
  <div>
    <input type="text" v-model="value"/>

     <div>Foo: {{getSharedStoreState}}</div>

    <button @click="inc">inc</button>
    <button @click="dec">dec</button>

  </div>
</template>
<script>
export default {
  name: 'InputText',
  data(){
    return {
      value: 3
    }
  },
  methods:{
    inc(){
      this.$store.commit('my_store/incremente', this.value)
    },
    dec(){
      this.$store.commit('my_store/decremente', this.value)
    }
  },
  computed: {
    getSharedStoreState() {
      return this.$store.state.my_store.foo - 1;
    }
  }
}
</script>
