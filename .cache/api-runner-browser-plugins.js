module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"a11y-blog-template","short_name":"blog","start_url":"/","background_color":"#7c3028","theme_color":"#7c3028","display":"minimal-ui","icon":"src/images/logo.svg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"posts":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js","default":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null,"aliases":{}}}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
