import { createApp } from 'vue';
import {App, pinia, router} from "@/app";

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
