import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: '사용자 매뉴얼',
      items: [
        'library',
        'catalog-search',
        'book-detail',
        'now-reading',
        'reading-session',
        'notes',
        'timeline',
        'stats',
        'backup-restore',
      ],
    },
    'privacy',
  ],
};

export default sidebars;
