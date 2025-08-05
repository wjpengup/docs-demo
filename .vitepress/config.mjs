import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs";

export default defineConfig({
  title: "我的厉害的文档项目",
  // seo
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6],
    lastUpdatedText: "上次更新",
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    logo: "/logo.png",
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      {
        text: "家",
        items: [
          { text: "主页", link: "/" },
          { text: "API", link: "/api-examples" },
        ],
      },
      { text: "指南", link: "/markdown-examples" },
      { text: "参考", link: "/api-examples" },
      // { text: '关于', link: '/about' },
      { text: "示例", link: "/markdown-examples" },
      { text: "自动生成侧边栏1", link: "/front-end/react/" },
      { text: "自动生成侧边栏2", link: "/back-end/rabbitmq/" },
      { text: "两边栏演示", link: "/两边栏演示" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示1", link: "/markdown-examples" },
    //       { text: "运行 API 演示1", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown 演示2", link: "/markdown-examples" },
    //       { text: "运行 API 演示2", link: "/api-examples" },
    //     ],
    //   },
    // ],
    sidebar: {
      "/front-end/react": set_sidebar("front-end/react"),
      "/back-end/rabbitmq": set_sidebar("back-end/rabbitmq"),
      // "/guide/": set_sidebar('Guide'),
      // "/config/": set_sidebar('Config'),
      // "/api/": set_sidebar('API'),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      copyright: "Copyright @2025 Demo Project",
    },
  },
});
