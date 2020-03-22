module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"defaultLayouts":{"posts":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js","default":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
