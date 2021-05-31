import Vue from 'vue';
import App from './App.vue';

/*Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/

Vue.customElement('bednet-chat', App, {
  shadow: true,
  shadowCss: ``,
});
