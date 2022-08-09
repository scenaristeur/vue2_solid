import components from'./components' // method1

//method2
// import componentA from './myComponentA.vue';
// import componentB from './myComponentB.vue';
import vue2_solid_store from './store.js'

import {
  getSolidDataset,
  getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  // getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  // getContainedResourceUrlAll,
  // getStringNoLocaleAll,
  // createContainerAt,
  // getSourceUrl,
  // deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  //addStringNoLocale,
  //setThing,
  //saveSolidDatasetAt,
  //createSolidDataset,
  //createThing,
  //addUrl,
  //buildThing,
  //overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl,
  //addDatetime,
  //  getDatetime,
  //setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  //getInteger,
  // setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD, /*RDF,*/ /*AS,*/ /*RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
import { WS/*, SOLID*/ } from "@inrupt/vocab-solid-common";

import * as sc from '@inrupt/solid-client-authn-browser'
const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url"


import { BootstrapVue,
  // BIconLink,
  // BIconEye,
  // BIconShare,
  // BIconFileArrowUp,
  // BIconFileArrowDown,
  // BIconClipboardPlus,
  // BIconCloudUpload
  BootstrapVueIcons
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const Vue2Solid = {
  install (Vue, options) {
    let store = options.store
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }

    Vue.use(BootstrapVue)
    // Vue.use(BIconLink)
    // Vue.use(BIconEye)
    // Vue.use(BIconShare)
    // Vue.use(BIconFileArrowUp)
    // Vue.use(BIconFileArrowDown)
    // Vue.use(BIconClipboardPlus)
    // Vue.use(BIconCloudUpload)
    Vue.use(BootstrapVueIcons)


    // Vue.component(componentA.name, componentA);
    // Vue.component(componentB.name, componentB);

    const storeName = 'vue2_solid_store';// While app only available AFTER new Vue() in main.js...
    // Add store only once.
    if(!store.hasModule(storeName)) {
      store.registerModule(storeName, vue2_solid_store);
    }


    // Globals

    Vue.prototype.$checkSession = async function(){
      localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString())
      // console.log("check session", document.location)
      // localStorage.setItem(Date.now, document.location)

      sc.onSessionRestore((url) => {
        history.replaceState(null, "", url)
      });


      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then(async (session) => {
        if(session.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${session.webId}]`)
          store.commit('vue2_solid_store/setSession',session)
          store.commit('vue2_solid_store/setWebId',session.webId)
          // let session = sc.getDefaultSession()
          //   console.log(session)
          // await this.$getPodInfosFromSession(session)
          // This line is not reached until you are successfully logged in
          localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "")
        }
      })

    }

    Vue.prototype.$login = async function(params){
      console.log("login", params)
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: params.issuer,
          redirectUrl: window.location.href,
          clientName: params.clientName //|| "clientName not provided see vue2_solid doc"
        });
      }
    }

    Vue.prototype.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      store.commit('vue2_solid_store/setSession',null)
      store.commit('vue2_solid_store/setPod', null)
      //store.dispatch('nodes/clearStore')
    }

    Vue.prototype.$getUser = async function(webId){
      let user = {wedId: webId}
      try{
        console.log("user before",user)
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        user.name = await getStringNoLocale(profile, FOAF.name);
        // user.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        user.storage = await getUrl(profile, WS.storage)  || webId.split('/').slice(0,-2).join('/')+'/'
        user.photo = await getUrl(profile, VCARD.hasPhoto);
        console.log("user after",user)
      }catch(e)
      {
        console.log("erreur",e)
        user.name = "can not load "+webId
      }
      return user
    }

    Vue.prototype.$getFriends = async function(webId){
      let friends = []
      try{
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        friends = await getUrlAll(profile, FOAF.knows).map(f => {return {webId: f}})
      }catch(e)
      {
        console.log("erreur",e)
      }
      return friends
    }

    Vue.prototype.$getStorage = async function(webId){
      let storage = {type: 'pod'}
      try{
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        storage.path = await getUrl(profile, WS.storage)  || webId.split('/').slice(0,-2).join('/')+'/'
        storage.permissions = null
        storage = await this.$getThingAll(storage)
      }catch(e)
      {
        console.log("erreur",e)
      }
      console.log(storage)
      return storage
    }

    Vue.prototype.$getThingAll = async function(storage){
      try{
        const dataset = await getSolidDataset( storage.path, { fetch: sc.fetch });
        let things  = await getThingAll( dataset );
        storage.containers = things.filter(t => t.url.endsWith('/') && t.url!= storage.path)
        storage.files = things.filter(t => !t.url.endsWith('/'))
      }catch(e)
      {
        console.log("erreur",e)
      }
      return storage
    }

    //
    // Vue.prototype.$getPodInfosFromSession = async function(session){
    //   // try{
    //   console.log('session', session)
    //   let pod = {}
    //   pod.logged = session.isLoggedIn
    //   if (pod.logged) {
    //     pod.webId = session.webId
    //     // pod = await this.$getPodInfos(pod)
    //     // console.log("getinfos",pod)
    //     store.commit('vue2_solid_store/setPod', pod)
    //     // pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
    //     // pod.workspaces == undefined ? pod.workspaces = [] : ""
    //
    //     // store.commit('vue2_solid_store/setPod', pod)
    //     //  this.$checkChanges()
    //     //this.$synchronize()
    //     //  await this.$getVerses(pod)
    //
    //     // if (pod.storage != null){
    //     //   pod.brains = pod.storage+'brains.json'
    //     //   Vue.prototype.$checkBrains()
    //     //   //  this.$setCurrentThingUrl(pod.storage)
    //     //   //  store.commit('booklice/setPath', pod.storage+'public/bookmarks/')
    //     //   //let publicTagFile = pod.storage+'public/tags.ttl'
    //     //   //let privateTagFile = podStorage+'private/tags.ttl'
    //     //   // let tags = await this.$getTags(publicTagFile)
    //     //   // console.log("############################tags",tags)
    //     // }
    //   }else{
    //     store.commit('vue2_solid_store/setPod', null)
    //     //  store.commit('solid/setThings', [])
    //   }
    //   // } catch(e){
    //   //   alert("$getPodInfosFromSession "+e)
    //   // }
    // },
    //

    // Vue.prototype.$getPodInfos = async function(pod){
    //   console.log("getpodinfos", pod)
    //   try{
    //     const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
    //     let profile = await getThing( dataset, pod.webId );
    //     pod.name = await getStringNoLocale(profile, FOAF.name);
    //     pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
    //     pod.storage = await getUrl(profile, WS.storage);
    //
    //     if (pod.storage == null){
    //       // let storage = await getLink(pod.webId)
    //       // console.log("storage", storage)
    //       // for community solid server with no pim:storage
    //       pod.storage = pod.webId.split('/').slice(0,-2).join('/')+'/'
    //     }
    //
    //
    //     pod.photo = await getUrl(profile, VCARD.hasPhoto);
    //     pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
    //     // pod.workspaces = []
    //     //
    //     // let publicTypeIndexUtl = pod.storage+'settings/publicTypeIndex.ttl'
    //     // const pti_ds = await getSolidDataset( publicTypeIndexUtl, { fetch: sc.fetch });
    //     // let indexes = await getThingAll(pti_ds)
    //     // for await (const i of indexes){
    //     //   let types = await getUrlAll(i, "http://www.w3.org/ns/solid/terms#forClass");
    //     //   //console.log(types)
    //     //   if(types.includes("https://scenaristeur.github.io/verse#Workspace")){
    //     //     console.log(i)
    //     //     let ws = {}
    //     //     ws.name =  await getStringNoLocale(i, AS.name)
    //     //     ws.url = await getUrl(i,SOLID.instance)
    //     //     pod.workspaces.push(ws)
    //     //   }
    //     // }
    //     //console.log(ws)
    //     //  pod.workspaces = await getUrlAll(pti_ds, "http://www.w3.org/ns/solid/terms#forClass", "https://www.w3.org/ns/activitystreams#Collection");
    //     // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
    //     // store.commit("vatch/addToNetwork", pod.publicTags)
    //     //this.$subscribe(pod.storage)
    //     //  console.log("getpodinfos",pod)
    //   }catch(e)
    //   {
    //     console.log("erreur",e, pod)
    //   }
    //   console.log("pod in getinfos",pod)
    //   return await pod
    // }

  }
}

export default Vue2Solid

// export {componentA, componentB}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Solid)
}
