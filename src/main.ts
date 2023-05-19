import { createApp } from 'vue';
import '@csstools/normalize.css';
import './styles/main.pcss';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { spreadsheetsPlugin } from 'spreadsheets-vue';
import 'spreadsheets-vue/style.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(spreadsheetsPlugin);

app.mount('#app');
