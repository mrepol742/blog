const { name, description, authors } = require('../../package')

module.exports = {
  title: name,
  theme: '@vuepress/theme-blog',
  description: description,
  head: [
    ['script', {}, `(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TFD9TXR');`],
    ['script async', {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5077097159223655',
      crossorigin: 'anonymous'
    }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],

    ['link', { rel: 'alternate', href: 'https://mrepol742.github.io/rss/index.xml', title: 'Melvin Jones Repol » Feed', type: 'application/rss+xml' }],
    ['link', { rel: 'sitemap', href: 'https://mrepol742.github.io/opensearch.xml', title: 'Search...', type: 'application/opensearchdescription+xml' }],
    ['link', { rel: 'sitemap', href: 'https://mrepol742.github.io/sitemap/index.xml', title: 'Melvin Jones Repol » Sitemap', type: 'application/xml' }],


    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],

    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'hostname', content: 'mrepol742.github.io' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'author', content: authors.name }],
    ['meta', { name: 'theme-color', content: '#4285f4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: 'Post',
        link: '/post/'
      },
      {
        text: 'Tag',
        link: '/tag/',
      },
      {
        text: 'Location',
        link: '/location/',
      },
      {
        text: 'Author',
        link: '/author/',
      },
    ],
    searchPlaceholder: 'Search articles...',
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://mrepol742.github.io/privacypolicy',
        },
        {
          text: 'MIT Licensed | Copyright © 2023 mrepol742',
        },
      ],
      contact: [
        {
          type: 'github',
          link: 'https://github.com/mrepol742',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/melvinjonesrepol',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com/in/mrepol742',
        },
        {
          type: 'youtube',
          link: 'https://youtube.com/@mrepol742',
        },
      ],
    },
  },
  plugins: [
    ['@vuepress/plugin-blog', {
      pwa: {
        skipWaiting: true
      },
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug',
        }
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tag/',
        },
        {
          id: 'location',
          keys: ['location', 'locations'],
          path: '/location/',
        },
        {
          id: 'author',
          keys: ['author', 'authors'],
          path: '/author/',
        },
        {
          id: 'date',
          keys: ['date', 'dates'],
          path: '/date/',
        }
      ],
      sitemap: {
        hostname: authors.url
      },
      feed: {
        canonical_base: authors.url
      },
    }]
  ]
}
