import {describe, it, expect} from "vitest";
import {RoutePath} from "@/shared/config/router/RoutePath";

describe('RoutePath', () => {

    it('generate from path params', () => {
        const path = new RoutePath('/app/:id');
        expect(path.generatePath({id: '1'})).equal('/app/1');
    });

    it('toString', () => {
        const path = new RoutePath('/app/:id');
        expect(path.toString()).equal('/app/:id');
    });



});
