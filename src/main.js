import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig)
app.config.devtools = true;
app.mount("#app");
