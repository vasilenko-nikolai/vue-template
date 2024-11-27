import {Meta, StoryObj} from "@storybook/vue3";
import UButton from "./UButton.vue";


const meta: Meta<typeof UButton> = {
    title: 'shared/Button',
    component: UButton,
};

export default meta;
type Story = StoryObj<typeof UButton>;

export const Primary: Story = {
    args: {
        default: 'Нажми меня',
    },
};

export const Disabled: Story = {
    args: {
        default: 'Нажми меня',
        disabled: true,
    },
};

