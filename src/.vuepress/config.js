const { description } = require('../../package')

module.exports = {
  title: 'mrepol742 @ Blog',
  description: description,
  head: [

    ['link', { rel: 'alternate', href: 'https://mrepol742.github.io/rss/index.xml', title: 'Melvin Jones Repol » Feed', type: 'application/rss+xml' }],
    ['link', { rel: 'sitemap', href: 'https://mrepol742.github.io/opensearch.xml', title: 'Search...', type: 'application/opensearchdescription+xml' }],
    ['link', { rel: 'sitemap', href: 'https://mrepol742.github.io/sitemap/index.xml', title: 'Melvin Jones Repol » Sitemap', type: 'application/xml' }],


    ['link', { rel: 'icon', href: 'https://mrepol742.github.io/favicon.png' }],
    ['link', { rel: 'shortcut icon', href: 'https://mrepol742.github.io/favicon.png' }],
    ['link', { rel: 'icon', href: 'https://mrepol742.github.io/favicon.ico', type: 'image/x-icon' }],

    ['link', { rel: 'manifest', href: 'https://mrepol742.github.io//site.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://mrepol742.github.io/favicon.png' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://mrepol742.github.io/favicon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'hostname', content: 'mrepol742.github.io' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'author', content: 'Melvin Jones Repol' }],
    ['meta', { name: 'theme-color', content: '#4285f4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: 'https://mrepol742.github.io/favicon.ico',
    sidebar: 'auto',
    repo: 'mrepol742/blog',
    repoLabel: 'Contribute!',
    docsRepo: 'mrepol742/blog',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    displayAllHeaders: true,
    lastUpdated: true,
    searchPlaceholder: 'Search articles...',
    nav: [

      {
        text: 'Guides',
        ariaLabel: 'A Comprehensive Guide',
        items: [
          {
            text: 'Must Have Gadgets 2023',
            link: '/_post/top-10-must-have-gadgets-for-2023/',
          },
          {
            text: 'Healthy and Delicious Recipes',
            link: '/_post/healthy-and-delicious-recipes-for-weight-loss/',
          },
          {
            text: 'Best Practices to Use ChatGPT',
            link: '/_post/mastering-the-art-best-practices-to-use-chatgpt/',
          },
        ]
      },
      {
        text: 'DIY',
        ariaLabel: 'Do it Yourself',
        items: [
          {
            text: 'DIY Home Decor Ideas on a Budget',
            link: '/_post/diy-home-decor-ideas-on-a-budget/',
          },
        ]
      },
      {
        text: 'Travel',
        ariaLabel: 'Travel Destinations',
        items: [
          {
            text: 'Best Travel Destinations in 2023',
            link: '/_post/best-travel-destinations-in-2023/',
          },
        ]
      },
      {
        text: 'Technology',
        ariaLabel: 'Technology',
        items: [
          {
            text: 'OpenAI Chatgpt + DELL',
            link: '/_post/openai-chatgpt-dell-revolutionizing-conversational-ai/',
          },
          {
            text: 'Google Gemini: Unveling the Future of AI',
            link: '/_post/unveiling-the-future-google-gemini/',
          },
          {
            text: 'Exploring the future of browsing with Webvium Browser',
            link: '/_post/exploring-future-of-browsing-introducing-webvium-browser/',
          },
        ]
      },
      {
        text: 'Topics',
        link: '/topics/',
      },
    ]
  },
  plugins: [
    '@vuepress/nprogress',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/google-analytics', {
      'ga': 'UA-00000000-0' // UA-00000000-0
    }]
  ]
}
