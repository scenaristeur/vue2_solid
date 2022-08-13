<template>
  <vue-typeahead-bootstrap
  ref="typeahead"
  v-model="tag"
  :data="autocompleteItems"
  @input='getItems'
  autofocus
  :serializer="serializer"
  placeholder="Add a wikidata tag"
  >
  <template slot="suggestion" slot-scope="{ data }">
    <div class="d-flex align-items-center" @click.stop="update(data)">
      <span @click.stop="update(data)"><b>{{data.match.text}}</b></span>
      <!-- <img
      class="rounded-circle"
      :src="data.avatar_url"
      style="width: 40px; height: 40px;" /> -->

      <!-- Note: the v-html binding is used, as htmlText contains
      the suggestion text highlighted with <strong> tags -->
      <span class="ml-4" @click.stop="update(data)">{{data.description}}</span>

      <!-- <i class="ml-auto fab fa-github-square fa-2x"></i> -->
    </div>
    <span @click.stop="update(data)"><small><i>{{data.concepturi}}</i></small></span>
  </template>
</vue-typeahead-bootstrap>

<!--  -->
</template>

<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

// Required dependency of bootstrap css/scss files
// import 'bootstrap/scss/bootstrap.scss';
import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: "WikidataTags",
  components: {
    VueTypeaheadBootstrap
  },
  data(){
    return{
      tag: '',
      autocompleteItems: [],
      debounce: null,
    }
  },
  created(){
    this.language = navigator.language.split("-")[0] || 'en'
  },
  methods: {
    update(data) {
      this.autocompleteItems = [];
      // console.log(this.tag)
      let tag = {id: data.concepturi, name: data.match.text, description: data.description}
      this.$emit('newTag', tag)
      this.tag = ""
      //   console.log(this.$refs.typeahead.$children[0])
      // this.$refs.typeahead.$children[0].focus()

    },
    // async runQueries(){
    //   // console.log(this.tags)
    //   await this.$loadBrainsFromWikidata(this.tags)
    //   this.tags = []
    // },
    async getItems(query) {
      if(query.length>2){
        this.loading = true
        let search_url = API_URL+"&language="+this.language+"&search="+query
        console.log(search_url)
        try{
          const res = await fetch(search_url)
          const suggestions = await res.json()
          // console.log(suggestions)
          this.autocompleteItems = suggestions.search
          // console.log(this.autocompleteItems)
          // this.autocompleteItems = suggestions.search.map(a => {
          //   return { text: a.match.text+" ("+a.description+")", url: a.concepturi, item: a };
          // });
        }catch(e){
          alert(e)
        }
        this.loading = false
      }
    },
    serializer(item){
      // console.log(item)
      return item.match.text

    }
  },
  watch:{
    'tag': _.debounce(function(item) { item.length > 0 ? this.getItems(item) : "" }, 500),
    // 'tag': _.debounce(function(item) { this.getItems(item) }, 500),
    // tags(){
    //   console.log(this.tags)
    //   //this.note.tags = this.tags//.map(t => t.text.trim())
    // },
  },
}
</script>
