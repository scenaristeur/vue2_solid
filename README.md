Vue2 componentts to do all the boring thing when creating a Solid decentralized app https://solidproject.org/

https://solidproject.org/

(demo)[Vue2 componentts to do all the boring thing when creating a Solid decentralized app https://solidproject.org/]

(doc)[https://github.com/scenaristeur/vue2_solid]


# Usage
- create a new vuejs app
```
vue create myapp
```
- choose vue2
- install vue2_solid
```
npm install --save @smag0/vue2_solid
```
- import in main.js providing the store to the plugin
```
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import Vue2Solid from './plugins/vue2_solid/'
import Vue2Solid from 'vue2-solid'
//
Vue.use(Vue2Solid, {store: store});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  }).$mount('#app')

  ```

  - use anywhere in your app
  exemple : src/App.vue
  ```
  <template>
  <div id="app">
  <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  </nav>


  <InputText />
  <InputTextarea />
  <SolidLogin clientName="My Great App" />


  <router-view/>
  </div>
  </template>
  ...
  ```
