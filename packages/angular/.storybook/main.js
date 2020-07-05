module.exports = {
  stories: ['../**/*.stories.[tj]s', "../stories/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    '@storybook/addon-knobs/register'
  ]
};
