import {RoutePath} from "./RoutePath";

export enum RouteName {
    MAIN = 'main'
}

export const RoutePaths: Record<RouteName, RoutePath> = {
    [RouteName.MAIN]: new RoutePath('/'),
};
