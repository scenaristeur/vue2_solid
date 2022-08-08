import components from'./components' // method1

//method2
// import componentA from './myComponentA.vue';
// import componentB from './myComponentB.vue';
import vue2_solid_store from './store.js'

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
  }).then((info) => {
    if(info.isLoggedIn ==  true){
      console.log(`Logged in with WebID [${info.webId}]`)
      store.commit('vue2_solid_store/setSession',info)
      let session = sc.getDefaultSession()
      console.log(session)
      //this.$getPodInfosFromSession(session)
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











  }
}

export default Vue2Solid

// export {componentA, componentB}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Solid)
}
