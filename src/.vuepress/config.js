const { config } = require("vuepress-theme-hope");
const resolveSideBar = require('../sidebar') 

module.exports = config({
  title: "Panda诚的博客",
  description: "古来圣贤皆贫贱 何况我辈孤且直",
  base: "/",
  dest: "./docs",
  
  // remove this if you are not using Vue and React in "markdownEnhance: code demo"
  head: [
    ['meta', {name: 'referrer', content: 'no-referrer'}],
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  
  locales: {
    "/": {
      // 设置需要的语言
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: '/panda.gif',
    hostname: "https://zhangchengk.github.io/",
    feed: false,
    nav: [
      { text: "Home", link: "/", icon: "home" },
      { text: '时间轴', link: '/timeline/', icon: 'date' },
      { text: 'Tags', link: '/tag/', icon: 'tag' }
    ],
    sidebar: {
      "/": resolveSideBar(),
    },

    author: "Panda诚",

    blog: {
      avatar: "/avatar.png",
      intro: "/about/intro/",
      sidebarDisplay: "mobile",
      links: {
        github: "https://github.com/zhangchengk",
        QQ: "/about/qq",
        Wechat: "/about/wechat",
        // Csdn: "https://blog.csdn.net/weixin_36048246"
      },
    },

    comment: {
      type: "valine", // 使用 Valine
      appId: "fbcXjzioJnXnxTY7HkGmW9j0-gzGzoHsz", // your appId
      appKey: "stHrC3GLCxK6Pmgdvqt3Vd0D", // your appKey
    },

    copyright: {
      status: "global",
    },

    footer: {
      display: true,
      content: "读书又笔记",
      copyright: "Copyright © 1992-present Panda诚",
    },

    mdEnhance: {
      // please only enable the features you need
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/logo.png",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
      generateSwConfig: {
        skipWaiting: true,
      },
    },

    lastUpdate: {
      // set it to your timezone
      timezone: "Asia/Shanghai",
    },
  },
});
