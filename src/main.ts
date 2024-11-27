import { createApp } from 'vue';
import {App, pinia, router} from "@/app";
import '@/app/stylesheets/main.scss';


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
