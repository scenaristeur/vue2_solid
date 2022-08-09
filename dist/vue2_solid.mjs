import { getSolidDataset, getThing, getStringNoLocale, getUrl, getUrlAll, getThingAll } from '@inrupt/solid-client';
import { FOAF, VCARD } from '@inrupt/vocab-common-rdf';
import { WS } from '@inrupt/vocab-solid-common';
import * as sc from '@inrupt/solid-client-authn-browser';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$9 = {
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
    this.$checkSession();
  },
  methods:{
    onInput(){
      console.log("input", this.other);
    },
    onChange(){
      console.log("change", this.other);
      if (this.other != undefined && this.other.length != undefined)  {
        this.issuer = this.other;
        this.login(this.issuer);
      }
    },
    login(issuer){
      console.log(issuer);
      this.issuer = issuer;
      if (this.issuer != null && this.issuer != "other"){
        console.log(this.issuer);
        let params = {issuer : this.issuer, clientName: this.clientName};
        this.$login(params);
      }
    },
    logout(){
      this.$logout();
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
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { staticClass: "login" }, [
    _vm.session == null || _vm.session.isLoggedIn == false
      ? _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c(
              "b-form-group",
              [
                _c("b-form-select", {
                  attrs: { autofocus: "", size: "sm", options: _vm.issuers },
                  on: { change: _vm.login },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "first",
                        fn: function () {
                          return [
                            _c(
                              "b-form-select-option",
                              { attrs: { value: null, disabled: "" } },
                              [_vm._v("-- Login / Connexion --")]
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    3168236525
                  ),
                  model: {
                    value: _vm.issuer,
                    callback: function ($$v) {
                      _vm.issuer = $$v;
                    },
                    expression: "issuer",
                  },
                }),
                _vm._v(" "),
                _vm.issuer == "other"
                  ? _c(
                      "div",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "fieldset-1",
                              description: "ex: `https://solidcommunity.net`",
                              label: "url of your pod provider",
                              "label-for": "input-1",
                              "valid-feedback": "Thxs!",
                              "invalid-feedback": _vm.invalidFeedback,
                              state: _vm.state,
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-1",
                                state: _vm.state,
                                trim: "",
                              },
                              on: { change: _vm.onChange },
                              model: {
                                value: _vm.other,
                                callback: function ($$v) {
                                  _vm.other = $$v;
                                },
                                expression: "other",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          { attrs: { size: "sm", variant: "info" } },
                          [_vm._v("Login / connexion")]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ],
              1
            ),
          ],
          1
        )
      : _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c(
              "b-button",
              {
                attrs: { variant: "outline-danger", size: "sm" },
                on: { click: _vm.logout },
              },
              [_vm._v("Logout")]
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.session.webId, target: "_blank" } }, [
              _vm._v("pod"),
            ]),
          ],
          1
        ),
    _vm._v(" "),
    _c("div", {}),
  ])
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-5ce0c98e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .login{\nfloat: left\n} */\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidLogin.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiIA;;GAEA","file":"SolidLogin.vue","sourcesContent":["<template>\n  <span class=\"login\">\n    <!-- <b-icon-person-circle></b-icon-person-circle> -->\n    <!-- https://vuetailwind.com/components/button -->\n        <!-- <button class=\"mx-2 px-2 py-1 text-xs rounded text-gray-800 border focus:outline-none hover:bg-gray-100\">Default</button>\n    <button class=\"mx-2 px-4 py-2 text-sm rounded text-white bg-red-500 focus:outline-none hover:bg-red-400\">Danger</button>\n        <button class=\"mx-2 px-4 py-2 text-sm text-blue-600 focus:outline-none hover:underline\">Link</button> -->\n    <div v-if=\"session == null || session.isLoggedIn == false\" class=\"d-flex align-items-center\">\n      <b-form-group>\n\n        <!-- <b-dropdown id=\"dropdown-login\"\n        text=\"Login\"\n        class=\"m-md-2\"\n        size=\"sm\"\n        variant=\"success\">\n        <b-dropdown-item v-for=\"issuer in issuers\" :key=\"issuer.value\" @click=\"login(issuer.value)\">\n        {{issuer.text}}\n      </b-dropdown-item>\n    </b-dropdown> -->\n\n\n    <b-form-select autofocus size=\"sm\" v-model=\"issuer\"\n    :options=\"issuers\" @change=\"login\">\n    <template #first>\n      <b-form-select-option :value=\"null\" disabled>-- Login / Connexion --</b-form-select-option>\n    </template>\n\n  </b-form-select>\n\n  <div v-if=\"issuer == 'other'\">\n    <b-form-group\n    id=\"fieldset-1\"\n    description= \"ex: `https://solidcommunity.net`\"\n    label=\"url of your pod provider\"\n    label-for=\"input-1\"\n    valid-feedback=\"Thxs!\"\n    :invalid-feedback=\"invalidFeedback\"\n    :state=\"state\"\n    >\n\n    <b-form-input id=\"input-1\" v-model=\"other\" :state=\"state\" @change=\"onChange\" trim></b-form-input>\n  </b-form-group>\n\n  <b-button size=\"sm\" variant=\"info\">Login / connexion</b-button>\n</div>\n</b-form-group>\n</div>\n\n<div v-else class=\"d-flex align-items-center\">\n  <b-button @click=\"logout\" variant=\"outline-danger\" size=\"sm\">Logout</b-button>\n  <a :href=\"session.webId\" target=\"_blank\">pod</a>\n</div>\n<div class=\"\">\n\n  </div>\n</span>\n</template>\n\n<script>\nexport default {\n  name: \"SolidLogin\",\n  props: [\n    \"clientName\"\n  ],\n  data() {\n    return {\n      issuers: [\n        { value: \"https://solidcommunity.net\", text: 'SolidCommunity.net (NSS)' },\n        { value: \"https://solidweb.org\", text: 'Solidweb.org (NSS)' },\n        { value: 'https://solidweb.me/', text: 'Solidweb.me (CSS)'},\n        { value: \"https://broker.pod.inrupt.com\", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },\n        { value: \"https://inrupt.net\", text: 'Inrupt.net (NSS)' },\n        { value: \"https://dev.inrupt.net\", text: 'dev.inrupt.net (NSS)' },\n        { value: \"https://trinpod.us/\", text: 'Trinpod.us (hs ?)'},\n        { value: \"other\", text: 'Autre / Other' },\n      ],\n      issuer: null,\n      restore: true,\n      other: \"\"\n    }\n  },\n  created(){\n    this.$checkSession()\n  },\n  methods:{\n    onInput(){\n      console.log(\"input\", this.other)\n    },\n    onChange(){\n      console.log(\"change\", this.other)\n      if (this.other != undefined && this.other.length != undefined)  {\n        this.issuer = this.other\n        this.login(this.issuer)\n      }\n    },\n    login(issuer){\n      console.log(issuer)\n      this.issuer = issuer\n      if (this.issuer != null && this.issuer != \"other\"){\n        console.log(this.issuer)\n        let params = {issuer : this.issuer, clientName: this.clientName}\n        this.$login(params)\n      }\n    },\n    logout(){\n      this.$logout()\n    }\n  },\n  computed:{\n    session(){\n     return this.$store.state.vue2_solid_store.session\n    },\n    pod(){\n     return this.$store.state.vue2_solid_store.pod\n    },\n    state() {\n      return this.other.startsWith('http')\n    },\n    invalidFeedback() {\n      if (this.other.length> 0 && !this.other.startsWith('http')) {\n        return \"the url of your pod provider should start with `http`\"\n      }\n      return \"the url of your pod provider, not your webId ! \"\n    }\n  }\n}\n</script>\n\n<style>\n/* .login{\nfloat: left\n} */\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$8 = {
  name: 'SolidExplorer',
  data(){
    return {
      toggleExplorer: true,
      toggle2D: false,
      toggle3D: false
    }
  },
  created(){
    this.init();
  },
  methods: {
    async init(){
      let storage = null;
      if(this.webId != null){
        storage = await this.$getStorage(this.webId);
      }else {
        this.friends = [];
      }
      this.$store.commit('vue2_solid_store/setPath', storage);
    },
    async setPath(p){
      let storage = {type: 'pod', path: p};
      storage = await this.$getThingAll(storage);
      this.$store.commit('vue2_solid_store/setPath', storage);
    }
  },
  watch:{
    webId(){
      this.init();
    }
  },
  computed:{
    webId(){
      return this.$store.state.vue2_solid_store.webId
    },
    paths(){
      return this.$store.state.vue2_solid_store.paths
    },
  }

};

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "b-card",
    { staticClass: "solid-explorer" },
    [
      _c(
        "b-card-header",
        [
          _c(
            "b-button",
            {
              attrs: {
                size: "sm",
                pressed: _vm.toggleExplorer,
                variant: _vm.toggleExplorer ? "primary" : "light",
              },
              on: {
                "update:pressed": function ($event) {
                  _vm.toggleExplorer = $event;
                },
              },
            },
            [_vm._v("Explorer")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: {
                size: "sm",
                pressed: _vm.toggle2D,
                variant: _vm.toggle2D ? "primary" : "light",
              },
              on: {
                "update:pressed": function ($event) {
                  _vm.toggle2D = $event;
                },
              },
            },
            [_vm._v("2D")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: {
                size: "sm",
                pressed: _vm.toggle3D,
                variant: _vm.toggle3D ? "primary" : "light",
              },
              on: {
                "update:pressed": function ($event) {
                  _vm.toggle3D = $event;
                },
              },
            },
            [_vm._v("3D")]
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "m-md-2",
              attrs: {
                id: "dropdown-1",
                text: _vm.paths.slice(-1)[0].path,
                variant: "primary",
                size: "sm",
              },
            },
            _vm._l(_vm.paths, function (p) {
              return _c(
                "b-dropdown-item",
                {
                  key: p.path,
                  on: {
                    click: function ($event) {
                      return _vm.setPath(p.path)
                    },
                  },
                },
                [_vm._v(_vm._s(p.path))]
              )
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _vm.toggleExplorer
            ? _c("SolidBrowser", { staticClass: "col" })
            : _vm._e(),
          _vm._v(" "),
          _vm.toggle2D ? _c("Explorer2D", { staticClass: "col" }) : _vm._e(),
          _vm._v(" "),
          _vm.toggle3D ? _c("Explorer3D", { staticClass: "col" }) : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-4b43989f_0", { source: "\n.solid-explorer[data-v-4b43989f] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidExplorer.vue"],"names":[],"mappings":";AAuEA;AAEA","file":"SolidExplorer.vue","sourcesContent":["<template>\n\n  <b-card\n  class=\"solid-explorer\"\n  >\n  <b-card-header>\n    <b-button size=\"sm\" :pressed.sync=\"toggleExplorer\" :variant=\"toggleExplorer ? 'primary' : 'light'\">Explorer</b-button>\n    <b-button size=\"sm\" :pressed.sync=\"toggle2D\" :variant=\"toggle2D ? 'primary' : 'light'\">2D</b-button>\n    <b-button size=\"sm\" :pressed.sync=\"toggle3D\" :variant=\"toggle3D ? 'primary' : 'light'\">3D</b-button>\n\n    <b-dropdown id=\"dropdown-1\" :text=\"paths.slice(-1)[0].path\" class=\"m-md-2\" variant=\"primary\" size=\"sm\">\n      <b-dropdown-item v-for=\"p in paths\" :key=\"p.path\" @click=\"setPath(p.path)\">{{p.path}}</b-dropdown-item>\n    </b-dropdown>\n\n  </b-card-header>\n  <b-row>\n    <SolidBrowser v-if=\"toggleExplorer\" class=\"col\" />\n    <Explorer2D v-if=\"toggle2D\" class=\"col\"/>\n    <Explorer3D v-if=\"toggle3D\" class=\"col\"/>\n  </b-row>\n\n</b-card>\n</template>\n\n<script>\nexport default {\n  name: 'SolidExplorer',\n  data(){\n    return{\n      toggleExplorer: true,\n      toggle2D: false,\n      toggle3D: false\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      let storage = null\n      if(this.webId != null){\n        storage = await this.$getStorage(this.webId)\n      }else{\n        this.friends = []\n      }\n      this.$store.commit('vue2_solid_store/setPath', storage)\n    },\n    async setPath(p){\n      let storage = {type: 'pod', path: p}\n      storage = await this.$getThingAll(storage)\n      this.$store.commit('vue2_solid_store/setPath', storage)\n    }\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  },\n  computed:{\n    webId(){\n      return this.$store.state.vue2_solid_store.webId\n    },\n    paths(){\n      return this.$store.state.vue2_solid_store.paths\n    },\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-explorer {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = "data-v-4b43989f";
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//


var script$7 = {
  name: 'SolidProfile',
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "b-card-group",
    { staticClass: "solid-profile", attrs: { deck: "" } },
    [_c("SolidUser"), _vm._v(" "), _c("SolidFriends"), _vm._v(" "), _c("hr")],
    1
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
  name: 'SolidUser',
  data(){
    return {
      user: null
    }
  },
  created(){
    this.init();
  },
  methods: {
    async init(){
      if(this.webId != null){
        this.user = await this.$getUser(this.webId);
      }else {
        this.user = null;
      }


    }
  },
  watch:{
    webId(){
      this.init();
    }
  },
  computed:{
    webId(){
      return this.$store.state.vue2_solid_store.webId
    },
  }

};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.user != null
    ? _c(
        "b-card",
        {
          staticClass: "mb-2 solid-user",
          staticStyle: { "max-width": "20rem" },
          attrs: {
            title: _vm.user.name || "no name",
            "img-src": _vm.user.photo || "no photo",
            "img-alt": "Image",
            "img-top": "",
            tag: "article",
          },
        },
        [_c("b-card-header"), _vm._v(" "), _c("b-card-text")],
        1
      )
    : _vm._e()
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-aec655c4_0", { source: "\n.solid-user[data-v-aec655c4] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidUser.vue"],"names":[],"mappings":";AAkEA;AAEA","file":"SolidUser.vue","sourcesContent":["<template>\n\n  <!-- <div>\n  User : {{ webId}}\n  <hr>\n  user : {{ user}}\n\n</div> -->\n<b-card v-if=\"user != null\"\n:title=\"user.name || 'no name'\"\n:img-src=\"user.photo || 'no photo'\"\nimg-alt=\"Image\"\nimg-top\ntag=\"article\"\nstyle=\"max-width: 20rem;\"\nclass=\"mb-2 solid-user\"\n>\n<b-card-header>\n\n</b-card-header>\n<b-card-text>\n\n</b-card-text>\n\n<!-- <b-button href=\"#\" variant=\"primary\">Go somewhere</b-button> -->\n</b-card>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidUser',\n  data(){\n    return {\n      user: null\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      if(this.webId != null){\n        this.user = await this.$getUser(this.webId)\n      }else{\n        this.user = null\n      }\n\n\n    }\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  },\n  computed:{\n    webId(){\n      return this.$store.state.vue2_solid_store.webId\n    },\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-user {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-aec655c4";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$5 = {
  name: 'SolidUserSmall',
  props: ['webId'],
  data(){
    return {
      user: null,
      friends:[]
    }
  },
  created(){
    this.init();
  },
  methods: {
    async init(){
      console.log('get!user',this.webId);
      this.user = await this.$getUser(this.webId) ||
      console.log(this.user);
      this.friends = await this.$getFriends(this.webId);
      // this.friendsLength = friends.length
    },

  },
  watch:{
    webId(){
      this.init();
    }
  }

};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", [
    _vm.user != null
      ? _c(
          "span",
          { staticClass: "d-flex align-items-center" },
          [
            _c("img", {
              staticClass: "mr-3",
              attrs: { src: _vm.user.photo, width: "40px" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "mr-auto" }, [
              _vm._v(_vm._s(_vm.user.name || _vm.webId)),
            ]),
            _vm._v(" "),
            _c("b-badge", [_vm._v(_vm._s(_vm.friends.length))]),
          ],
          1
        )
      : _c("span", [
          _c("small", [_c("i", [_vm._v("...Loading " + _vm._s(_vm.webId))])]),
        ]),
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-e54fd734_0", { source: "\n.solid-user[data-v-e54fd734] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidUserSmall.vue"],"names":[],"mappings":";AAwDA;AAEA","file":"SolidUserSmall.vue","sourcesContent":["<template>\n\n  <!-- <div>\n  User : {{ webId}}\n  <hr>\n  user : {{ user}}\n\n</div> -->\n<span>\n  <span v-if=\"user != null\" class=\"d-flex align-items-center\">\n    <!-- {{user.photo}} {{user.name}} -->\n    <!-- <b-avatar variant=\"info\" :src=\"user.photo\" class=\"mr-3\"></b-avatar> -->\n<img :src=\"user.photo\" class=\"mr-3\" width=\"40px\" />\n\n    <span class=\"mr-auto\">{{user.name || webId}}</span>\n    <b-badge>{{ friends.length}}</b-badge>\n\n  </span>\n  <span v-else><small><i>...Loading {{webId}}</i></small></span>\n</span>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidUserSmall',\n  props: ['webId'],\n  data(){\n    return {\n      user: null,\n      friends:[]\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      console.log('get!user',this.webId)\n      this.user = await this.$getUser(this.webId) ||\n      console.log(this.user)\n      this.friends = await this.$getFriends(this.webId)\n      // this.friendsLength = friends.length\n    },\n\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-user {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-e54fd734";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
  name: 'SolidFriends',
  data(){
    return {
      friends: []
    }
  },
  created(){
    this.init();
  },
  methods: {
    async init(){
      if(this.webId != null){
        this.friends = await this.$getFriends(this.webId);
      }else {
        this.friends = [];
      }
    },
    addFriend(){
      console.log('add');
    },
    setUser(webId){
      console.log('setUser', webId);
      this.$store.commit('vue2_solid_store/setWebId', webId);
    }
  },
  watch:{
    webId(){
      this.init();
    }
  },
  computed:{
    webId(){
      return this.$store.state.vue2_solid_store.webId
    },
    history(){
      return this.$store.state.vue2_solid_store.history
    },
    session(){
      return this.$store.state.vue2_solid_store.session
    },
  }

};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "b-card",
    { staticClass: "solid-friends", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _vm._v("\n    Friends "),
          _vm.session != null && _vm.session.webId != _vm.webId
            ? _c(
                "b-button",
                {
                  staticClass: "ml-3",
                  attrs: { variant: "primary", size: "sm" },
                  on: {
                    click: function ($event) {
                      return _vm.setUser(_vm.session.webId)
                    },
                  },
                },
                [_vm._v("Me")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "m-md-2",
              attrs: {
                id: "dropdown-1",
                text: "history",
                variant: "primary",
                size: "sm",
              },
            },
            _vm._l(_vm.history, function (h) {
              return _c(
                "b-dropdown-item",
                {
                  key: h,
                  on: {
                    click: function ($event) {
                      return _vm.setUser(h)
                    },
                  },
                },
                [_vm._v(_vm._s(h))]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: { disabled: "", variant: "primary", size: "sm" },
              on: { click: _vm.addFriend },
            },
            [_vm._v("+")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-list-group",
        { staticClass: "scroll", attrs: { flush: "" } },
        _vm._l(_vm.friends, function (f) {
          return _c(
            "b-list-group-item",
            {
              key: f.webId,
              attrs: { button: "" },
              on: {
                click: function ($event) {
                  return _vm.setUser(f.webId)
                },
              },
            },
            [_c("SolidUserSmall", { attrs: { webId: f.webId } })],
            1
          )
        }),
        1
      ),
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-513b9542_0", { source: "\n.solid-friends[data-v-513b9542] {\n}\n.scroll[data-v-513b9542]{\n  max-height: 50vh;\n  margin-bottom: 10px;\n  overflow-y:scroll;\n  -webkit-overflow-scrolling: touch;\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidFriends.vue"],"names":[],"mappings":";AA0EA;AAEA;AACA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iCAAA;AACA","file":"SolidFriends.vue","sourcesContent":["<template>\n\n  <b-card\n  class=\"solid-friends\"\n  no-body>\n  <b-card-header>\n    Friends <b-button v-if=\"session != null && session.webId != webId\" @click=\"setUser(session.webId)\" variant=\"primary\" size=\"sm\" class=\"ml-3\">Me</b-button>\n    <b-dropdown id=\"dropdown-1\" text=\"history\" class=\"m-md-2\" variant=\"primary\" size=\"sm\">\n      <b-dropdown-item v-for=\"h in history\" :key=\"h\" @click=\"setUser(h)\">{{h}}</b-dropdown-item>\n    </b-dropdown>\n    <b-button disabled @click=\"addFriend\" variant=\"primary\" size=\"sm\">+</b-button>\n\n  </b-card-header>\n  <!-- webId : {{ webId}}\n  friends : {{ friends}} -->\n  <b-list-group flush class=\"scroll\">\n    <b-list-group-item button v-for=\"f in friends\" :key=\"f.webId\" @click=\"setUser(f.webId)\">\n      <SolidUserSmall :webId=\"f.webId\"  />\n      <!-- {{f.webId}} -->\n    </b-list-group-item>\n  </b-list-group>\n\n</b-card>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidFriends',\n  data(){\n    return {\n      friends: []\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      if(this.webId != null){\n        this.friends = await this.$getFriends(this.webId)\n      }else{\n        this.friends = []\n      }\n    },\n    addFriend(){\n      console.log('add')\n    },\n    setUser(webId){\n      console.log('setUser', webId)\n      this.$store.commit('vue2_solid_store/setWebId', webId)\n    }\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  },\n  computed:{\n    webId(){\n      return this.$store.state.vue2_solid_store.webId\n    },\n    history(){\n      return this.$store.state.vue2_solid_store.history\n    },\n    session(){\n      return this.$store.state.vue2_solid_store.session\n    },\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-friends {\n\n}\n.scroll{\n  max-height: 50vh;\n  margin-bottom: 10px;\n  overflow-y:scroll;\n  -webkit-overflow-scrolling: touch;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-513b9542";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//

  var script$3 = {
    name: 'SolidStorage',


  };

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "solid-storage" })
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-8e5e676a_0", { source: "\n.solid-storage[data-v-8e5e676a] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidStorage.vue"],"names":[],"mappings":";AAeA;AAEA","file":"SolidStorage.vue","sourcesContent":["<template>\n  <div class=\"solid-storage\">\n\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'SolidStorage',\n\n\n  }\n</script>\n\n<style lang=\"css\" scoped>\n  .solid-storage {\n\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-8e5e676a";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  name: 'SolidBrowser',
  methods: {
    async clickContainer(c){
      console.log("container",c);
      let storage = {type: 'pod', path: c.url};
      storage = await this.$getThingAll(storage);
      this.$store.commit('vue2_solid_store/setPath', storage);
    },
    async clickFile(f){
      console.log("file",f);
    }
  },
  computed:{
    path(){
      return this.$store.state.vue2_solid_store.path
    }
  }


};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "b-list-group",
    { staticClass: "scroll", attrs: { flush: "" } },
    [
      _vm._l(_vm.path.containers, function (c) {
        return _c(
          "b-list-group-item",
          {
            key: c.url,
            attrs: { button: "" },
            on: {
              click: function ($event) {
                return _vm.clickContainer(c)
              },
            },
          },
          [_vm._v("\n    " + _vm._s(c.url) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.path.files, function (f) {
        return _c(
          "b-list-group-item",
          {
            key: f.url,
            attrs: { button: "" },
            on: {
              click: function ($event) {
                return _vm.clickFile(f)
              },
            },
          },
          [_vm._v("\n    " + _vm._s(f.url) + "\n  ")]
        )
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5128ac97_0", { source: "\n.solid-browser[data-v-5128ac97] {\n}\n.scroll[data-v-5128ac97]{\n  max-height: 50vh;\n  margin-bottom: 10px;\n  overflow-y:scroll;\n  -webkit-overflow-scrolling: touch;\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidBrowser.vue"],"names":[],"mappings":";AAsCA;AAEA;AACA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iCAAA;AACA","file":"SolidBrowser.vue","sourcesContent":["<template>\n\n  <b-list-group flush class=\"scroll\">\n    <b-list-group-item button v-for=\"c in path.containers\" :key=\"c.url\" @click=\"clickContainer(c)\">\n      {{c.url}}\n    </b-list-group-item>\n    <b-list-group-item button v-for=\"f in path.files\" :key=\"f.url\" @click=\"clickFile(f)\">\n      {{f.url}}\n    </b-list-group-item>\n  </b-list-group>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidBrowser',\n  methods: {\n    async clickContainer(c){\n      console.log(\"container\",c)\n      let storage = {type: 'pod', path: c.url}\n      storage = await this.$getThingAll(storage)\n      this.$store.commit('vue2_solid_store/setPath', storage)\n    },\n    async clickFile(f){\n      console.log(\"file\",f)\n    }\n  },\n  computed:{\n    path(){\n      return this.$store.state.vue2_solid_store.path\n    }\n  }\n\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-browser {\n\n}\n.scroll{\n  max-height: 50vh;\n  margin-bottom: 10px;\n  overflow-y:scroll;\n  -webkit-overflow-scrolling: touch;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5128ac97";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$1 = {
  name: 'Explorer2D',
  computed:{
    path(){
      return this.$store.state.vue2_solid_store.path
    }
  }

};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "explorer-2d" }, [
    _vm._v("\n  2d " + _vm._s(_vm.path) + "\n"),
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-2b6f17d8_0", { source: "\n.explorer-2d[data-v-2b6f17d8] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/Explorer2D.vue"],"names":[],"mappings":";AAmBA;AAEA","file":"Explorer2D.vue","sourcesContent":["<template>\n  <div class=\"explorer-2d\">\n    2d {{path}}\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'Explorer2D',\n  computed:{\n    path(){\n      return this.$store.state.vue2_solid_store.path\n    }\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.explorer-2d {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-2b6f17d8";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//

  var script = {
    name: 'Explorer3D',
    computed:{
      path(){
        return this.$store.state.vue2_solid_store.path
      }
    }

  };

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "explorer-3d" }, [
    _vm._v("\n3d " + _vm._s(_vm.path) + "\n  "),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-7dbbc09a_0", { source: "\n.explorer-3d[data-v-7dbbc09a] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/Explorer3D.vue"],"names":[],"mappings":";AAmBA;AAEA","file":"Explorer3D.vue","sourcesContent":["<template>\n  <div class=\"explorer-3d\">\n3d {{path}}\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'Explorer3D',\n    computed:{\n      path(){\n        return this.$store.state.vue2_solid_store.path\n      }\n    }\n\n  }\n</script>\n\n<style lang=\"css\" scoped>\n  .explorer-3d {\n\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-7dbbc09a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

var components = {
  SolidLogin: __vue_component__$9,
  SolidExplorer: __vue_component__$8,
  SolidProfile: __vue_component__$7,
  SolidFriends: __vue_component__$4,
  SolidUser: __vue_component__$6,
  SolidUserSmall: __vue_component__$5,
  SolidStorage: __vue_component__$3,
  SolidBrowser: __vue_component__$2,
  Explorer2D: __vue_component__$1,
  Explorer3D: __vue_component__
};

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
  path: null
});

const mutations = {
  setSession(state, s){
    console.log("session",s);
    state.session = s;
  },
  setPod(state, p){
    state.pod = p;
  },
  setWebId(state, w){
    console.log("webId",w);
    state.history = state.history.filter(x => x != w);
    state.history.push(w);
    state.webId = w;
  },
  setPath(state, p){
    state.path = p;
    state.paths = state.paths.filter(x => x.path != p.path);
    p != null ? state.paths.push(p) : "";
  }
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

};

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
};

var vue2_solid_store = {
  namespaced: true,
  state,
  actions,
  mutations
};

const LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL = "solid_session_restore_url";

const Vue2Solid = {
  install (Vue, options) {
    let store = options.store;
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }

    Vue.use(BootstrapVue);
    // Vue.use(BIconLink)
    // Vue.use(BIconEye)
    // Vue.use(BIconShare)
    // Vue.use(BIconFileArrowUp)
    // Vue.use(BIconFileArrowDown)
    // Vue.use(BIconClipboardPlus)
    // Vue.use(BIconCloudUpload)
    Vue.use(BootstrapVueIcons);


    // Vue.component(componentA.name, componentA);
    // Vue.component(componentB.name, componentB);

    const storeName = 'vue2_solid_store';// While app only available AFTER new Vue() in main.js...
    // Add store only once.
    if(!store.hasModule(storeName)) {
      store.registerModule(storeName, vue2_solid_store);
    }


    // Globals

    Vue.prototype.$checkSession = async function(){
      localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, window.location.toString());
      // console.log("check session", document.location)
      // localStorage.setItem(Date.now, document.location)

      sc.onSessionRestore((url) => {
        history.replaceState(null, "", url);
      });


      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then(async (session) => {
        if(session.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${session.webId}]`);
          store.commit('vue2_solid_store/setSession',session);
          store.commit('vue2_solid_store/setWebId',session.webId);
          // let session = sc.getDefaultSession()
          //   console.log(session)
          // await this.$getPodInfosFromSession(session)
          // This line is not reached until you are successfully logged in
          localStorage.setItem(LOCAL_STORAGE_KEY__SOLID_SESSION_RESTORE_URL, "");
        }
      });

    };

    Vue.prototype.$login = async function(params){
      console.log("login", params);
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: params.issuer,
          redirectUrl: window.location.href,
          clientName: params.clientName //|| "clientName not provided see vue2_solid doc"
        });
      }
    };

    Vue.prototype.$logout = async function(){
      let session = sc.getDefaultSession();
      await session.logout();
      store.commit('vue2_solid_store/setSession',null);
      store.commit('vue2_solid_store/setPod', null);
      //store.dispatch('nodes/clearStore')
    };

    Vue.prototype.$getUser = async function(webId){
      let user = {wedId: webId};
      try{
        console.log("user before",user);
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        user.name = await getStringNoLocale(profile, FOAF.name);
        // user.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        user.storage = await getUrl(profile, WS.storage)  || webId.split('/').slice(0,-2).join('/')+'/';
        user.photo = await getUrl(profile, VCARD.hasPhoto);
        console.log("user after",user);
      }catch(e)
      {
        console.log("erreur",e);
        user.name = "can not load "+webId;
      }
      return user
    };

    Vue.prototype.$getFriends = async function(webId){
      let friends = [];
      try{
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        friends = await getUrlAll(profile, FOAF.knows).map(f => {return {webId: f}});
      }catch(e)
      {
        console.log("erreur",e);
      }
      return friends
    };

    Vue.prototype.$getStorage = async function(webId){
      let storage = {type: 'pod'};
      try{
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        storage.path = await getUrl(profile, WS.storage)  || webId.split('/').slice(0,-2).join('/')+'/';
        storage.permissions = null;
        storage = await this.$getThingAll(storage);
      }catch(e)
      {
        console.log("erreur",e);
      }
      console.log(storage);
      return storage
    };

    Vue.prototype.$getThingAll = async function(storage){
      try{
        const dataset = await getSolidDataset( storage.path, { fetch: sc.fetch });
        let things  = await getThingAll( dataset );
        storage.containers = things.filter(t => t.url.endsWith('/') && t.url!= storage.path);
        storage.files = things.filter(t => !t.url.endsWith('/'));
      }catch(e)
      {
        console.log("erreur",e);
      }
      return storage
    };

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
};

// export {componentA, componentB}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Solid);
}

export { Vue2Solid as default };
