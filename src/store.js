// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  // doc: null
  session: null,
  pod: null,
  foo: 12,
  webId: null,
  history: []
})

const mutations = {
  setSession(state, s){
    console.log("session",s)
    state.session = s
  },
  setPod(state, p){
    console.log("pod",p)
    state.pod = p
    console.log("pod state", state.pod)
  },
  incremente(state, val){
    console.log("inc")
    state.foo += val
  },
  decremente(state, val ){
    console.log("dec")
    state.foo -= val
  },
  setWebId(state, w){
    console.log("webId",w)
    state.history.push(w)
    state.webId = w
  },
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

}

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
