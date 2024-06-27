import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Panda诚的博客",
  description: "古来圣贤皆贫贱 何况我辈孤且直",

  base: "/",

  head: [
    // 图标
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    ['meta', {name: 'referrer', content: 'no-referrer'}],
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
