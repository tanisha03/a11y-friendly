const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/.cache/dev-404-page.js"))),
  "component---src-posts-accessible-dropdown-navigation-mdx": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/posts/accessible-dropdown-navigation.mdx"))),
  "component---src-posts-accessible-form-mdx": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/posts/accessible-form.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/index.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/contact.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/about.js")))
}

