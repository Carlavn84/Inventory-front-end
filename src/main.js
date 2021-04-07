import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
app.mount('#app');
app.use(VueAxios, axios);

