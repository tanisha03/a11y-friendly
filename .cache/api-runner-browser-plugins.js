module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-162678200-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"a11y-blog-template","short_name":"blog","start_url":"/","background_color":"#7c3028","theme_color":"#7c3028","display":"minimal-ui","icon":"src/images/logo.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"551c0474b57a9d3a848871a76577cb27"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"posts":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js","default":"/home/tanisha/Documents/a11y-friendly/src/components/layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null,"aliases":{}}},{"resolve":"gatsby-remark-images"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
