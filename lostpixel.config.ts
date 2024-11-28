import type { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: 'storybook-static',
  },
  generateOnly: true,
  imagePathBaseline: './.lost-pixels/baseline-images',
  imagePathCurrent: "./.lost-pixels/current-images",
  imagePathDifference: "./.lost-pixels/difference-images",
  failOnDifference: true,
};

