import {RouteComponent} from "vue-router";

export const MainPage = (): Promise<RouteComponent> => import('./ui/MainPage/MainPage.vue');
