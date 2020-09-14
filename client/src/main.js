import Vue from 'vue';
import VueToasted from 'vue-toasted';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

Vue.use(VueToasted, {
  duration: 3000,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
