const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/.cache/dev-404-page.js"))),
  "component---src-posts-contact-mdx": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/posts/contact.mdx"))),
  "component---src-posts-contact-2-mdx": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/posts/contact2.mdx"))),
  "component---src-posts-nav-mdx": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/posts/nav.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/tanisha/Documents/a11y-friendly/src/pages/page-2.js")))
}

