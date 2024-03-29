/**
 * Copy from
 * https://github.com/team-innovation/vue-sfc-rollup/blob/master/templates/library/src/entry.js
 */

// Import vue components
import * as components from './components/index'

// Import styles
import './style/main.css'

// install function executed by Vue.use()

function install(Vue) {
    if (install.installed) return

    install.installed = true

    Object.keys(components).forEach(componentName => {
        Vue.component(componentName, components[componentName])
    })
}

// Create module definition for Vue.use()
const plugin = {
    install
}

// To auto-install when vue is found
// window or global

let GlobalVue = null

if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index'
