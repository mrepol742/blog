module.exports = {
  base: "/",
  title: "Deep",
  theme: "@vuepress/theme-blog",
  description: "",
  head: [
    // [
    //   "script",
    //   {
    //     "data-name": "BMC-Widget",
    //     "data-cfasync": false,
    //     src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
    //     "data-id": "mrepol742",
    //     "data-description": "Support me on Buy me a coffee!",
    //     "data-message": "",
    //     "data-color": "#5F7FFF",
    //     "data-position": "Right",
    //     "data-x_margin": "18",
    //     "data-y_margin": "18",
    //   },
    // ],

    // Twitter
    ["meta", { name: "twitter:site", content: "@mrepol742" }],
    ["meta", { name: "twitter:domain", content: "projectdeep.vercel.app" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image:src", content: "/images/cover.png" }],
    ["meta", { name: "twitter:image:alt", content: "mrepol742 @ blog cover" }],
    ["meta", { name: "twitter:description", content: "" }],

    // Open Graph
    ["meta", { property: "og:type", content: "article" }],
    [
      "meta",
      {
        property: "article:author",
        content: "https://facebook.com/melvinjonesrepol",
      },
    ],
    // ['meta', { property: 'og:url', content: 'https://mrepol742.github.io/blog' }],
    ["meta", { property: "og:site_name", content: "@mrepol742 / blog" }],
    ["meta", { property: "og:description", content: "" }],
    ["meta", { property: "og:image", content: "/images/cover.png" }],
    ["meta", { property: "og:image:alt", content: "mrepol742 @ blog cover" }],

    // Google Adsense
    [
      "script async",
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5077097159223655",
        crossorigin: "anonymous",
      },
    ],

    // Google Tag Manager
    [
      "script async",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-0T7201Q3PZ",
      },
    ],

    // Google Tag Manager
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-0T7201Q3PZ');`,
    ],

    // PWA
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],

    // Icons
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.png" }],
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "apple-touch-icon", href: "/favicon.png" }],
    ["meta", { name: "msapplication-TileImage", content: "/favicon.png" }],

    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
    ["meta", { charset: "utf-8" }],
    ["meta", { name: "hostname", content: "projectdeep.vercel.app" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["meta", { name: "theme-color", content: "#4285f4" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],

    ["meta", { name: "hostname", content: "projectdeep.vercel.app" }],
    ["link", { rel: "canonical", href: "https://projectdeep.vercel.app" }],
  ],
  themeConfig: {
    dateFormat: "ddd MMMM D YYYY",
    summaryLength: 700,
    smoothScroll: true,
    nav: [
      {
        text: "Tags",
        link: "/tag/",
      },
      {
        text: "Authors",
        link: "/authors/",
      },
      {
        text: "Random",
        link: "/random/",
      },
    ],
    searchPlaceholder: "Search deep",
    footer: {
      copyright: [
        {
          text: "About",
          link: "/about/",
        },
        {
          text: "Terms",
          link: "/terms/",
        },
        {
          text: "Privacy",
          link: "/privacy/",
        },
        {
          text: "MIT License",
          link: "https://raw.githubusercontent.com/mrepol742/project-deep/refs/heads/master/LICENSE",
        },
        {
          text: "© 2025 Melvin Jones Repol",
        },
      ],
      contact: [
        {
          type: "github",
          link: "https://github.com/mrepol742/project-deep",
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/plugin-blog",
      {
        pwa: {
          skipWaiting: true,
        },
        directories: [
          {
            id: "post",
            title: "Home",
            dirname: "_posts",
            path: "/",
            itemPermalink: "/deep/:slug",
            pagination: {
              lengthPerPage: 15,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            title: "Tags",
            keys: ["tag", "tags"],
            path: "/tag/",
          },
          {
            id: "author",
            title: "Authors",
            keys: ["author", "authors"],
            path: "/authors/",
          },
        ],
        sitemap: {
          hostname: "https://projectdeep.vercel.app",
        },
        feed: {
          canonical_base: "https://projectdeep.vercel.app",
        },
        comment: {
          service: "disqus",
          shortname: "mrepol742-blog",
        },
      },
    ],
  ],
};
