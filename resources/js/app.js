import "./bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from "vue";
import App from '@/App.vue';
import router from "@/router/router.js";
import Store from "@/store/store.js";


createApp(App)
    .use(router)
    .use(Store)
    .mount('#app');
