import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import './assets/styles/reset.css';
import './assets/styles/variables.css';
import './assets/styles/styles.css';
import './assets/styles/modals.css';

const app = createApp(App)

app.use(router)
app.use(store);
app.mount('#app')
