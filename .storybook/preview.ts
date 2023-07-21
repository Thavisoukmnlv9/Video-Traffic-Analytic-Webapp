import type { Preview } from "@storybook/react";

import { RefineWithoutLayout } from "./RefineWithoutLayout";

export const decorators = [RefineWithoutLayout];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
