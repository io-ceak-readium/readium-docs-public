import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Readium',
  tagline: '당신의 독서를 시간으로 남기는 세션 중심 리딩 로그',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://io-ceak-readium.github.io',
  baseUrl: '/readium-docs-public/',

  organizationName: 'io-ceak-readium',
  projectName: 'readium-docs-public',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // ✅ "Edit this page" 링크는 네 repo로.
          // (원치 않으면 아래 editUrl 줄 자체를 삭제)
          editUrl: 'https://github.com/io-ceak-readium/readium-docs-public/tree/main/',
        },

        // ✅ 블로그 안 쓸 거면 false로 꺼버리는 게 깔끔함
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // social card는 나중에 교체 가능. 없으면 이 줄 삭제해도 됨.
    // image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Readium',
      logo: {
        alt: 'Readium Logo',
        src: 'img/logo-mark.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/intro', label: 'User Manual', position: 'left'},
        {to: '/docs/privacy', label: 'Privacy', position: 'left'},
        {
          href: 'https://github.com/io-ceak-readium/readium',
          label: 'App Repo',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'User Manual', to: '/docs/intro'},
            {label: 'Privacy Policy', to: '/docs/privacy'},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'GitHub Org', href: 'https://github.com/io-ceak-readium'},
            {label: 'App Repo', href: 'https://github.com/io-ceak-readium/readium'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:io.ceak.readium@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Readium`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;