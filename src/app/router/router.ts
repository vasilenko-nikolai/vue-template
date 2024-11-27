import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {RouteName, RoutePaths} from "@/shared/config/router/routes";
import {MainPage} from "@/pages/MainPage";

const routes: ReadonlyArray<RouteRecordRaw> = [
    {
        name: RouteName.MAIN,
        path: RoutePaths[RouteName.MAIN].toString(),
        component: MainPage,
    },
];



export const router = createRouter({
    routes,
    history: createWebHistory(),
});
