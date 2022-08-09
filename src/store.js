// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  // doc: null
  session: null,
  pod: null,
  webId: null,
  history: [],
  paths: [],
  path: null,
  file: null,
  friends: [],
  users: [],
  user: null,
  friend: null,
  nodes: [],
  links: [],
  graph: null
})

const mutations = {
  setSession(state, s){
    console.log("session",s)
    state.session = s
  },
  setPod(state, p){
    state.pod = p
  },
  setWebId(state, w){
    console.log("webId",w)
    state.history = state.history.filter(x => x != w)
    state.history.push(w)
    state.webId = w
  },
  setGraph(state, g){
    state.graph = g
  },
  setPath(state, p){
    state.path = p

    if(p.webId != undefined){
      this._vm.$updateNode({id: p.webId, name: p.webId, group:'webId', color:"red"})
    }
    this._vm.$updateNode({id: p.path, name: p.path, group:'container', color: "yellow"})


    p.containers.forEach((c) => {
      let color = c.url.endsWith('/public/') ? 'orange' : "yellow"
      this._vm.$updateNode({id: c.url, name: c.url, group:'container', color: color})
      this._vm.$updateLinks({source: p.path, target: c.url, name: "contains"})
    });
    p.files.forEach((f) => {
      this._vm.$updateNode({id: f.url, name: f.url, group:'file', color: "#d8e7f0"})
      this._vm.$updateLinks({source: p.path, target: f.url, name: "contains"})
    });
    if(p.webId != undefined){
      this._vm.$updateNode({id: p.webId, name: p.webId, group:'webId', color:"red"})
      this._vm.$updateLinks({source: p.webId, target: p.path, name: "storage"})
    }


    state.paths = state.paths.filter(x => x.path != p.path)
    p != null ? state.paths.push(p) : ""


  },
  setFile(state, f){
    state.file = f
  },
  addFriends(state,friends){
    console.log("addFriends")
    let app = this._vm
    friends.forEach(f => {
      app.$updateNode({id: f.webId, name: f.webId, group:'webId', color:"red"})
    });

    // state.friend = f
    // state.friends = state.friends.filter(x => x.webId != p.webId)
    // state.friends.push(f)
  },
  addUser(state, u){
    console.log("addUser", u)
    // state.user = u
    // state.users = state.users.filter(x => x.webId != p.webId)
    // state.users.push(f)
  }
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
