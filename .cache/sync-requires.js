// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Lee/Desktop/blog2.0.0/contentful-gatsby-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\src\\pages\\blog.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\layout-index.json"),
  "blog-automate-with-webhooks.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\blog-static-sites-are-great.json"),
  "dev-404-page.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\dev-404-page.json"),
  "blog.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\blog.json"),
  "index.json": require("C:\\Users\\Lee\\Desktop\\blog2.0.0\\contentful-gatsby-blog\\.cache\\json\\index.json")
}