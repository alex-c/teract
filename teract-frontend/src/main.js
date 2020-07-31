import Vue from 'vue';
Vue.config.productionTip = false;

// Router & Vuex
import router from './router';
import store from './store';

// Element UI & theme
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css';
import './style/theme.scss';
import enLocale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});

// Internationalization
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

// Load messages
import enMessages from './i18n/en.json';
const messages = {
  en: Object.assign(enMessages, enLocale),
};

// Configure internationalization
const language = localStorage.getItem('language') || 'en';
const i18n = new VueI18n({
  locale: language,
  //TODO: deactivated for development! Add back in later: fallbackLocale: 'en',
  messages,
});

// Mount app
import App from './App.vue';
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
