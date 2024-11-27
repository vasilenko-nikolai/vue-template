

export class RoutePath {

    constructor(public readonly routePath: string) {}

    generatePath(pathParams: Record<string, string>): string {
        return Object.entries(pathParams)
            .reduce(
                (resultPath, [pathParam, paramValue]) => {
                    return resultPath.replace(`:${pathParam}`, paramValue);
                },
                this.routePath,
            );
    }

    toString(): string {
        return this.routePath;
    }

}
