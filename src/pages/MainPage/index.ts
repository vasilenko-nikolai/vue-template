import {DefineComponent} from "vue";

export const MainPage = async (): Promise<DefineComponent> => await import('./ui/MainPage/MainPage.vue');
