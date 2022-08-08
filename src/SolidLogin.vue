<template>
  <span class="login">
    <!-- <b-icon-person-circle></b-icon-person-circle> -->
    <!-- https://vuetailwind.com/components/button -->
        <!-- <button class="mx-2 px-2 py-1 text-xs rounded text-gray-800 border focus:outline-none hover:bg-gray-100">Default</button>
    <button class="mx-2 px-4 py-2 text-sm rounded text-white bg-red-500 focus:outline-none hover:bg-red-400">Danger</button>
        <button class="mx-2 px-4 py-2 text-sm text-blue-600 focus:outline-none hover:underline">Link</button> -->
    <div v-if="session == null || session.isLoggedIn == false" class="d-flex align-items-center">
      <b-form-group>

        <!-- <b-dropdown id="dropdown-login"
        text="Login"
        class="m-md-2"
        size="sm"
        variant="success">
        <b-dropdown-item v-for="issuer in issuers" :key="issuer.value" @click="login(issuer.value)">
        {{issuer.text}}
      </b-dropdown-item>
    </b-dropdown> -->


    <b-form-select autofocus size="sm" v-model="issuer"
    :options="issuers" @change="login">
    <template #first>
      <b-form-select-option :value="null" disabled>-- Login / Connexion --</b-form-select-option>
    </template>

  </b-form-select>

  <div v-if="issuer == 'other'">
    <b-form-group
    id="fieldset-1"
    description= "ex: `https://solidcommunity.net`"
    label="url of your pod provider"
    label-for="input-1"
    valid-feedback="Thxs!"
    :invalid-feedback="invalidFeedback"
    :state="state"
    >

    <b-form-input id="input-1" v-model="other" :state="state" @change="onChange" trim></b-form-input>
  </b-form-group>

  <b-button size="sm" variant="info">Login / connexion</b-button>
</div>
</b-form-group>
</div>

<div v-else class="d-flex align-items-center">
  <b-button @click="logout" variant="outline-danger" size="sm">Logout</b-button>
  <a :href="session.webId" target="_blank">pod</a>
</div>
<div class="">

  </div>
</span>
</template>

<script>
export default {
  name: "SolidLogin",
  props: [
    "clientName"
  ],
  data() {
    return {
      issuers: [
        { value: "https://solidcommunity.net", text: 'SolidCommunity.net (NSS)' },
        { value: "https://solidweb.org", text: 'Solidweb.org (NSS)' },
        { value: 'https://solidweb.me/', text: 'Solidweb.me (CSS)'},
        { value: "https://broker.pod.inrupt.com", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },
        { value: "https://inrupt.net", text: 'Inrupt.net (NSS)' },
        { value: "https://dev.inrupt.net", text: 'dev.inrupt.net (NSS)' },
        { value: "https://trinpod.us/", text: 'Trinpod.us (hs ?)'},
        { value: "other", text: 'Autre / Other' },
      ],
      issuer: null,
      restore: true,
      other: ""
    }
  },
  created(){
    this.$checkSession()
  },
  methods:{
    onInput(){
      console.log("input", this.other)
    },
    onChange(){
      console.log("change", this.other)
      if (this.other != undefined && this.other.length != undefined)  {
        this.issuer = this.other
        this.login(this.issuer)
      }
    },
    login(issuer){
      console.log(issuer)
      this.issuer = issuer
      if (this.issuer != null && this.issuer != "other"){
        console.log(this.issuer)
        let params = {issuer : this.issuer, clientName: this.clientName}
        this.$login(params)
      }
    },
    logout(){
      this.$logout()
    }
  },
  computed:{
    session(){
     return this.$store.state.vue2_solid_store.session
    },
    pod(){
     return this.$store.state.vue2_solid_store.pod
    },
    state() {
      return this.other.startsWith('http')
    },
    invalidFeedback() {
      if (this.other.length> 0 && !this.other.startsWith('http')) {
        return "the url of your pod provider should start with `http`"
      }
      return "the url of your pod provider, not your webId ! "
    }
  }
}
</script>

<style>
/* .login{
float: left
} */
</style>
