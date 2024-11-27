import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {RouteName, RoutePaths} from "@/shared/config/router/routes";

const routes: ReadonlyArray<RouteRecordRaw> = [
    {
        name: RouteName.MAIN,
        path: RoutePaths[RouteName.MAIN],
    },
];



export const router = createRouter({
    routes,
    history: createWebHistory(),
});
