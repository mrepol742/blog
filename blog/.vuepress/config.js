const { name, description, authors } = require('../../package')

module.exports = {
  base: '/',
  title: name,
  theme: '@vuepress/theme-blog',
  description: description,
  head: [
    ['script', {
      "data-name": "BMC-Widget",
      "data-cfasync": false,
      src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
      "data-id": 'mrepol742',
      "data-description": "Support me on Buy me a coffee!",
      "data-message": "",
      "data-color": "#5F7FFF",
      "data-position": "Right",
      "data-x_margin": "18",
      "data-y_margin": "18"
    }],

    // Twitter
    ['meta', { name: 'twitter:site', content: '@mrepol742' }],
    ['meta', { name: 'twitter:domain', content: 'mrepol742-blog.vercel.app' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image:src', content: '/images/cover.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'mrepol742 @ blog cover' }],
    ['meta', { name: 'twitter:description', content: '' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'article:author', content: 'https://facebook.com/melvinjonesrepol' }],
   // ['meta', { property: 'og:url', content: 'https://mrepol742.github.io/blog' }],
    ['meta', { property: 'og:site_name', content: '@mrepol742 / blog' }],
    ['meta', { property: 'og:description', content: '' }],
    ['meta', { property: 'og:image', content: '/images/cover.png' }],
    ['meta', { property: 'og:image:alt', content: 'mrepol742 @ blog cover' }],

    // Google Tag Manager
    ['script', {}, `(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TFD9TXR');`],

    // Google Adsense
    ['script async', {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5077097159223655',
      crossorigin: 'anonymous'
    }],

    // PWA
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],

    // Icons
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.png' }],

    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'hostname', content: 'mrepol742-blog.vercel.app' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#4285f4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

    ['meta', { name: 'hostname', content: 'mrepol742-blog.vercel.app' }],
    ['link', { rel: 'canonical', href: 'https://mrepol742-blog.vercel.app' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: 'Tags',
        link: '/tags/',
      },
      {
        text: 'Authors',
        link: '/authors/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Github',
        link: 'https://github.com/mrepol742/blog',
      }
    ],
    searchPlaceholder: 'Search articles...',
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://mrepol742.github.io/privacypolicy',
        },
        {
          text: 'MIT Licensed | Copyright © 2025 mrepol742',
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
          itemPermalink: '/:slug',
        }
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag', 'tags'],
          path: '/tags/',
        },
        {
          id: 'author',
          keys: ['author', 'authors'],
          path: '/authors/',
        }
      ],
      sitemap: {
        hostname: authors.url
      },
      feed: {
        canonical_base: 'https://mrepol742-blog.vercel.app',
      },
      comment: {
        service: 'disqus',
        shortname: 'mrepol742-blog',
      }
    }]
  ]
}
