import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

fetch("config.json")
  .then(res => res.json())
  .then(config => {
    window.config = config;
    new Vue({
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  })
  .catch(e => {
    document.querySelector("#app").innerHTML = `<pre>Error:\n${e.message}</pre>`;
  })


