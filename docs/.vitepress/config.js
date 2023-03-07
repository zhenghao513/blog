import { defineConfig } from 'vitepress';
import basicLevel from './sidebar-items/basic-level';

export default defineConfig({
  lang: 'zh-CN',
  title: '科技艺术',
  description: '科技艺术的博客',
  base: '/blog/',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    logo: '/logo.jpg',
    sidebar: [
      {
        text: 'PAT',
        collapsed: false,
        items: [
          {
            text: 'Basic Level',
            collapsed: false,
            items: [...basicLevel],
          },
        ],
      },
    ],
    outlineTitle: '本页目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhenghao513' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-现在 Zheng Hao',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
  },

  markdown: {
    lineNumbers: true,
  },
});
