import { getSolidDataset, getThing, getStringNoLocale, getUrl, getUrlAll } from '@inrupt/solid-client';
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

var script$8 = {
  name: 'InputText',
  data(){
    return {
      value: 3
    }
  },
  methods:{
    inc(){
      this.$store.commit('vue2_solid_store/incremente', this.value);
    },
    dec(){
      this.$store.commit('vue2_solid_store/decremente', this.value);
    }
  },
  computed: {
    getSharedStoreState() {
      return this.$store.state.vue2_solid_store.foo - 1;
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

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value",
        },
      ],
      attrs: { type: "text" },
      domProps: { value: _vm.value },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value;
        },
      },
    }),
    _vm._v(" "),
    _c("div", [_vm._v("Foo: " + _vm._s(_vm.getSharedStoreState))]),
    _vm._v(" "),
    _c("button", { on: { click: _vm.inc } }, [_vm._v("inc")]),
    _vm._v(" "),
    _c("button", { on: { click: _vm.dec } }, [_vm._v("dec")]),
  ])
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

//
//
//

var script$7 = {
  name: 'InputTextarea'
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("textarea")
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
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {
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
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-752ef2d8_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .login{\nfloat: left\n} */\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidLogin.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6HA;;GAEA","file":"SolidLogin.vue","sourcesContent":["<template>\n  <span class=\"login\">\n    <!-- <b-icon-person-circle></b-icon-person-circle> -->\n    <div v-if=\"session == null || session.isLoggedIn == false\" class=\"d-flex align-items-center\">\n      <b-form-group>\n\n        <!-- <b-dropdown id=\"dropdown-login\"\n        text=\"Login\"\n        class=\"m-md-2\"\n        size=\"sm\"\n        variant=\"success\">\n        <b-dropdown-item v-for=\"issuer in issuers\" :key=\"issuer.value\" @click=\"login(issuer.value)\">\n        {{issuer.text}}\n      </b-dropdown-item>\n    </b-dropdown> -->\n\n\n    <b-form-select autofocus size=\"sm\" v-model=\"issuer\"\n    :options=\"issuers\" @change=\"login\">\n    <template #first>\n      <b-form-select-option :value=\"null\" disabled>-- Login / Connexion --</b-form-select-option>\n    </template>\n\n  </b-form-select>\n\n  <div v-if=\"issuer == 'other'\">\n    <b-form-group\n    id=\"fieldset-1\"\n    description= \"ex: `https://solidcommunity.net`\"\n    label=\"url of your pod provider\"\n    label-for=\"input-1\"\n    valid-feedback=\"Thxs!\"\n    :invalid-feedback=\"invalidFeedback\"\n    :state=\"state\"\n    >\n\n    <b-form-input id=\"input-1\" v-model=\"other\" :state=\"state\" @change=\"onChange\" trim></b-form-input>\n  </b-form-group>\n\n  <b-button size=\"sm\" variant=\"info\">Login / connexion</b-button>\n</div>\n</b-form-group>\n</div>\n\n<div v-else class=\"d-flex align-items-center\">\n  <b-button @click=\"logout\" variant=\"outline-danger\" size=\"sm\">Logout</b-button>\n  <a :href=\"session.webId\" target=\"_blank\">pod</a>\n</div>\n<div class=\"\">\n\n  </div>\n</span>\n</template>\n\n<script>\nexport default {\n  name: \"SolidLogin\",\n  props: [\n    \"clientName\"\n  ],\n  data() {\n    return {\n      issuers: [\n        { value: \"https://solidcommunity.net\", text: 'SolidCommunity.net (NSS)' },\n        { value: \"https://solidweb.org\", text: 'Solidweb.org (NSS)' },\n        { value: 'https://solidweb.me/', text: 'Solidweb.me (CSS)'},\n        { value: \"https://broker.pod.inrupt.com\", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },\n        { value: \"https://inrupt.net\", text: 'Inrupt.net (NSS)' },\n        { value: \"https://dev.inrupt.net\", text: 'dev.inrupt.net (NSS)' },\n        { value: \"https://trinpod.us/\", text: 'Trinpod.us (hs ?)'},\n        { value: \"other\", text: 'Autre / Other' },\n      ],\n      issuer: null,\n      restore: true,\n      other: \"\"\n    }\n  },\n  created(){\n    this.$checkSession()\n  },\n  methods:{\n    onInput(){\n      console.log(\"input\", this.other)\n    },\n    onChange(){\n      console.log(\"change\", this.other)\n      if (this.other != undefined && this.other.length != undefined)  {\n        this.issuer = this.other\n        this.login(this.issuer)\n      }\n    },\n    login(issuer){\n      console.log(issuer)\n      this.issuer = issuer\n      if (this.issuer != null && this.issuer != \"other\"){\n        console.log(this.issuer)\n        let params = {issuer : this.issuer, clientName: this.clientName}\n        this.$login(params)\n      }\n    },\n    logout(){\n      this.$logout()\n    }\n  },\n  computed:{\n    session(){\n     return this.$store.state.vue2_solid_store.session\n    },\n    pod(){\n     return this.$store.state.vue2_solid_store.pod\n    },\n    state() {\n      return this.other.startsWith('http')\n    },\n    invalidFeedback() {\n      if (this.other.length> 0 && !this.other.startsWith('http')) {\n        return \"the url of your pod provider should start with `http`\"\n      }\n      return \"the url of your pod provider, not your webId ! \"\n    }\n  }\n}\n</script>\n\n<style>\n/* .login{\nfloat: left\n} */\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
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

var script$5 = {
  name: 'SolidBrowser',
  // data(){
  //   return {
  //     profile: null
  //   }
  // },
  // mounted(){
  //   let pod = this.$store.state.vue2_solid_store.pod
  //   console.log("created", pod)
  // },

  watch:{
    pod(){
      console.log("pod in profile", this.pod);
    },
    // async session(){
    //   console.log("session in browser", this.session)
    //   this.profile = await this.$getPodInfosFromSession(this.session)
    // },


  },
  computed:{
    pod(){
     return this.$store.state.vue2_solid_store.pod
    },
    session(){
    return this.$store.state.vue2_solid_store.session
    },
  }


};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-container", [
    _vm._v(
      "\n    Browser\nPOD : " +
        _vm._s(_vm.pod) +
        "\n    session " +
        _vm._s(_vm.session) +
        "\n    "
    ),
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
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


var script$4 = {
  name: 'SolidProfile',
  computed:{
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
  return _vm.session
    ? _c(
        "b-card-group",
        { staticClass: "solid-profile", attrs: { deck: "" } },
        [
          _vm.session != null
            ? _c("SolidUser", { attrs: { webId: _vm.session.webId } })
            : _vm._e(),
          _vm._v(" "),
          _vm.session != null
            ? _c("SolidFriends", { attrs: { webId: _vm.session.webId } })
            : _vm._e(),
          _vm._v("\n  session   " + _vm._s(_vm.session) + "\n"),
        ],
        1
      )
    : _vm._e()
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
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

var script$3 = {
  name: 'SolidUser',
  props: ['webId'],
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
      console.log('get!user',this.webId);
      this.user = await this.$getUser(this.webId);
      console.log(this.user);
    }
  },
  watch:{
    webId(){
      this.init();
    }
  }

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {
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
        [_c("b-card-text")],
        1
      )
    : _vm._e()
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-44fd83e0_0", { source: "\n.solid-user[data-v-44fd83e0] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidUser.vue"],"names":[],"mappings":";AAuDA;AAEA","file":"SolidUser.vue","sourcesContent":["<template>\n\n  <!-- <div>\n    User : {{ webId}}\n<hr>\nuser : {{ user}}\n\n  </div> -->\n  <b-card v-if=\"user != null\"\n  :title=\"user.name || 'no name'\"\n  :img-src=\"user.photo || 'no photo'\"\n  img-alt=\"Image\"\n  img-top\n  tag=\"article\"\n  style=\"max-width: 20rem;\"\n  class=\"mb-2 solid-user\"\n  >\n  <b-card-text>\n\n</b-card-text>\n\n<!-- <b-button href=\"#\" variant=\"primary\">Go somewhere</b-button> -->\n</b-card>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidUser',\n  props: ['webId'],\n  data(){\n    return {\n      user: null\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      console.log('get!user',this.webId)\n      this.user = await this.$getUser(this.webId)\n      console.log(this.user)\n    }\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-user {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-44fd83e0";
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
//
//
//
//
//

var script$2 = {
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
      this.user = await this.$getUser(this.webId);
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
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.user != null
    ? _c(
        "span",
        { staticClass: "d-flex align-items-center" },
        [
          _c("b-avatar", {
            staticClass: "mr-3",
            attrs: { variant: "info", src: _vm.user.photo },
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
    : _vm._e()
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-1f934c33_0", { source: "\n.solid-user[data-v-1f934c33] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidUserSmall.vue"],"names":[],"mappings":";AAmDA;AAEA","file":"SolidUserSmall.vue","sourcesContent":["<template>\n\n  <!-- <div>\n  User : {{ webId}}\n  <hr>\n  user : {{ user}}\n\n</div> -->\n<span v-if=\"user != null\" class=\"d-flex align-items-center\">\n  <!-- {{user.photo}} {{user.name}} -->\n  <b-avatar variant=\"info\" :src=\"user.photo\" class=\"mr-3\"></b-avatar>\n  <span class=\"mr-auto\">{{user.name || webId}}</span>\n  <b-badge>{{ friends.length}}</b-badge>\n\n</span>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidUserSmall',\n  props: ['webId'],\n  data(){\n    return {\n      user: null,\n      friends:[]\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      console.log('get!user',this.webId)\n      this.user = await this.$getUser(this.webId)\n      console.log(this.user)\n      this.friends = await this.$getFriends(this.webId)\n      // this.friendsLength = friends.length\n    },\n\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-user {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-1f934c33";
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

var script$1 = {
  name: 'SolidFriends',
  props: ['webId'],
  data(){
    return {
      friends: null
    }
  },
  created(){
    this.init();
  },
  methods: {
    async init(){
      console.log('getFriends',this.webId);
      this.friends = await this.$getFriends(this.webId);
      console.log(this.friends);
    }
  },
  watch:{
    webId(){
      this.init();
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
  return _c(
    "b-card",
    {
      staticClass: "solid-friends",
      attrs: { header: "Friends", "no-body": "" },
    },
    [
      _c(
        "b-list-group",
        { attrs: { flush: "" } },
        _vm._l(_vm.friends, function (f) {
          return _c(
            "b-list-group-item",
            { key: f.webId, attrs: { button: "" } },
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
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-b18c806a_0", { source: "\n.solid-friends[data-v-b18c806a] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidFriends.vue"],"names":[],"mappings":";AAgDA;AAEA","file":"SolidFriends.vue","sourcesContent":["<template>\n\n  <b-card\n  header=\"Friends\"\n  class=\"solid-friends\"\n  no-body>\n  <!-- webId : {{ webId}}\n  friends : {{ friends}} -->\n  <b-list-group flush>\n    <b-list-group-item button v-for=\"f in friends\" :key=\"f.webId\">\n      <SolidUserSmall :webId=\"f.webId\" />\n      <!-- {{f.webId}} -->\n    </b-list-group-item>\n  </b-list-group>\n\n</b-card>\n\n</template>\n\n<script>\nexport default {\n  name: 'SolidFriends',\n  props: ['webId'],\n  data(){\n    return {\n      friends: null\n    }\n  },\n  created(){\n    this.init()\n  },\n  methods: {\n    async init(){\n      console.log('getFriends',this.webId)\n      this.friends = await this.$getFriends(this.webId)\n      console.log(this.friends)\n    }\n  },\n  watch:{\n    webId(){\n      this.init()\n    }\n  }\n\n}\n</script>\n\n<style lang=\"css\" scoped>\n.solid-friends {\n\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-b18c806a";
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
    name: 'SolidStorage',


  };

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "solid-storage" })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-8e5e676a_0", { source: "\n.solid-storage[data-v-8e5e676a] {\n}\n", map: {"version":3,"sources":["/home/smag/dev/vue2_solid/src/SolidStorage.vue"],"names":[],"mappings":";AAeA;AAEA","file":"SolidStorage.vue","sourcesContent":["<template>\n  <div class=\"solid-storage\">\n\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'SolidStorage',\n\n\n  }\n</script>\n\n<style lang=\"css\" scoped>\n  .solid-storage {\n\n  }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-8e5e676a";
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

// import myComponentA from './myComponentA.vue'
// import myComponentB from './myComponentB.vue'

var components = {
  InputTextarea: __vue_component__$7,
  InputText: __vue_component__$8,
  // myComponentA,
  // myComponentB
  SolidLogin: __vue_component__$6,
  SolidBrowser: __vue_component__$5,
  SolidProfile: __vue_component__$4,
  SolidFriends: __vue_component__$1,
  SolidUser: __vue_component__$3,
  SolidUserSmall: __vue_component__$2,
  SolidStorage: __vue_component__
};

// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  // doc: null
  session: null,
  pod: null,
  foo: 12
});

const mutations = {
  setSession(state, s){
    console.log("session",s);
    state.session = s;
  },
  setPod(state, p){
    console.log("pod",p);
    state.pod = p;
    console.log("pod state", state.pod);
  },
  incremente(state, val){
    console.log("inc");
    state.foo += val;
  },
  decremente(state, val ){
    console.log("dec");
    state.foo -= val;
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
      try{
        let user = {wedId: webId};
        console.log("user before",user);
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        user.name = await getStringNoLocale(profile, FOAF.name);
        // user.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        user.storage = await getUrl(profile, WS.storage)  || webId.split('/').slice(0,-2).join('/')+'/';
          user.photo = await getUrl(profile, VCARD.hasPhoto);
        console.log("user after",user);
        return user
        }catch(e)
      {
        console.log("erreur",e);
      }
    };

    Vue.prototype.$getFriends = async function(webId){
      try{
        let friends = [];
        const dataset = await getSolidDataset( webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, webId );
        friends = await getUrlAll(profile, FOAF.knows).map(f => {return {webId: f}});
        console.log(friends);
        return friends
            }catch(e)
      {
        console.log("erreur",e);
      }
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
