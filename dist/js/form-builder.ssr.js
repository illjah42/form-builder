/**
 * Bundle of AWES @awes-io/form-builder
 *
 * Generated: 2019-08-09 10:42:44
 *
 * Version: 0.1.0
 */

'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}//
//
//
//
//
//
var script = {
  name: 'FormBuilder',
  props: {
    formData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      editedData: {}
    };
  },
  computed: {
    currentData: function currentData() {
      return _objectSpread2({}, this.formData, {}, this.editedData);
    }
  },
  methods: {
    setValue: function setValue(path, value) {
      this.$set(this.editedData, path, value);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form-builder"},[_vm._t("default",null,{"currentData":_vm.currentData,"setValue":_vm.setValue})],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-ded2e64c";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FormBuilder = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );var fieldId = 0;
var FieldMixin = {
  inheritArrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: function _default() {
        return "input-".concat(this._fieldId);
      }
    }
  },
  data: function data() {
    return {
      _fieldId: ++fieldId
    };
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return null;
    },
    mergedListeners: function mergedListeners() {
      return this.$listeners;
    }
  }
};var errorId = 0;
var ErrorMixin = {
  data: function data() {
    return {
      _errorId: ++errorId,
      error: '',
      hasError: false
    };
  },
  computed: {
    errorId: function errorId() {
      return "error-".concat(this._errorId);
    }
  },
  methods: {
    setError: function setError(value) {
      this.error = value;
      this.hasError = !!value;
    },
    _onInvalid: function _onInvalid($event) {
      $event.preventDefault();
      this.setError($event.target.validationMessage);
    },
    _onErrorClick: function _onErrorClick() {
      // next line only reset text, status is reset on user input
      this.error = '';
      this.$refs.element && this.$refs.element.focus();
    }
  }
};var TextFieldMixin = {
  mixins: [FieldMixin, ErrorMixin],
  props: {
    value: {
      default: ''
    }
  },
  data: function data() {
    return {
      // next line is for preserving autofilled values when v-model is missing
      inputValue: this.value
    };
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return [{
        'is-filled': !!this.inputValue
      }, {
        'has-label': !!this.label
      }, {
        'has-error': this.hasError
      }];
    },
    mergedListeners: function mergedListeners() {
      return _objectSpread2({}, this.$listeners, {
        input: this._onInput,
        change: this._onInput,
        invalid: this._onInvalid
      });
    }
  },
  watch: {
    value: {
      handler: function handler(newValue) {
        this.inputValue = newValue;
      },
      immediate: true
    }
  },
  methods: {
    _onInput: function _onInput($event) {
      var value = $event.target.value;
      this.inputValue = value;

      if (this.hasError) {
        this.setError('');
      }

      this.$emit($event.type, value);
    }
  }
};//
var script$1 = {
  name: 'FbInput',
  mixins: [TextFieldMixin],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        if (['checkbox', 'radio', 'date', 'password'].includes(type)) {
          console.error("Use <fb-".concat(type, "> instead"));
          return false;
        }

        return true;
      }
    }
  }
};/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-text-field",class:[("is-" + (this.type)) ].concat( _vm.wrapperClasses)},[_vm._ssrNode("<input"+(_vm._ssrAttr("aria-describedby",_vm.errorId))+(_vm._ssrAttrs(Object.assign({}, {id: _vm.id, type: _vm.type, value: _vm.inputValue}, _vm.$attrs)))+" class=\"fb-text-field__element\">"+((!!_vm.label)?("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"fb-text-field__label\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.label)+"\n    ")+"</label>"):"<!---->")+" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-center has-pin-bottom-center",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = "data-v-a11fa1bc";
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbInput = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );//
var script$2 = {
  name: 'FbPassword',
  mixins: [TextFieldMixin],
  data: function data() {
    return {
      type: 'password'
    };
  },
  methods: {
    _switchType: function _switchType() {
      this.type = this.type === 'password' ? 'text' : 'password';
      this.$refs.element && this.$refs.element.focus();
    }
  }
};/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-text-field is-password has-icon",class:_vm.wrapperClasses},[_vm._ssrNode("<input"+(_vm._ssrAttr("aria-describedby",_vm.errorId))+(_vm._ssrAttrs(Object.assign({}, {id: _vm.id, value: _vm.inputValue}, _vm.$attrs, {type: _vm.type})))+" class=\"fb-text-field__element\">"+((!!_vm.label)?("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"fb-text-field__label\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.label)+"\n    ")+"</label>"):"<!---->")+" "),_vm._t("icon",[_c('button',{staticClass:"fb-text-field__icon",attrs:{"type":"button"},on:{"click":_vm._switchType}},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 30 30"}},[_c('path',{attrs:{"d":"M15 5C6 5 .3 14.2.2 14.4a1 1 0 0 0-.2.6 1 1 0 0 0 .2.5S5 25 15 25s14.8-9.3 14.8-9.4a1 1 0 0 0 .2-.6 1 1 0 0 0-.2-.6C29.7 14.2 23.9 5 15 5zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 4a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}}),_vm._v(" "),_c('path',{directives:[{name:"show",rawName:"v-show",value:(_vm.type === 'text'),expression:"type === 'text'"}],attrs:{"d":"M3.5 2.7L27 26L26.4 26.7L3 3.2L3.5 2.7z"}})]),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("toggle password")])])],{"switchType":_vm._switchType}),_vm._ssrNode(" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-center has-pin-bottom-center",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = "data-v-7a10a5a6";
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbPassword = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );//
var script$3 = {
  name: 'FbTextarea',
  mixins: [TextFieldMixin]
};/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-text-field is-textarea",class:_vm.wrapperClasses},[_vm._ssrNode("<textarea"+(_vm._ssrAttr("aria-describedby",_vm.errorId))+(_vm._ssrAttrs(Object.assign({}, {id: _vm.id, value: _vm.inputValue}, _vm.$attrs)))+" class=\"fb-text-field__element\"></textarea>"+((!!_vm.label)?("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"fb-text-field__label\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.label)+"\n    ")+"</label>"):"<!---->")+" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-center has-pin-bottom-center",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = "data-v-23ea2c20";
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbTextarea = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );var script$4 = {
  name: 'FbCheckbox',
  mixins: [FieldMixin, ErrorMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: 'on'
    },
    checked: {
      type: [Array, Boolean],
      default: false
    }
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return {
        'fb-field': !this.$slots.default,
        'has-error': this.hasError
      };
    },
    isChecked: function isChecked() {
      return Array.isArray(this.checked) ? this.checked.includes(this.value) : this.checked;
    },
    mergedListeners: function mergedListeners() {
      return _objectSpread2({}, this.$listeners, {
        change: this._onChange,
        invalid: this._onInvalid
      });
    }
  },
  methods: {
    _onChange: function _onChange($event) {
      var value = this._createValue($event.target.checked);

      if (this.hasError) {
        this.setError('');
      }

      this.$emit('change', value);
    },
    _createValue: function _createValue(isChecked) {
      if (Array.isArray(this.checked)) {
        if (isChecked) {
          return this.checked.concat(this.value);
        } else {
          var index = this.checked.indexOf(this.value);
          var result = this.checked.slice();

          if (index > -1) {
            result.splice(index, 1);
          }

          return result;
        }
      } else {
        return isChecked;
      }
    }
  }
};/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-switch-field is-checkbox",class:_vm.wrapperClasses},[_vm._t("default",[_c('input',_vm._g(_vm._b({staticClass:"fb-switch-field__element",attrs:{"type":"checkbox","aria-describedby":_vm.errorId}},'input',Object.assign({}, {id: _vm.id, value: _vm.value, checked: _vm.isChecked}, _vm.$attrs),false),_vm.mergedListeners)),(!!_vm.label)?_c('label',{staticClass:"fb-switch-field__label",attrs:{"for":_vm.id}},[_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")]):_vm._e()],null,{
            id: _vm.id,
            checked: _vm.isChecked,
            onChange: _vm._onChange,
            setError: _vm.setError,
            value: _vm.value
        }),_vm._ssrNode(" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-left has-pin-bottom-left",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = "data-v-28a9ae2e";
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbCheckbox = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );var script$5 = {
  name: 'FbCheckbox',
  mixins: [FieldMixin, ErrorMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: 'on'
    },
    checked: [String, Number]
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return {
        'has-error': this.hasError
      };
    },
    isChecked: function isChecked() {
      return this.checked === this.value;
    },
    mergedListeners: function mergedListeners() {
      return _objectSpread2({}, this.$listeners, {
        change: this._onChange,
        invalid: this._onInvalid
      });
    }
  },
  methods: {
    _onChange: function _onChange() {
      if (this.hasError) {
        this.setError('');
      }

      this.$emit('change', this.value);
    }
  }
};/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-switch-field is-radio",class:_vm.wrapperClasses},[_vm._ssrNode("<input type=\"radio\""+(_vm._ssrAttr("aria-describedby",_vm.errorId))+(_vm._ssrAttrs(Object.assign({}, {id: _vm.id, value: _vm.value, checked: _vm.isChecked}, _vm.$attrs)))+" class=\"fb-switch-field__element\">"+((!!_vm.label)?("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"fb-switch-field__label\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.label)+"\n    ")+"</label>"):"<!---->")+" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-left has-pin-bottom-left",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = "data-v-33bb173a";
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbRadio = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );var script$6 = {
  name: 'FbSelect',
  mixins: [FieldMixin, ErrorMixin],
  props: {
    value: {
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    wrapperClasses: function wrapperClasses() {
      return [{
        'is-filled': true
        /* temporary */

      }, {
        'has-label': !!this.label
      }, {
        'has-error': this.hasError
      }];
    },
    mergedListeners: function mergedListeners() {
      return _objectSpread2({}, this.$listeners, {
        change: this._onChange,
        invalid: this._onInvalid
      });
    }
  },
  methods: {
    _onChange: function _onChange($event) {
      if (this.hasError) {
        this.setError('');
      }

      this.$emit('input', $event.target.value);
    }
  }
};/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-select-field is-select",class:_vm.wrapperClasses},[_vm._ssrNode("<select"+(_vm._ssrAttr("aria-describedby",_vm.errorId))+(_vm._ssrAttrs(Object.assign({}, {id: _vm.id, multiple: _vm.multiple}, _vm.$attrs)))+" class=\"fb-select-field__element\">","</select>",[_vm._t("default",_vm._l((_vm.options),function(ref){
var text = ref.text;
var value = ref.value;
return _c('option',{key:value,domProps:{"value":value}},[_vm._v(_vm._s(text))])}))],2),_vm._ssrNode(" "+((!!_vm.label)?("<label"+(_vm._ssrAttr("for",_vm.id))+" class=\"fb-select-field__label\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.label)+"\n    ")+"</label>"):"<!---->")+" "),(_vm.error)?_vm._t("error",[_c('span',{staticClass:"fb-error is-center has-pin-bottom-center",attrs:{"id":_vm.errorId},on:{"click":_vm._onErrorClick}},[_vm._v("\n            "+_vm._s(_vm.error)+"\n        ")])],{"error":_vm.error}):_vm._e()],2)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = "data-v-24a4034b";
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbSelect = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );//
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
var script$7 = {
  name: 'FbMultiBlock',
  data: function data() {
    return {
      idx: [0]
    };
  },
  computed: {
    showRemove: function showRemove() {
      return this.idx.length > 1;
    }
  },
  methods: {
    add: function add() {
      this.idx.push(this.idx[this.idx.length - 1] + 1);
      this.$emit('added', this.idx[this.idx.length]);
    },
    remove: function remove(id) {
      var i = this.idx.indexOf(id);
      this.idx.splice(i, 1);
      this.$emit('removed', i);
    }
  }
};/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fb-field fb-multi-block"},[_vm._l((_vm.idx),function(id,i){return _vm._ssrNode("<div"+(_vm._ssrClass("fb-field fb-multi-block__field",{ 'has-remove': _vm.showRemove }))+">","</div>",[_vm._t("default",null,null,{ id: id, i: i }),_vm._ssrNode(" "+((_vm.showRemove)?("<button type=\"button\" class=\"fb-multi-block__remove\">\n            remove\n        </button>"):"<!---->"))],2)}),_vm._ssrNode(" <button type=\"button\" class=\"fb-multi-block__add\">\n        add\n    </button>")],2)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = "data-v-915c5d64";
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var FbMultiBlock = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );/**
 * Copy from
 * https://github.com/team-innovation/vue-sfc-rollup/blob/master/templates/library/src/lib-components/index.js
 */var components = /*#__PURE__*/Object.freeze({FormBuilder: FormBuilder,FbInput: FbInput,FbPassword: FbPassword,FbTextarea: FbTextarea,FbCheckbox: FbCheckbox,FbRadio: FbRadio,FbSelect: FbSelect,FbMultiBlock: FbMultiBlock});/**
 * Copy from
 * https://github.com/team-innovation/vue-sfc-rollup/blob/master/templates/library/src/entry.js
 */

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
} // Create module definition for Vue.use()


var plugin = {
  install: install // To auto-install when vue is found
  // window or global

};
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()
exports.FbCheckbox=FbCheckbox;exports.FbInput=FbInput;exports.FbMultiBlock=FbMultiBlock;exports.FbPassword=FbPassword;exports.FbRadio=FbRadio;exports.FbSelect=FbSelect;exports.FbTextarea=FbTextarea;exports.FormBuilder=FormBuilder;exports.default=plugin;