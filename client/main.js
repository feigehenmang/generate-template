import { createApp } from 'vue';
import App from './src/App.vue'
import { getRootContainer } from './src/container';
import router from './src/router';
import store from './src/store';
const app = createApp(App);
app.use(router)
app.use(store)
app.mount(getRootContainer())