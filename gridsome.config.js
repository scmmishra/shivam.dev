// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Shivam Mishra",
  siteDescription:
    "Maintainer for Frappe & Frappe Charts. Building great OSS at Frappe Technologies",

  templates: {
    Post: "/:title",
    Tag: "/tag/:id",
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-fathom",
      options: {
        siteId: "PNSYY",
        // usefal if you're running a self-hosted fathom instance
        trackerUrl: "http://stats.shivam.dev/tracker.js",
        // declare this to ensure your tracking only occurs on a single host
        host: "shivam.dev",
        // set to true for local debugging; defaults to false
        debug: false,
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
