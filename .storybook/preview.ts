import {Preview, setup} from "@storybook/vue3";
import {pinia, router} from "../src/app";

setup((app) => {
  app.use(router);
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
