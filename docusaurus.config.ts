import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'X-English',
  tagline: 'XeraFun 旗下系统化英语学习平台 · 从零基础到流利表达',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://english.xerafun.com',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/',
  trailingSlash: false,

  organizationName: 'xerafun',
  projectName: 'x-english',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://xerafun.com/#organization',
            name: 'XeraFun',
            url: 'https://xerafun.com',
            logo: 'https://english.xerafun.com/img/logo.svg',
            sameAs: [
              'https://github.com/xerafun',
              'https://xerafun.com',
            ],
          },
          {
            '@type': 'EducationalOrganization',
            '@id': 'https://english.xerafun.com/#organization',
            name: 'X-English',
            url: 'https://english.xerafun.com',
            parentOrganization: {
              '@id': 'https://xerafun.com/#organization',
            },
            description:
              'X-English 是 XeraFun 旗下的系统化英语学习平台，提供语法知识体系、分级词汇、PETS-3备考、自考13000专升本英语专项与互动学习工具。',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://english.xerafun.com/#website',
            url: 'https://english.xerafun.com',
            name: 'X-English',
            alternateName: [
              'XeraFun English',
              'XeraFun 英语',
              'X-English 英语学习平台',
            ],
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://xerafun.com/#website',
              name: 'XeraFun',
              url: 'https://xerafun.com',
            },
            publisher: {
              '@id': 'https://xerafun.com/#organization',
            },
            inLanguage: 'zh-CN',
            description:
              'X-English（XeraFun 旗下英语学习平台）提供系统化英语学习资源：语法结构图解、分级核心词汇、PETS-3专项备考、自考13000专升本英语及交互式打卡练习。',
          },
        ],
      }),
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'text/plain',
        href: 'https://english.xerafun.com/llms.txt',
        title: 'LLMs.txt for AI agents and search engines',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'X-English, XeraFun, XeraFun英语, 英语学习, 专升本英语, 13000英语, 13000专升本, PETS-3, PET3, 自考英语二, 英语语法, 英语词汇, 英语写作打卡, 英语听力',
      },
      {
        name: 'description',
        content:
          'X-English 是 XeraFun 旗下的系统化英语学习平台。涵盖英语语法体系、分级词汇、PETS-3专项备考、自考13000专升本英语及交互式写作打卡工具。',
      },
      {
        name: 'author',
        content: 'XeraFun',
      },
      {
        property: 'og:site_name',
        content: 'X-English | XeraFun',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:locale',
        content: 'zh_CN',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'X-English',
      logo: {
        alt: 'X-English Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'grammarSidebar',
          position: 'left',
          label: '📖 语法',
        },
        {
          type: 'docSidebar',
          sidebarId: 'vocabularySidebar',
          position: 'left',
          label: '📝 词汇',
        },
        {
          type: 'docSidebar',
          sidebarId: 'readingSidebar',
          position: 'left',
          label: '📚 阅读',
        },
        {
          type: 'docSidebar',
          sidebarId: 'writingSidebar',
          position: 'left',
          label: '✍️ 写作',
        },
        {
          type: 'docSidebar',
          sidebarId: 'listeningSidebar',
          position: 'left',
          label: '🎧 听力',
        },
        {
          type: 'docSidebar',
          sidebarId: 'pet3Sidebar',
          position: 'left',
          label: '🏆 PET3',
        },
        {
          href: 'https://xerafun.com',
          position: 'right',
          label: '🏠 XeraFun 主站',
        },
        {
          href: 'https://github.com/xerafun/x-english',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '核心模块',
          items: [
            {label: '语法体系', to: '/docs/grammar/intro'},
            {label: '场景词汇', to: '/docs/vocabulary/intro'},
            {label: '分级阅读', to: '/docs/reading/intro'},
          ],
        },
        {
          title: '技能与备考',
          items: [
            {label: '听力精听', to: '/docs/listening/intro'},
            {label: '写作训练', to: '/docs/writing/intro'},
            {label: 'PETS-3 备考', to: '/docs/pet3/speaking/speaking-guide'},
            {label: '13000 专升本打卡', to: '/docs/writing/checkin'},
          ],
        },
        {
          title: 'XeraFun 矩阵',
          items: [
            {label: 'XeraFun 官网主站', href: 'https://xerafun.com'},
            {label: 'X-English 平台', href: 'https://english.xerafun.com'},
            {label: 'GitHub 源码', href: 'https://github.com/xerafun/x-english'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} X-English · Powered by XeraFun. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
