import { createApp } from 'vue'
import App from './App.vue'

//Add VueBootstrap vue Registration

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// EndAdd VueBootstrap vue Registration

createApp(App).mount('#app')
