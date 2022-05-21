import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
import resolveSideBar from '../sidebar'


export default hopeTheme({
  hostname: "https://zhangchengk.github.io/",

  author: {
    name: "Panda诚",
    url: "https://zhangchengk.github.io/about/intro.html",
  },

  iconPrefix: "iconfont icon-",

  logo: "/panda.gif",

  repo: "zhangchengk",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: resolveSideBar(),

  footer: "读书又笔记",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    avatar: "/avatar.png",
    name: "Panda诚",
    description: "越规范 越简单",
    intro: "/about/intro/",
    medias: {
      GitHub: "https://github.com/zhangchengk",
      QQ: "/about/qq",
      Wechat: "/about/wechat",
    },
  },

  plugins: {
    // 启用博客功能后，主题允许你通过页面的 frontmatter，
    // 为页面配置分类、标签、是否是文章、是否出现在时间线中、收藏、置顶等功能。
    blog: true,
    pwa: true,
    
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
