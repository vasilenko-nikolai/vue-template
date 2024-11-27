

export class RoutePath {

    constructor(public readonly routePath: string) {}

    generatePath(pathParams: Record<string, string>): string {
        return Object.entries(pathParams)
            .reduce(
                (resultPath, [pathParam, paramValue]) => {
                    return resultPath.replaceAll(`:${pathParam}`, paramValue);
                },
                this.routePath,
            );
    }

    toString(): string {
        return this.routePath;
    }

}
