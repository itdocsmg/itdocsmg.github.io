// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './docs/**/*.html',
    './docs/**/*.vue',
    './docs/**/*.jsx',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  title: "VuePress + CodeSandbox",
  description: "VuePress starter template for CodeSandbox",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/" },
      {
        text: "GitHub",
        link: "https://github.com/vicbergquist/codesandbox-vuepress/"
      }
    ]
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js"),
      ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
    ]
  }
};
