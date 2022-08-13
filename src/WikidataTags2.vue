<template>


  <!-- :existing-tags="[
  { id: 1, name: 'Web Development' },
  { id: 2, name: 'PHP' },
  { id: 3, name: 'JavaScript' },
  ]"
  id-field="id"
  text-field="name"
  typeahead-url='https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'
  :typeahead="true"
-->



<tags-input element-id="tags"
ref="tagsinput"
v-model="selectedTags"
@initialized="onInitialized"
@tag-added="onTagAdded"
@tag-removed="onTagRemoved"
@tags-updated="onTagsUpdated"
@limit-reached="onLimitReached"
:existing-tags="existingTags"
@focus="onFocus"
@blur="onBlur"
@change="onChange"
:typeahead="true"
:typeahead-activation-threshold="2"
:typeahead-callback="onSearch"
>
<!-- :typeahead-activation-threshold="2"
:typeahead-callback="onSearch" -->
<!-- <template v-slot:selected-tag="{ tag, index, removeTag }">
<span v-html="tag.value"></span>

<a v-show="!disabled"
href="#"
class="tags-input-remove"
@click.prevent="removeTag(index)"></a>
</template> -->

</tags-input>

</template>

<script>
// import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: "WikidataTags",
  // components: {
  //   VueTagsInput
  // },
  data(){
    return{
      existingTags: [],
      selectedTags: []
      // tag: '',
      // tags: [],
      // autocompleteItems: [],
      // debounce: null,
      // sources: [
      //   {name: "wikidata", status: "active", url: "https://www.wikidata.org/w/api.php?action=wbsearchentities&origin*&format=json" },
      //   {name: "semapps-mega carte", status: "in progress", url: "data.semapps" },
      //   {name: "medecine", status: "hs", url: "data.medecin" },
      // ]
    }
  },
  created(){
    this.language = navigator.language.split("-")[0] || 'en'
  },
  methods: {
    onSearch(data){
      console.log('onSearch', data)
      this.autocomplete(data)
      // return ['test', 'nothing']
    },
    onInitialized() {
      console.log('Initialized');
    },

    onTagAdded(slug) {
      console.log(`Tag added: ${slug}`);
      console.log('Tag added', this.selectedTags);
    },

    onTagRemoved(slug) {
      console.log(`Tag removed: ${slug}`);
      console.log('Tag removed', this.selectedTags);
    },

    onTagsUpdated() {
      console.log('Tags updated', this.selectedTags);
    },

    onLimitReached() {
      console.log('Max Reached');
    },

    onKeyDown() {
      console.log('Key down');
    },

    onKeyUp() {
      console.log('Key up');
    },

    autocomplete(q) {
      const p = this.searchRemoteServer({ query: q })
      return new Promise((resolve) => {
        p.then((results) => {
          resolve(results)
          this.$refs.tagsinput.doSearch(q)
        })
      })
    },

    async  searchRemoteServer(q){
      console.log(q)
      return await "ok"
    },

    onFocus() {
      console.log('Input focused');
    },

    onBlur() {
      console.log('Input blurred');
    },

    onChange(value) {
      console.log("Input changed:", this.selectedTags);
    }

    // update(newTags) {
    //   this.autocompleteItems = [];
    //   this.tags = newTags;
    // },
    // async runQueries(){
    //   // console.log(this.tags)
    //   await this.$loadBrainsFromWikidata(this.tags)
    //   this.tags = []
    // },
    // async getItems(query) {
    //   if(query.length>0){
    //     this.loading = true
    //     let search_url = API_URL+"&language="+this.language+"&search="+query
    //     // console.log(search_url)
    //     try{
    //       const res = await fetch(search_url)
    //       const suggestions = await res.json()
    //       // console.log(suggestions)
    //       this.items = suggestions.search
    //       // console.log(this.items)
    //       this.autocompleteItems = suggestions.search.map(a => {
    //         return { text: a.match.text+" ("+a.description+")", url: a.concepturi, item: a };
    //       });
    //     }catch(e){
    //       alert(e)
    //     }
    //     this.loading = false
    //   }
    // },
  },
  watch:{
    // 'tag': _.debounce(function(item) { this.getItems(item) }, 500),
    // tags(){
    //   console.log(this.tags)
    //   //this.note.tags = this.tags//.map(t => t.text.trim())
    // },
  },
}
</script>
