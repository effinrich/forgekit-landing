import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../libs/**/src/**/*.stories.@(js|jsx|ts|tsx)", "../libs/**/src/**/*.mdx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
