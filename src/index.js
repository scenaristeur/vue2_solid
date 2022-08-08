import components from'./components' // method1

//method2
// import componentA from './myComponentA.vue';
// import componentB from './myComponentB.vue';
import myStore from './store.js'

const Vue2Solid = {
  install (Vue, options) {
    let rootStore = options.store
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }

    // Vue.component(componentA.name, componentA);
    // Vue.component(componentB.name, componentB);

    const storeName = 'my_store';// While app only available AFTER new Vue() in main.js...
    // Add store only once.
    if(!rootStore.hasModule(storeName)) {
      rootStore.registerModule(storeName, myStore);
    }
  }
}

export default Vue2Solid

// export {componentA, componentB}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Solid)
}
