import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import UButton from "./UButton.vue";


describe('UButton', () => {

    it('button has disabled', () => {
        const wrapper = mount(UButton, {
            props: {
                disabled: true,
            }
        })

        const button = wrapper.get('[data-test="button"]')
        const strings = button.classes();
        expect(strings).contains('disabled')
    })

    it("button hasn't disabled", () => {
        const wrapper = mount(UButton, {
            props: {
                disabled: false,
            }
        })
        const button = wrapper.get('[data-test="button"]')
        expect(button.classes()).not.contains('disabled')
    })

})
